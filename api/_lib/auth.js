const crypto = require("crypto");

const COOKIE_NAME = "cc_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function parseCookies(req) {
  const cookieHeader = req.headers.cookie || "";

  return cookieHeader
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((accumulator, part) => {
      const separatorIndex = part.indexOf("=");

      if (separatorIndex === -1) {
        return accumulator;
      }

      const key = part.slice(0, separatorIndex).trim();
      const value = part.slice(separatorIndex + 1).trim();
      accumulator[key] = decodeURIComponent(value);
      return accumulator;
    }, {});
}

function readJsonBody(req) {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch (error) {
      return {};
    }
  }

  return req.body;
}

function createSessionToken() {
  return crypto.randomBytes(32).toString("base64url");
}

function getSessionToken(req) {
  const cookies = parseCookies(req);
  return String(cookies[COOKIE_NAME] || "").trim();
}

async function getAuthenticatedSession(req, supabase) {
  const token = getSessionToken(req);

  if (!token) {
    return null;
  }

  const { data, error } = await supabase
    .from("admin_sessions")
    .select("token, user_id, expires_at, admin_users!inner(id, username, is_active)")
    .eq("token", token)
    .eq("admin_users.is_active", true)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  const expiresAt = new Date(data.expires_at).getTime();

  if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    await supabase.from("admin_sessions").delete().eq("token", token);
    return null;
  }

  return {
    token: data.token,
    userId: data.user_id,
    expiresAt: data.expires_at,
    user: Array.isArray(data.admin_users) ? data.admin_users[0] : data.admin_users
  };
}

async function isAuthenticatedRequest(req, supabase) {
  const session = await getAuthenticatedSession(req, supabase);
  return Boolean(session);
}

function buildSessionCookie(token, secure) {
  return [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${SESSION_MAX_AGE}`,
    secure ? "Secure" : ""
  ]
    .filter(Boolean)
    .join("; ");
}

function buildClearedSessionCookie(secure) {
  return [
    `${COOKIE_NAME}=`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=0",
    secure ? "Secure" : ""
  ]
    .filter(Boolean)
    .join("; ");
}

function isSecureRequest(req) {
  return req.headers["x-forwarded-proto"] === "https";
}

module.exports = {
  buildClearedSessionCookie,
  buildSessionCookie,
  createSessionToken,
  getAuthenticatedSession,
  getSessionToken,
  isAuthenticatedRequest,
  isSecureRequest,
  readJsonBody,
  SESSION_MAX_AGE
};

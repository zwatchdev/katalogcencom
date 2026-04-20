const {
  buildSessionCookie,
  createSessionToken,
  isSecureRequest,
  readJsonBody,
  SESSION_MAX_AGE
} = require("./_lib/auth");
const { createSupabaseAdminClient } = require("./_lib/supabase");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const supabase = createSupabaseAdminClient();
    const body = readJsonBody(req);
    const username = String(body.username || "").trim();
    const password = String(body.password || "");

    if (!username || !password) {
      res.status(400).json({ error: "Username dan password wajib diisi." });
      return;
    }

    const { data, error } = await supabase.rpc("verify_admin_login", {
      login_username: username,
      login_password: password
    });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    const adminUser = Array.isArray(data) ? data[0] : null;

    if (!adminUser?.id) {
      res.status(401).json({ error: "Username atau password tidak sesuai." });
      return;
    }

    const token = createSessionToken();
    const expiresAt = new Date(Date.now() + SESSION_MAX_AGE * 1000).toISOString();
    const { error: sessionError } = await supabase.from("admin_sessions").insert({
      token,
      user_id: adminUser.id,
      expires_at: expiresAt
    });

    if (sessionError) {
      res.status(500).json({ error: sessionError.message });
      return;
    }

    res.setHeader("Set-Cookie", buildSessionCookie(token, isSecureRequest(req)));
    res.status(200).json({ authenticated: true, username: adminUser.username });
  } catch (error) {
    res.status(500).json({ error: error.message || "Terjadi kesalahan server." });
  }
};

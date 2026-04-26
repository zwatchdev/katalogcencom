const {
  buildClearedSessionCookie,
  getSessionToken,
  isSecureRequest
} = require("./_lib/auth");
const { createSupabaseAdminClient } = require("./_lib/supabase");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const supabase = createSupabaseAdminClient();
    const token = getSessionToken(req);

    if (token) {
      await supabase.from("admin_sessions").delete().eq("token", token);
    }

    res.setHeader("Set-Cookie", buildClearedSessionCookie(isSecureRequest(req)));
    res.status(200).json({ authenticated: false });
  } catch (error) {
    res.status(500).json({ error: error.message || "Terjadi kesalahan server." });
  }
};

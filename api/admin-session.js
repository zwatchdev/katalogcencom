const { isAuthenticatedRequest } = require("./_lib/auth");
const { createSupabaseAdminClient } = require("./_lib/supabase");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const supabase = createSupabaseAdminClient();
    const authenticated = await isAuthenticatedRequest(req, supabase);
    res.status(200).json({ authenticated });
  } catch (error) {
    res.status(500).json({ error: error.message || "Terjadi kesalahan server." });
  }
};

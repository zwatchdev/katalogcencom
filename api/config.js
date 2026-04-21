const { getSupabaseConfig } = require("./_lib/supabase");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { url, anonKey } = getSupabaseConfig();

  res.status(200).json({
    enabled: Boolean(url && anonKey),
    supabaseUrl: url || "",
    supabaseAnonKey: anonKey || ""
  });
};

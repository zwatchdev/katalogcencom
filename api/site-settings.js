const { isAuthenticatedRequest, readJsonBody } = require("./_lib/auth");
const { createSupabaseAdminClient } = require("./_lib/supabase");

const DEFAULT_ID = "default";

function normalizeSettings(rawSettings) {
  const settings = rawSettings && typeof rawSettings === "object" ? rawSettings : {};

  return {
    bannerImage: String(settings.bannerImage || "")
  };
}

module.exports = async function handler(req, res) {
  try {
    const supabase = createSupabaseAdminClient();

    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("site_settings")
        .select("id, settings, updated_at")
        .eq("id", DEFAULT_ID)
        .maybeSingle();

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({
        settings: normalizeSettings(data?.settings),
        updatedAt: data?.updated_at || null
      });
      return;
    }

    if (req.method !== "PUT") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    if (!await isAuthenticatedRequest(req, supabase)) {
      res.status(401).json({ error: "Sesi admin tidak valid." });
      return;
    }

    const body = readJsonBody(req);
    const settings = normalizeSettings(body.settings);

    const { error } = await supabase
      .from("site_settings")
      .upsert(
        {
          id: DEFAULT_ID,
          settings,
          updated_at: new Date().toISOString()
        },
        { onConflict: "id" }
      );

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message || "Terjadi kesalahan server." });
  }
};

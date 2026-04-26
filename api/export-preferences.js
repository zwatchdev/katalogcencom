const { isAuthenticatedRequest, readJsonBody } = require("./_lib/auth");
const { createSupabaseAdminClient } = require("./_lib/supabase");

function resolvePreferenceId(req) {
  return String(req.query?.scope || "").trim().toLowerCase() === "credit"
    ? "credit"
    : "default";
}

function normalizeCustomImagesByPage(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { "1": ["", "", ""] };
  }

  const entries = Object.entries(value).map(([page, images]) => [
    String(page),
    Array.isArray(images)
      ? Array.from({ length: 3 }, (_, index) => String(images[index] || ""))
      : ["", "", ""]
  ]);

  return entries.length ? Object.fromEntries(entries) : { "1": ["", "", ""] };
}

function normalizeSettings(rawSettings) {
  const settings = rawSettings && typeof rawSettings === "object" ? rawSettings : {};

  return {
    logoImage: String(settings.logoImage || ""),
    brochureDate: String(settings.brochureDate || ""),
    storeName: String(settings.storeName || ""),
    addressLine1: String(settings.addressLine1 || ""),
    addressLine2: String(settings.addressLine2 || ""),
    phone: String(settings.phone || ""),
    note: String(settings.note || ""),
    customImagesByPage: normalizeCustomImagesByPage(settings.customImagesByPage)
  };
}

function normalizeState(rawState) {
  const state = rawState && typeof rawState === "object" ? rawState : {};

  return {
    selectedProductIds: Array.isArray(state.selectedProductIds)
      ? state.selectedProductIds.map((id) => String(id || "").trim()).filter(Boolean)
      : [],
    manualOrder: Boolean(state.manualOrder)
  };
}

module.exports = async function handler(req, res) {
  try {
    const supabase = createSupabaseAdminClient();
    const preferenceId = resolvePreferenceId(req);

    if (req.method === "GET") {
      if (!await isAuthenticatedRequest(req, supabase)) {
        res.status(401).json({ error: "Sesi admin tidak valid." });
        return;
      }

      const { data, error } = await supabase
        .from("export_preferences")
        .select("id, settings, state, updated_at")
        .eq("id", preferenceId)
        .maybeSingle();

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({
        settings: normalizeSettings(data?.settings),
        state: normalizeState(data?.state),
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
    const state = normalizeState(body.state);

    const { error } = await supabase
      .from("export_preferences")
      .upsert(
        {
          id: preferenceId,
          settings,
          state,
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

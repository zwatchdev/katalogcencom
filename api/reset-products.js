const { isAuthenticatedRequest, readJsonBody } = require("./_lib/auth");
const { createSupabaseAdminClient } = require("./_lib/supabase");

function normalizeSpecs(specs) {
  if (!Array.isArray(specs)) {
    return [];
  }

  return specs
    .map((entry) => {
      if (!Array.isArray(entry) || entry.length < 2) {
        return null;
      }

      const key = String(entry[0] ?? "").trim();
      const value = String(entry[1] ?? "").trim();

      if (!key || !value) {
        return null;
      }

      return [key, value];
    })
    .filter(Boolean);
}

function normalizeProducts(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => ({
      id: String(item.id || "").trim(),
      name: String(item.name || "").trim(),
      price: Number(item.price) || 0,
      stock: Number(item.stock) || 0,
      category: ["Gaming", "Office", "Kuliahan"].includes(item.category) ? item.category : "Office",
      specs: normalizeSpecs(item.specs),
      updated_at: new Date().toISOString()
    }))
    .filter((item) => item.id && item.name && item.specs.length);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const supabase = createSupabaseAdminClient();
    if (!await isAuthenticatedRequest(req, supabase)) {
      res.status(401).json({ error: "Sesi admin tidak valid." });
      return;
    }

    const body = readJsonBody(req);
    const products = normalizeProducts(body.products);

    if (!products.length) {
      res.status(400).json({ error: "Daftar produk reset kosong." });
      return;
    }

    const { error: deleteError } = await supabase
      .from("products")
      .delete()
      .not("id", "is", null);

    if (deleteError) {
      res.status(500).json({ error: deleteError.message });
      return;
    }

    const { error: insertError } = await supabase.from("products").insert(products);

    if (insertError) {
      res.status(500).json({ error: insertError.message });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message || "Terjadi kesalahan server." });
  }
};

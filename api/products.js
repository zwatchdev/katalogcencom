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

function normalizeProduct(rawProduct) {
  const allowedCategories = new Set(["Gaming", "Office", "Kuliahan"]);
  const allowedProductTypes = new Set(["Laptop", "Printer", "Monitor", "Komputer", "Proyektor"]);
  const descriptionProductTypes = new Set(["Printer", "Monitor", "Proyektor"]);
  const product = rawProduct || {};
  const productType = allowedProductTypes.has(product.productType) ? product.productType : "Laptop";
  const category = allowedCategories.has(product.category) ? product.category : "Office";
  const priceMode = String(product.priceMode || product.price_mode || "").trim() === "Kredit" ? "Kredit" : "Cash";
  const description = String(product.description || "").trim();
  const feature = String(product.feature || "").trim();
  const imageData = String(product.imageData || product.image_data || "").trim();
  const specs = normalizeSpecs(product.specs);

  return {
    id: String(product.id || "").trim(),
    name: String(product.name || "").trim(),
    price: Number(product.price) || 0,
    stock: Number(product.stock) || 0,
    productType,
    category,
    priceMode,
    description,
    feature,
    imageData,
    specs: descriptionProductTypes.has(productType) ? [] : specs
  };
}

module.exports = async function handler(req, res) {
  try {
    const supabase = createSupabaseAdminClient();

    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, stock, product_type, category, price_mode, description, feature, image_data, specs, created_at, updated_at")
        .order("created_at", { ascending: false });

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({
        products: (data || []).map((product) => ({
          ...product,
          productType: product.product_type || "Laptop",
          priceMode: product.price_mode || "Cash",
          imageData: product.image_data || ""
        }))
      });
      return;
    }

    if (!await isAuthenticatedRequest(req, supabase)) {
      res.status(401).json({ error: "Sesi admin tidak valid." });
      return;
    }

    const body = readJsonBody(req);

    if (req.method === "POST") {
      const product = normalizeProduct(body.product);

      if (!product.id || !product.name || (!product.description && !product.specs.length)) {
        res.status(400).json({ error: "Data produk belum lengkap." });
        return;
      }

      const { error } = await supabase.from("products").insert({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        product_type: product.productType,
        category: product.category,
        price_mode: product.priceMode,
        description: product.description,
        feature: product.feature,
        image_data: product.imageData,
        specs: product.specs,
        updated_at: new Date().toISOString()
      });

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({ ok: true });
      return;
    }

    if (req.method === "PUT") {
      const product = normalizeProduct(body.product);

      if (!product.id || !product.name || (!product.description && !product.specs.length)) {
        res.status(400).json({ error: "Data produk belum lengkap." });
        return;
      }

      const { error } = await supabase
        .from("products")
        .update({
          name: product.name,
          price: product.price,
          stock: product.stock,
          product_type: product.productType,
          category: product.category,
          price_mode: product.priceMode,
          description: product.description,
          feature: product.feature,
          image_data: product.imageData,
          specs: product.specs,
          updated_at: new Date().toISOString()
        })
        .eq("id", product.id);

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({ ok: true });
      return;
    }

    if (req.method === "DELETE") {
      const productId = String(req.query.id || body.id || "").trim();

      if (!productId) {
        res.status(400).json({ error: "ID produk wajib diisi." });
        return;
      }

      const { error } = await supabase.from("products").delete().eq("id", productId);

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Terjadi kesalahan server." });
  }
};

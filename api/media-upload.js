const crypto = require("crypto");
const { isAuthenticatedRequest, readJsonBody } = require("./_lib/auth");
const { createSupabaseAdminClient } = require("./_lib/supabase");

const DEFAULT_BUCKET = "product-images";

function parseDataUrl(dataUrl) {
  const rawValue = String(dataUrl || "").trim();
  const match = rawValue.match(/^data:(image\/[a-z0-9.+-]+);base64,(.+)$/i);

  if (!match) {
    throw new Error("Format gambar tidak valid.");
  }

  const mimeType = match[1].toLowerCase();
  const base64 = match[2];
  const extensionMap = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/webp": "webp"
  };

  return {
    buffer: Buffer.from(base64, "base64"),
    mimeType,
    extension: extensionMap[mimeType] || "bin"
  };
}

function sanitizeFolder(folder) {
  const value = String(folder || "uploads").trim().toLowerCase();
  const safeValue = value.replace(/[^a-z0-9/_-]+/g, "-").replace(/-+/g, "-");

  return safeValue || "uploads";
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
    const dataUrl = String(body.dataUrl || "");
    const folder = sanitizeFolder(body.folder || "uploads");
    const fileNameBase = String(body.fileNameBase || "image").trim().toLowerCase();

    if (!dataUrl) {
      res.status(400).json({ error: "Data gambar wajib diisi." });
      return;
    }

    const { buffer, mimeType, extension } = parseDataUrl(dataUrl);
    const fileSafeBase = fileNameBase.replace(/[^a-z0-9_-]+/g, "-").replace(/-+/g, "-") || "image";
    const fileName = `${fileSafeBase}-${Date.now()}-${crypto.randomBytes(4).toString("hex")}.${extension}`;
    const storagePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(DEFAULT_BUCKET)
      .upload(storagePath, buffer, {
        contentType: mimeType,
        upsert: false
      });

    if (uploadError) {
      res.status(500).json({ error: uploadError.message });
      return;
    }

    const { data } = supabase.storage.from(DEFAULT_BUCKET).getPublicUrl(storagePath);

    res.status(200).json({
      path: storagePath,
      publicUrl: data.publicUrl
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Terjadi kesalahan server." });
  }
};

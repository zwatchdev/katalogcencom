const { createClient } = require("@supabase/supabase-js");

function getSupabaseConfig() {
  return {
    url: process.env.SUPABASE_URL || "",
    anonKey: process.env.SUPABASE_ANON_KEY || "",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  };
}

function createSupabaseAdminClient() {
  const { url, serviceRoleKey } = getSupabaseConfig();

  if (!url || !serviceRoleKey) {
    throw new Error("SUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY belum diatur.");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

module.exports = {
  createSupabaseAdminClient,
  getSupabaseConfig
};

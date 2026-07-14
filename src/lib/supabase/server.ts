import { createClient } from "@supabase/supabase-js";

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return { url, key };
}

export function createSupabaseServerClient() {
  const config = getSupabaseConfig();

  if (!config) {
    throw new Error(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY).",
    );
  }

  return createClient(config.url, config.key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function isSupabaseConfigured() {
  return getSupabaseConfig() !== null;
}

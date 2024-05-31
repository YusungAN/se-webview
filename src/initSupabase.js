import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY);

export default supabase;
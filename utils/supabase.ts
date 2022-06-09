import { createClient } from "@supabase/supabase-js";

const supaUrl = process.env.SUPABASE_URL || "";
const supaKey = process.env.SUPABASE_KEY || "";

export default createClient(supaUrl, supaKey);

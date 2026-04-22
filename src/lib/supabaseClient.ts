const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("ENV DEBUG:", {
  url: supabaseUrl,
  key: supabaseKey,
  all: import.meta.env,
});

// jangan throw dulu
if (!supabaseUrl || !supabaseKey) {
  console.error("❌ ENV tidak kebaca");
}
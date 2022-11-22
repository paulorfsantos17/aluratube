import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://czoifrofmqqrglfhyuyi.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6b2lmcm9mbXFxcmdsZmh5dXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNDY5NTksImV4cCI6MTk4NDcyMjk1OX0.pIooiRm9t_w2iYlQLO6HaaRE5q9ttuJ0B_Xq4JRLTto";

const supabase = createClient(PROJECT_URL, API_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}

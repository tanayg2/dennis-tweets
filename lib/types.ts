import { User } from "@supabase/supabase-js"
import { Database } from "./db.types"

export type Source = "twitter" | "tiktok" | "instagram"

export type Post = {
  author: string
  url: string
  type: Source
  created_at: string
}

export type UserEnriched = User & Database["public"]["Tables"]["user_details"]["Row"]

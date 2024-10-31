import { User } from "@supabase/supabase-js"

export type Source = "twitter" | "tiktok" | "instagram"

export type Post = {
  author: string
  url: string
  type: Source
  created_at: string
}

export type UserDetail = {
  username?: string
  profile_picture?: string
  phone_number?: string
}

export type UserEnriched = User & UserDetail

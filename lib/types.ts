export type Source = "twitter" | "tiktok" | "instagram"

export type Post = {
  author: string
  url: string
  type: Source
  created_at: string
}

export type User = {
  name: string
  username: string
  profile_picture: string
}

export type PostEnriched = Post & {
  author: User
}

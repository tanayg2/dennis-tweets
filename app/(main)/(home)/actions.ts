"use server"
import { Database } from "@/lib/db.types"
import { createClient } from "@/utils/supabase/server"

export const fetchPostReactions = async (postId: number) => {
  const supabase = await createClient()

  try {
    const res = await supabase
      .from("reactions")
      .select("*")
      .eq("post_id", postId)
    return res.count ?? 0
  } catch (e) {
    console.error(e)
    return 0
  }
  
}

export const leaveReaction = async (
  userId: string,
  postId: number,
  content: string,
) => {
  const supabase = await createClient()

  const newReaction: Database["public"]["Tables"]["reactions"]["Insert"] = {
    user_id: userId,
    post_id: postId,
    content,
  }

  try {
    const res = await supabase.from("reactions").insert(newReaction)
    return res
  } catch (e) {
    console.error(e)
    return null
  }
}

export const deleteReaction = async (
  userId: string,
  postId: number,
) => {
  const supabase = await createClient()

  try {
    const res = await supabase
      .from("reactions")
      .delete()
      .eq("user_id", userId)
      .eq("post_id", postId)
    return res
  } catch (e) {
    console.error(e)
    return null
  }
}

export const fetchPostReaction = async (
  userId: string,
  postId: number,
) => {
  const supabase = await createClient()

  const { data: reactions, error } = await supabase
    .from("reactions")
    .select("*")
    .eq("user_id", userId)
    .eq("post_id", postId)

  if (error) {
    console.error(error)
    return null
  }

  return reactions
}

export const fetchMorePosts = async (page: number, ascending = false) => {
  const pageSize = 10
  const supabase = await createClient()

  const result = new Map<
    string,
    Database["public"]["Views"]["enriched_posts"]["Row"]
  >()
  const { data: posts, error } = await supabase
    .from("enriched_posts")
    .select("*")
    .order("created_at", { ascending })
    .limit(pageSize)
    .range(page * pageSize, (page + 1) * pageSize - 1)

  if (error) {
    console.error(error)
    return null
  }

  posts?.forEach((post) => {
    result.set(`${post.id}`, post)
  })

  return result
}

export const fetchPost = async (postId: string) => {
  const supabase = await createClient()

  const { data: post, error } = await supabase
    .from("enriched_posts")
    .select("*")
    .eq("id", postId)
    .single()

  if (error) {
    console.error(error)
    return null
  }

  return post
}

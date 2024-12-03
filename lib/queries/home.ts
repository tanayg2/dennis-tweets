import { createClient } from "@/utils/supabase/server"

const PAGE_SIZE = 5

export async function fetchPublicPosts(page: number = 0) {
  const supabase = await createClient()
  const { data: posts, error } = await supabase
    .from("enriched_posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(PAGE_SIZE)
    .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)

  if (error) {
    console.error("Error fetching posts:", error)
    return null
  }

  return posts
}


export async function fetchEnrichedPostsForUser(userId: string) {
  const supabase = await createClient()
  const { data: groupIds, error: groupError } = await supabase
    .from("group_members")
    .select("group_id")
    .eq("user_id", userId)

  if (groupError) {
    console.error("Error fetching group IDs:", groupError)
    return null
  }

  const { data: posts, error } = await supabase
    .from("enriched_posts")
    .select("*")
    .in(
      "group_id",
      groupIds.map((group) => group.group_id),
    )

  if (error) {
    console.error("Error fetching posts:", error)
    return null
  }

  return posts
}

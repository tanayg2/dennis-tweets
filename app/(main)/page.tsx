import { Post } from "@/components/home/Post"
import { Database } from "@/lib/db.types"
import { createClient } from "@/utils/supabase/server"

export default async function Page() {
  const supabase = await createClient()

  const { data: posts } = (await supabase
    .from("enriched_posts")
    .select()
    .order("created_at", { ascending: false })) as {
    data: Database["public"]["Views"]["enriched_posts"]["Row"][] | null
  }

  return (
    <div className="space-y-2">
      {posts?.map((post) => <Post key={post.url} post={post} />)}
    </div>
  )
}

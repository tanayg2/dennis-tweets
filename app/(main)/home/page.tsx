import { Post } from "@/components/home/Post"
import { PostEnriched } from "@/lib/types"
import { createClient } from "@supabase/supabase-js"

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  )
  const { data: posts } = (await supabase
    .from("posts")
    .select()
    .order("created_at", { ascending: false })) as {
    data: PostEnriched[] | null
  }

  return posts?.map((post) => <Post key={post.url} post={post} />)
}

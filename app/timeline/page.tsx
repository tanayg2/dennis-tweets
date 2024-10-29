import { createClient } from "@supabase/supabase-js"
import { Post } from "../_components/Post"

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  )
  const { data: posts } = await supabase
    .from("posts")
    .select()
    .order("created_at", { ascending: false })

  return <div>{posts?.map((post) => <Post post={post} />)}</div>
}

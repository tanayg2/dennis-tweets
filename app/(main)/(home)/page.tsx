import { Post } from "@/components/home/Post"
import { ScrollObserver } from "./_components/ScrollObserver"
import { fetchPublicPosts } from "@/lib/queries/home"

export default async function Page() {
  const posts = await fetchPublicPosts(0)

  return (
    <div className="space-y-2">
      {posts?.map((post) => <Post key={post.url} post={post} />)}
      <ScrollObserver />
    </div>
  )
}

import { Post } from "@/components/home/Post"
import { LoadMore } from "./_components/ScrollObserver"
import { fetchPublicPosts } from "@/lib/queries/home"

type PageParams = Promise<{
  searchParams: {
    ascending?: boolean
  }
}>

export default async function Page(props: PageParams) {
  // const ascending = (await props).searchParams.ascending ?? false
  const posts = await fetchPublicPosts(0)

  return (
    <div className="space-y-8">
      {posts?.map((post) => <Post key={post.id} post={post} />)}
      <LoadMore />
    </div>
  )
}

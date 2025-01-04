import { fetchPost } from "@/app/(main)/(home)/actions"
import { Post } from "@/components/home/Post"

type PageProps = {
  params: Promise<{
    postId: string
  }>
}

export default async function Page(props: PageProps) {
  const post = await fetchPost((await props.params).postId)
  if (!post)
    return (
      <div>
        <h1 className="text-xl font-semibold">Post not found</h1>
      </div>
    )

  return <Post post={post} />
}

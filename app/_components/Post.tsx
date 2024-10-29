"use client"
import { PostEnriched } from "@/lib/types"
import { XEmbed } from "react-social-media-embed"

type PostProps = {
  post: PostEnriched
}
export const Post = (props: PostProps) => {
  if (!props.post.url) return null
  // const Element = {
  //   twitter: XEmbed,
  //   tiktok: TikTokEmbed,
  //   instagram: InstagramEmbed,
  // }[props.post.type]

  return (
    <div>
      {/* <p>@{props.post.author.username}</p> */}
      <XEmbed url={props.post.url} width={430} />
      <time>{new Date(props.post.created_at).toUTCString()}</time>
      {/* <EmojiPicker reactionsDefaultOpen={true} allowExpandReactions={false} /> */}
    </div>
  )
}

"use client"
import { Database } from "@/lib/db.types"
import { XEmbed } from "react-social-media-embed"

type PostProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
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
      <p className="pl-2">
        From:{" "}
        {props.post.username ? `@${props.post.username}` : <i>anonymous</i>}
      </p>
      <XEmbed url={props.post.url} width={390} />
      {/* <time>{new Date(props.post.created_at).toUTCString()}</time> */}
      {/* <EmojiPicker reactionsDefaultOpen={true} allowExpandReactions={false} /> */}
    </div>
  )
}

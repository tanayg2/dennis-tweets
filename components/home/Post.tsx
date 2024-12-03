"use client"
import { Database } from "@/lib/db.types"
import { InstagramEmbed, TikTokEmbed, XEmbed } from "react-social-media-embed"
import { ReactionRow } from "./ReactionRow"
import { useMemo } from "react"
import { HeartButton } from "./HeartButton"

type PostProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}
export const Post = (props: PostProps) => {
  if (!props.post.url) return null
  // const Element = {
  //   twitter: XEmbed,
  //   tiktok: TikTokEmbed,
  //   instagram: InstagramEmbed,
  // }[props.post.type ?? "twitter"]

  const Element = useMemo(() => {
    if (!props.post.url) return null
    switch (props.post.type) {
      case "twitter":
        return <XEmbed url={props.post.url} />
      case "tiktok":
        return <TikTokEmbed url={props.post.url} />
      case "instagram":
        return <InstagramEmbed url={props.post.url} />
      default:
        return null
    }
  }, [props.post.type])

  return (
    <div>
      <p className="pl-2">
        From:{" "}
        {props.post.username ? `@${props.post.username}` : <i>anonymous</i>}
      </p>
      {Element}
      {/* <time>{new Date(props.post.created_at).toUTCString()}</time> */}
      {/* <ReactionRow userId={props.userId} postId={props.post.id} /> */}
      {/* <HeartButton userId={props.userId} postId={props.post.id} /> */}
    </div>
  )
}

"use client"
import { Database } from "@/lib/db.types"
import { InstagramEmbed, TikTokEmbed, XEmbed } from "react-social-media-embed"
import { useMemo } from "react"
import { toRelative } from "@/lib/utils"
import { HeartButton } from "./HeartButton"
import { ReactionsRow } from "./ReactionRow"

type PostProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}
export const Post = (props: PostProps) => {
  if (!props.post.url) return null

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
      {Element}
      <div className="flex justify-between px-2 text-border">
        {props.post.username ? `@${props.post.username}` : <i>anonymous</i>}
        <time className="text-primary italic">
          {toRelative(new Date(props.post.created_at ?? ""))}
        </time>
      </div>
      <ReactionsRow post={props.post} />
    </div>
  )
}

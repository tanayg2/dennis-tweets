import { Database } from "@/lib/db.types"
import { TikTokEmbed } from "react-social-media-embed"

export const TiktokPost = (props: {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}) => {
  if (!props.post.url) return null
  return <TikTokEmbed url={props.post.url} />
}

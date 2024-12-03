import { Database } from "@/lib/db.types"
import { XEmbed } from "react-social-media-embed"

export const XPost = (props: {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}) => {
  if (!props.post.url) return null
  return <XEmbed url={props.post.url} />
}

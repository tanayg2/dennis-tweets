import { Database } from "@/lib/db.types"
import { InstagramEmbed } from "react-social-media-embed"

export const InstaPost = (props: {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}) => {
  if (!props.post.url) return null
  return <InstagramEmbed url={props.post.url} />
}

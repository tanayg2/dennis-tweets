"use client"

import { Database } from "@/lib/db.types"
import { HeartButton } from "./HeartButton"
import { CommentButton } from "./CommentButton"
import { ShareButton } from "./ShareButton"

type ReactionsRowProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}

export const ReactionsRow = (props: ReactionsRowProps) => {
  return (
    <span className="flex justify-between px-2 gapx-2">
      <HeartButton post={props.post} />
      <CommentButton post={props.post} />
      <ShareButton post={props.post} />
    </span>
  )
}

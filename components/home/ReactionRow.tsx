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
    <span className="flex items-center px-2 gap-x-3">
      <HeartButton post={props.post} />
      <CommentButton post={props.post} />
    </span>
  )
}

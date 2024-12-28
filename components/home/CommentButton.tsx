"use client"

import { Database } from "@/lib/db.types"
import { MessageCircleMore } from "lucide-react"

type CommentButtonProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}
const commentCount = 0
export const CommentButton = (props: CommentButtonProps) => {
  return (
    <button
      className="inline-flex gap-x-1 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      disabled
    >
      <MessageCircleMore className="text-primary" size={18} />
      <p className="text-sm text-primary">{commentCount}</p>
    </button>
  )
}

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
      className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-75 inline-flex gap-x-1 items-center justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-background"
      disabled
    >
      <MessageCircleMore className="text-primary" size={25} />
      <p className="text-sm text-primary">{commentCount}</p>
    </button>
  )
}

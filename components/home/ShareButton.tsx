"use client"

import { Database } from "@/lib/db.types"
import { Share } from "lucide-react"

type ShareButtonProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}
export const ShareButton = (props: ShareButtonProps) => {
  return (
    <button
      className="inline-flex gap-x-1 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      disabled
    >
      <Share className="text-primary" size={18} />
    </button>
  )
}

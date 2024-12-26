"use client"

import { Database } from "@/lib/db.types"
import { Share } from "lucide-react"

type ShareButtonProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}
export const ShareButton = (props: ShareButtonProps) => {
  return (
    <button
      className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-75 inline-flex gap-x-1 items-center justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-background"
      disabled
    >
      <Share className="text-primary" size={25} />
    </button>
  )
}

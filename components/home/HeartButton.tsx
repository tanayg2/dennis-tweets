"use client"

import { fetchPostReactions, leaveReaction } from "@/app/(main)/(home)/actions"
import { use, useCallback } from "react"

type HeartButtonProps = {
  userId: string | null
  postId: number
}

export const HeartButton = (props: HeartButtonProps) => {
  const heartCount = use(() => fetchPostReactions(props.postId))

  const handleHeartClick = useCallback(async () => {
    if (!props.userId || !props.postId) return
    leaveReaction(props.userId, props.postId, "❤️")
  }, [props.userId, props.postId])

  return (
    <button
      onClick={handleHeartClick}
      className="py-2 px-4 outline outline-1 outline-gray-400 rounded-lg"
    >
      ❤️
    </button>
  )
}

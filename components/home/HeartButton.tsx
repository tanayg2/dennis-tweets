"use client"

import { fetchPostReactions, leaveReaction } from "@/app/(main)/(home)/actions"
import { cn } from "@/utils/cn"
import { use, useCallback, useEffect, useMemo, useState } from "react"

type HeartButtonProps = {
  userId: string | null
  postId: number
}

export const HeartButton = (props: HeartButtonProps) => {
  // const postReactionsPromise = useMemo(
  //   () => fetchPostReactions(props.postId).then((resp) => resp?.count),
  //   [props.postId],
  // )
  // const reactionCount = use(postReactionsPromise)
  const [reactionCount, setReactionCount] = useState<number | null>(null)
  useEffect(() => {
    fetchPostReactions(props.postId).then((resp) =>
      setReactionCount(resp?.count ?? null),
    )
  }, [props.postId])

  const handleHeartClick = useCallback(async () => {
    if (!props.userId || !props.postId) return
    leaveReaction(props.userId, props.postId, "❤️")
  }, [props.userId, props.postId])

  return (
    <button
      onClick={handleHeartClick}
      className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-75 inline-flex gap-x-1 items-center justify-center"
    >
      <div>❤️</div>
      <div className={cn("text-xs", reactionCount && "invisible")}>
        {reactionCount}
      </div>
    </button>
  )
}

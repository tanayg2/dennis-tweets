"use client"

import {
  deleteReaction,
  fetchPostReaction,
  leaveReaction,
} from "@/app/(main)/(home)/actions"
import { cn } from "@/utils/cn"
import { Heart } from "lucide-react"
import { use, useCallback, useEffect, useState, useTransition } from "react"

type HeartButtonProps = {
  userId: string | null
  postId: number
  reactionCount: number
}

export const HeartButton = (props: HeartButtonProps) => {
  const [reactionCount, setReactionCount] = useState(props.reactionCount)

  const [isHearted, setIsHearted] = useState(false)
  useEffect(() => {
    async function run() {
      if (!props.userId) return
      const reaction = await fetchPostReaction(props.userId, props.postId)
      console.log("react", reaction)
      setIsHearted(!!reaction?.length)
    }

    run()
  }, [props.userId, props.postId])

  if (props.postId === 581) console.log("isHearted", isHearted)

  const handleHeartClick = useCallback(async () => {
    if (!props.userId || !props.postId) return
    console.log(isHearted, "delete")
    if (isHearted) {
      setReactionCount(reactionCount - 1)
      setIsHearted(false)
      deleteReaction(props.userId, props.postId)
    } else {
      setReactionCount(reactionCount + 1)
      setIsHearted(true)
      leaveReaction(props.userId, props.postId, "❤️")
    }
  }, [props.userId, props.postId, isHearted, reactionCount])

  return (
    <button
      onClick={handleHeartClick}
      className="py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-75 inline-flex gap-x-1 items-center justify-center"
    >
      {isHearted ? (
        <Heart fill="#3f72af" className={cn("text-primary")} size={25} />
      ) : (
        <Heart className={cn("text-primary")} size={25} />
      )}
      <p className={cn("text-xs text-primary", !reactionCount && "invisible")}>
        {reactionCount}
      </p>
    </button>
  )
}

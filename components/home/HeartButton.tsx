"use client"

import {
  deleteReaction,
  fetchPostReaction,
  leaveReaction,
} from "@/app/(main)/(home)/actions"
import { useUser } from "@/hooks/useUser"
import { Database } from "@/lib/db.types"
import { cn } from "@/utils/cn"
import { Heart } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

type HeartButtonProps = {
  post: Database["public"]["Views"]["enriched_posts"]["Row"]
}

export const HeartButton = (props: HeartButtonProps) => {
  const user = useUser()
  const [reactionCount, setReactionCount] = useState(
    props.post.reaction_count ?? 0,
  )

  const [isHearted, setIsHearted] = useState(false)
  useEffect(() => {
    async function run() {
      if (!user.user) return
      const reaction = await fetchPostReaction(user.user.id, props.post.id)
      setIsHearted(!!reaction?.length)
    }

    run()
  }, [user, props.post.id])

  const handleHeartClick = useCallback(async () => {
    if (!user.user || !props.post.id) return
    console.log(isHearted, "delete")
    if (isHearted) {
      setReactionCount(reactionCount - 1)
      setIsHearted(false)
      deleteReaction(user.user.id, props.post.id)
    } else {
      setReactionCount(reactionCount + 1)
      setIsHearted(true)
      leaveReaction(user.user.id, props.post.id, "❤️")
    }
  }, [props.post.id, isHearted, reactionCount])

  return (
    <button
      onClick={handleHeartClick}
      className="inline-flex gap-x-1 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!user.user}
    >
      {isHearted ? (
        <Heart fill="#3f72af" className={cn("text-primary")} size={18} />
      ) : (
        <Heart className={cn("text-primary")} size={18} />
      )}
      <p className="text-sm text-primary">{reactionCount}</p>
    </button>
  )
}

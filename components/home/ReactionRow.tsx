// "use client"
// import { leaveReaction } from "@/app/(main)/(home)/actions"
// import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
// import { useCallback } from "react"

// // const reactions = ["1f44d", "1f44e", "2757", "1f62d", "1f480", "1f60d", "1f345"]

// type ReactionRowProps = {
//   userId: string | null
//   postId: number | null
// }

// export const ReactionRow = (props: ReactionRowProps) => {
//   if (!props.userId || !props.postId) return null

//   // const handleEmojiClick = useCallback(
//   //   async (emojiData: EmojiClickData) => {
//   //     leaveReaction(props.userId, props.postId, emojiData.emoji)
//   //   },
//   //   [props.userId, props.postId],
//   // )

//   const handleHeartClick = useCallback(async () => {
//     leaveReaction(props.userId, props.postId, "❤️")
//   }, [props.userId, props.postId])

//   return (
//     <EmojiPicker
//       onEmojiClick={handleEmojiClick}
//       reactionsDefaultOpen={true}
//       allowExpandReactions={false}
//       reactions={reactions}
//     />
//   )
// }

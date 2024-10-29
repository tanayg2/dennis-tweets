import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Source } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPostType = (url: string): Source | undefined => {
  if (url.startsWith("https://x.com")) return "twitter"
  if (url.startsWith("https://www.tiktok.com")) return "tiktok"
  if (url.startsWith("https://instagram.com")) return "instagram"
}

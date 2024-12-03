import { Source } from "./types"

export const getPostType = (url: string): Source | undefined => {
  if (url.startsWith("https://x.com")) return "twitter"
  if (url.startsWith("https://www.tiktok.com")) return "tiktok"
  if (url.startsWith("https://instagram.com")) return "instagram"
}

export const plural = (
  count: number,
  noun: string,
  { suffix = "s", showCount = true } = {},
) => `${showCount ? count : ""} ${noun}${count !== 1 ? suffix : ""}`.trimStart()

export const isValidDate = (date: Date) => {
  return !isNaN(date.getTime())
}

export const toRelative = (date: Date) => {
  if (!isValidDate(date)) return ""

  const now = new Date()
  const diff = date.getTime() - now.getTime()
  const absDiff = Math.abs(diff)

  // Simple calculation for days, hours, minutes, and seconds
  const years = Math.floor(absDiff / (1000 * 60 * 60 * 24 * 365))
  const months = Math.floor(absDiff / (1000 * 60 * 60 * 24 * 30))
  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((absDiff / 1000 / 60) % 60)
  // const seconds = Math.floor((absDiff / 1000) % 60)

  const prefix = diff > 0 ? "in " : ""
  const suffix = diff < 0 ? " ago" : ""

  if (years > 0) return `${prefix}${plural(years, "year")}${suffix}`
  if (months > 0) return `${prefix}${plural(months, "month")}${suffix}`
  if (days > 0) return `${prefix}${plural(days, "day")}${suffix}`
  if (hours > 0) return `${prefix}${plural(hours, "hour")}${suffix}`
  if (minutes > 0) return `${prefix}${plural(minutes, "minute")}${suffix}`
  // if (seconds > 0) return `${prefix}${plural(seconds, "second")}${suffix}`

  return "just now"
}

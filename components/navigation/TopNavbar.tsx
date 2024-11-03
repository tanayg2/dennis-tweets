"use client"

import { usePathname } from "next/navigation"

export const TopNavbar = () => {
  const pathname = usePathname()
  return (
    <div className="sticky bg-background bottom-0 z-50 grid grid-cols-[128px_1fr_128px] w-screen min-w-full border-b-[1px] border-b-gray-100 p-3">
      <div className="text-start">
        <div></div>
      </div>
      <h1 className="text-center text-lg">{resolvePageTitle(pathname)}</h1>
      <div></div>
    </div>
  )
}

const resolvePageTitle = (pathname: string) => {
  if (pathname === "/") return "Home"
  if (pathname === "/notifications") return "Notifications"
  if (pathname === "/profile") return "Profile"
  if (pathname === "/profile/finish-setup") return "Finish Setup"
  return "Unknown"
}

"use client"

import { usePathname } from "next/navigation"

export const TopNavbar = () => {
  const pathname = usePathname()
  return (
    <div className="sticky top-0 bg-white bottom-0 z-50 grid grid-cols-[128px_1fr_128px] w-screen min-w-full border-b-[1px] border-b-gray-300 p-3">
      <div className="text-start">{/* <AppSidebar /> */}</div>
      <h1 className="text-center text-lg">{resolvePageTitle(pathname)}</h1>
      <div></div>
    </div>
  )
}

const resolvePageTitle = (pathname: string) => {
  if (pathname === "/") return "Home"
  if (pathname === "/notifications") return "Notifications"
  if (pathname === "/profile") return "Profile"
  if (pathname === "/profile/settings") return "Profile Settings"
  return "Unknown"
}

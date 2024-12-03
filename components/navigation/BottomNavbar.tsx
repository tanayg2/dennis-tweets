"use client"
import { Button } from "@/components/ui/button"
import { BellIcon, HomeIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLoginModal } from "../hooks/useLoginModal"
import { useUser } from "@/hooks/useUser"

export const BottomNavbar = () => {
  const path = usePathname()
  const loginModal = useLoginModal()
  const { user } = useUser()

  return (
    <>
      <div className="sticky bottom-0 z-50 flex justify-around items-center w-screen min-w-full flex-row border-t-[1px] border-gray-300 bg-white p-4 pb-3">
        <Link href="/">
          <HomeIcon size={24} className={getIconColor(path, "/")} />
        </Link>
        <Link href="/notifications">
          <BellIcon
            size={24}
            className={getIconColor(path, "/notifications")}
          />
        </Link>
        <Link
          {...(user
            ? { href: "/profile" }
            : { href: "", onClick: () => loginModal.onOpenChange(true) })}
        >
          <UserIcon size={24} className={getIconColor(path, "/profile")} />
        </Link>
      </div>
    </>
  )
}

const getIconColor = (path: string, href: string) => {
  if (path === href) return "text-primary"
  return "text-border"
}

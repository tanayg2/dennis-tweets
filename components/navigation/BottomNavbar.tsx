"use client"
import { Button } from "@/components/ui/button"
import { BellIcon, HomeIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLoginModal } from "../../app/_hooks/useLoginModal"
import { useUser } from "@/hooks/useUser"

export const BottomNavbar = () => {
  const user = useUser()
  const path = usePathname()
  const loginModal = useLoginModal()

  return (
    <>
      <div className="sticky bottom-0 z-50 flex justify-around items-center w-screen min-w-full flex-row border-t-[1px] bg-background p-3 pb-2">
        {user ? (
          <>
            <Link href="/home">
              <HomeIcon size={24} className={getIconColor(path, "/home")} />
            </Link>
            <Link href="/notifications">
              <BellIcon
                size={24}
                className={getIconColor(path, "/notifications")}
              />
            </Link>
            <Link href="/profile">
              <UserIcon size={24} className={getIconColor(path, "/profile")} />
            </Link>
          </>
        ) : (
          <>
            <p>Sign in to start posting</p>
            <Button onClick={() => loginModal.onOpenChange(true)}>
              Sign in
            </Button>
          </>
        )}
      </div>
    </>
  )
}

const getIconColor = (path: string, href: string) => {
  if (path === href) return "text-primary"
  return "text-border"
}

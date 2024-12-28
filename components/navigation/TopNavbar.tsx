"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const TopNavbar = () => {
  const pathname = usePathname()
  return (
    <div className="sticky top-0 bg-white bottom-0 z-50 grid grid-cols-[1fr_30px_1fr] w-screen min-w-full border-b-[1px] border-b-gray-300 p-3">
      <div className="text-start">{/* <AppSidebar /> */}</div>
      <Link href="/">
        <Image
          className="outline outline-1 outline-gray-200 rounded-sm"
          src="https://nijfuwtqovtcpgvrsdfo.supabase.co/storage/v1/object/public/static/icon512_maskable.png"
          alt="Feeds Logo"
          width={30}
          height={30}
        />
      </Link>
      <div></div>
    </div>
  )
}

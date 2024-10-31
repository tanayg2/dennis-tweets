import "./globals.css"
import { ReactNode } from "react"
import { BottomNavbar } from "../components/navigation/BottomNavbar"
import { TopNavbar } from "../components/navigation/TopNavbar"
import { LoginModal } from "../components/auth/LoginModal"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="inset-0">
      <body>
        <TopNavbar />
        <div className="max-w-[1440px] mx-auto w-[390px] mt-2 min-h-screen">
          {children}
        </div>
        <BottomNavbar />
        <LoginModal />
      </body>
    </html>
  )
}

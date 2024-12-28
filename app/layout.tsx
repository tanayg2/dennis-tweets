import "./globals.css"
import { ReactNode } from "react"
import { BottomNavbar } from "../components/navigation/BottomNavbar"
import { TopNavbar } from "../components/navigation/TopNavbar"
import { GlobalProvider } from "@/app/_layoutComponents/GlobalProvider"
import { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Feeds",
  description: "Save and share your favorite social media posts",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="inset-0">
      <body>
        <TopNavbar />
        <main className="max-w-[1440px] mx-auto w-[390px] mt-5 min-h-screen">
          {children}
        </main>
        <BottomNavbar />
        <GlobalProvider />
      </body>
    </html>
  )
}

import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="fixed inset-0">
      <body>
        <div className="grid grid-rows-[64px_1fr] w-screen h-screen max-h-screen pt-0 p-5 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}

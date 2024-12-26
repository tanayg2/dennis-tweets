"use client"

import { useEffect, useState } from "react"

export const useIsInstalled = () => {
  const [isInstalled, setIsInstalled] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(display-mode: standalone)")
    const handler = (event: any) => setIsInstalled(!!event.matches)
    handler(mediaQuery)

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return isInstalled
}

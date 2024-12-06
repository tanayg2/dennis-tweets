"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/utils/cn"
import { ArrowBigDown } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"

export const OrderButton = () => {
  const searchParams = useSearchParams()
  const ascending = useMemo(
    () => searchParams.get("ascending") === "true",
    [searchParams],
  )

  const router = useRouter()
  const handleClick = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set("ascending", String(!ascending))
    router.push(`?${newSearchParams.toString()}`)
  }, [ascending, router, searchParams])

  return (
    <Button onClick={handleClick} className="rounded-full p-4">
      <ArrowBigDown
        className={cn("transition-all duration-75", ascending && "rotate-180")}
      />
    </Button>
  )
}

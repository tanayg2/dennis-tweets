"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { fetchMorePosts } from "../actions"
import { Database } from "@/lib/db.types"
import { Post } from "@/components/home/Post"
import { useSearchParams } from "next/navigation"

export const LoadMore = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState(
    new Map<string, Database["public"]["Views"]["enriched_posts"]["Row"]>(),
  )
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(0)
  }, [])

  const params = useSearchParams()

  useEffect(() => {
    async function run() {
      const next = await fetchMorePosts(
        page,
        params.get("ascending") === "true",
      )
      if (!next) return
      setData((prev) => new Map([...prev, ...next]))
    }

    if (inView) {
      run().then(() => setPage((prev) => prev + 1))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.size, inView])

  return data.size === 0 ? (
    <div ref={ref} />
  ) : (
    Array.from(data.entries()).map(([id, post], idx) => (
      <div key={id} {...(idx === data.size - 2 && { ref, id: "TEST" })}>
        <Post post={post} />
      </div>
    ))
  )
}

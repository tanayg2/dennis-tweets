"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { fetchMorePosts } from "../actions"
import { Database } from "@/lib/db.types"
import { Post } from "@/components/home/Post"

export const ScrollObserver = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState(
    new Map<string, Database["public"]["Views"]["enriched_posts"]["Row"]>(),
  )
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [])

  useEffect(() => {
    async function run() {
      const next = await fetchMorePosts(page)
      if (!next) return
      setData((prev) => new Map([...prev, ...next]))
    }

    if (inView) {
      console.log("fetching more posts", page)
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

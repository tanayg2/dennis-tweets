import { Suspense } from "react"
import { LoadMore } from "./_components/LoadMore"

export default async function Page() {
  return (
    <div className="space-y-8">
      <Suspense fallback={null}>
        <LoadMore />
      </Suspense>
    </div>
  )
}

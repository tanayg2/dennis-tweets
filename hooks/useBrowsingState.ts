import { create } from "zustand"

type BrowsingState = {
  group_slug: string | null
}

export const useBrowsingState = create<BrowsingState>((set) => ({
  group_slug: "tanay",
}))

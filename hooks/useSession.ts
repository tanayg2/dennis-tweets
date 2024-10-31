import { UserEnriched } from "@/lib/types"
import { User } from "@supabase/supabase-js"
import { create } from "zustand"

type SessionState = {
  coreUser: User | null
  user: UserEnriched | null
  isSignedIn: boolean
  set(user: UserEnriched): void
}

export const useSessionState = create<SessionState>((set) => ({
  coreUser: null,
  user: null,
  isSignedIn: false,
  set: (user) => set({ coreUser: user, user, isSignedIn: true }),
}))

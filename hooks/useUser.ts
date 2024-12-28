"use client"
import { Database } from "@/lib/db.types"
import { UserEnriched } from "@/lib/types"
import { createClient } from "@/utils/supabase/client"
import { User } from "@supabase/supabase-js"
import { useEffect, } from "react"
import { create } from "zustand"

type UserState = {
  user: User | null
  userEnriched: UserEnriched | null
  set: (userState: Partial<UserState>) => void
}

export const useUser = create<UserState>((set) => ({
  user: null,
  userEnriched: null,
  set: (partialState) => set(partialState),
}))

export const useFetchUser = (fetchUserEnriched: (userId: string) => Promise<Database["public"]["Tables"]["user_details"]["Row"] | null>) => {
  const { set } = useUser()

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        set({ user })

        const userDetails = await fetchUserEnriched(user.id)

        if (userDetails) {
          set({ userEnriched: {...userDetails, ...user } })
          console.log("User details found", userDetails)
        } else {
          console.error("User details not found")
        }
      }
    }

    fetchUser()
  }, [])
}

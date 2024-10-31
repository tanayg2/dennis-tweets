"use client"
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

export const useFetchUser = () => {
  const { set } = useUser()

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        set({ user })

        const user_details = await supabase
        .from("user_details")
        .select()
        .eq("id", user.id) as { data: UserEnriched[], count: number }

        console.log("USER DETAILS", user_details)

        if (user_details.count !== 1) {
          throw new Error("User details not found")
        }

        set({ userEnriched: user_details.data[0] })
      }
    }

    fetchUser()
  }, [])
}

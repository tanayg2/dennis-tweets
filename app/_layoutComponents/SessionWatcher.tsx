"use client"

import { fetchUserDetails } from "@/app/actions"
import { useFetchUser } from "@/hooks/useUser"

export const SessionWatcher = () => {
  useFetchUser(fetchUserDetails)

  return null
}

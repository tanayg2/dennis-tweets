"use client"

import { Label } from "@/components/ui/label"
import { useUser } from "@/hooks/useUser"
import { AddPhoneNumber } from "./AddPhoneNumber"
import { AddUsername } from "./AddUsername"
import { useEffect } from "react"
import { createUserDetails } from "../actions"

export const FormFields = () => {
  const { user, userEnriched } = useUser()

  if (!user) return null

  useEffect(() => {
    if (!userEnriched) {
      createUserDetails(user.id)
    }
  }, [user])

  return (
    <div className="space-y-2">
      {userEnriched?.username ? (
        <p>{userEnriched.username}</p>
      ) : (
        <AddUsername userId={user.id} />
      )}

      {userEnriched?.phone_number ? (
        <p>{userEnriched.phone_number}</p>
      ) : (
        <Label htmlFor="phone">
          Phone number
          <AddPhoneNumber userId={user.id} />
        </Label>
      )}
    </div>
  )
}

"use client"

import { Label } from "@/components/ui/label"
import { useUser } from "@/hooks/useUser"
import { AddPhoneNumber } from "./AddPhoneNumber"
import { AddUsername } from "./AddUsername"

export const FormFields = () => {
  const { userEnriched } = useUser()

  if (!userEnriched) return null

  return (
    <div>
      {userEnriched?.username ? (
        <p>{userEnriched.username}</p>
      ) : (
        <AddUsername userId={userEnriched.id} />
      )}

      {userEnriched?.phone_number ? (
        <p>{userEnriched.phone_number}</p>
      ) : (
        <Label htmlFor="phone">
          Phone number
          <AddPhoneNumber userId={userEnriched.id} />
        </Label>
      )}
    </div>
  )
}

"use client"

import { Label } from "@/components/ui/label"
import { useUser } from "@/hooks/useUser"
import { AddPhoneNumber } from "./AddPhoneNumber"
import { AddUsername } from "./AddUsername"

export const FormFields = () => {
  const { user, userEnriched } = useUser()

  if (!user) return null
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

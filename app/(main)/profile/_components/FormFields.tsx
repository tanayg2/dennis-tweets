"use client"

import { Label } from "@/components/ui/label"
import { useUser } from "@/hooks/useUser"
import { AddPhoneNumber } from "./AddPhoneNumber"
import { AddUsername } from "./AddUsername"
import { useEffect } from "react"
import { createUserDetails } from "../settings/actions"
import { User } from "@supabase/supabase-js"
import { Database } from "@/lib/db.types"

export const ProfileForm = (props: {
  user: User
  userDetails: Database["public"]["Tables"]["user_details"]["Row"]
}) => {
  useEffect(() => {
    if (props.user && !props.userDetails) {
      createUserDetails(props.user.id)
    }
  }, [props.user, props.userDetails])

  if (!props.user) return null

  return (
    <div className="space-y-2">
      <div>
        <Label htmlFor="username">Username</Label>
        <AddUsername
          userId={props.user.id}
          defaultValue={props.userDetails.username}
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone number</Label>
        <AddPhoneNumber
          userId={props.user.id}
          defaultValue={props.userDetails.phone_number ?? undefined}
        />
      </div>
    </div>
  )
}

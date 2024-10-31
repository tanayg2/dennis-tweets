"use client"

import InputWithStartIcon from "@/components/forms/InputWithStartIcon"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AtSignIcon } from "lucide-react"
import { updateUsername } from "../actions"
import { useState } from "react"

export const AddUsername = (props: { userId: string }) => {
  const [username, setUsername] = useState("")
  return (
    <div>
      <Label htmlFor="username">Username</Label>
      <InputWithStartIcon
        id="username"
        inputProps={{
          value: username,
          onChange: (e) => setUsername(e.target.value),
        }}
        icon={AtSignIcon}
      />
      <Button onClick={async () => updateUsername(props.userId, username)}>
        Add username
      </Button>
    </div>
  )
}

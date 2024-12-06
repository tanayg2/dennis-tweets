"use client"

import InputWithStartIcon from "@/components/forms/InputWithStartIcon"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AtSignIcon } from "lucide-react"
import { useState } from "react"
import { updateUsername } from "../settings/actions"

export const AddUsername = (props: { userId: string }) => {
  const [username, setUsername] = useState("")
  return (
    <div>
      <Label htmlFor="username">Username</Label>
      <div className="grid grid-cols-[1fr_80px] gap-x-2">
        <InputWithStartIcon
          id="username"
          inputProps={{
            value: username,
            onChange: (e) => setUsername(e.target.value),
          }}
          icon={AtSignIcon}
        />
        <Button onClick={async () => updateUsername(props.userId, username)}>
          Submit
        </Button>
      </div>
    </div>
  )
}

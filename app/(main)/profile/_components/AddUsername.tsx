"use client"

import InputWithStartIcon from "@/components/forms/InputWithStartIcon"
import { Button } from "@/components/ui/button"
import { AtSignIcon } from "lucide-react"
import { useState } from "react"
import { updateUsername } from "../settings/actions"

export const AddUsername = (props: {
  userId: string
  defaultValue?: string
}) => {
  const [username, setUsername] = useState(props.defaultValue ?? "")
  return (
    <div className="grid grid-cols-[1fr_80px] gap-x-2">
      <InputWithStartIcon
        id="username"
        inputProps={{
          value: username,
          onChange: (e) => setUsername(e.target.value),
          defaultValue: props.defaultValue,
        }}
        icon={AtSignIcon}
      />
      <Button onClick={async () => updateUsername(props.userId, username)}>
        Submit
      </Button>
    </div>
  )
}

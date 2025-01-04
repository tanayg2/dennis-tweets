"use client"

import PhoneNumberInput from "@/components/forms/PhoneNumberInput"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { parseInt } from "lodash"
import { updatePhoneNumber } from "../settings/actions"

export const AddPhoneNumber = (props: {
  userId: string
  defaultValue: string
}) => {
  const [phoneNumber, setPhoneNumber] = useState(`${props.defaultValue ?? ""}`)
  return (
    <div className="grid grid-cols-[1fr_80px] gap-x-2">
      <PhoneNumberInput
        id="phone"
        value={phoneNumber}
        handleChange={setPhoneNumber}
        label="Enter your phone number in order to post"
      />
      <Button
        onClick={async () => {
          try {
            // strip + sign from phone number
            const newNumber = parseInt(phoneNumber.replace(/\D/g, ""))
            updatePhoneNumber(props.userId, newNumber)
          } catch (error) {
            console.error(error)
          }
        }}
      >
        Submit
      </Button>
    </div>
  )
}

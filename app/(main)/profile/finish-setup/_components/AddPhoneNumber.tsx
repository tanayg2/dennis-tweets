"use client"

import PhoneNumberInput from "@/components/forms/PhoneNumberInput"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { updatePhoneNumber } from "../actions"
import { parseInt } from "lodash"

export const AddPhoneNumber = (props: { userId: string }) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  return (
    <div>
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
        Add phone number
      </Button>
    </div>
  )
}

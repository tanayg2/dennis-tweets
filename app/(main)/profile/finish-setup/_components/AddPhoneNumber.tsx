"use client"

import PhoneNumberInput from "@/components/forms/PhoneNumberInput"
import { useState } from "react"

export const AddPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  return (
    <div>
      <PhoneNumberInput
        id="phone"
        value={phoneNumber}
        handleChange={setPhoneNumber}
        label="Enter your phone number in order to post"
      />
    </div>
  )
}

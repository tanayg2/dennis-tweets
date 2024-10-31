import InputWithStartIcon from "@/components/forms/InputWithStartIcon"
import PhoneNumberInput from "@/components/forms/PhoneNumberInput"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { createClient } from "@/utils/supabase/server"
import { AtSignIcon } from "lucide-react"
import { redirect } from "next/navigation"
import { AddPhoneNumber } from "./_components/AddPhoneNumber"

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/home")

  const user_details = await supabase
    .from("user_details")
    .select()
    .eq("user_id", user.id)

  if (user_details.count !== 1) {
    throw new Error("User details not found")
  }

  return (
    <div>
      <h1>Welcome to DennisTweets!</h1>

      <p>Finish setting up your profile to start posting and reacting</p>

      <Label htmlFor="username">
        Username
        <InputWithStartIcon id="username" icon={AtSignIcon} />
      </Label>

      <Label htmlFor="phone">
        Phone number
        <AddPhoneNumber />
      </Label>
    </div>
  )
}

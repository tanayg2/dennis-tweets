import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { FormFields } from "./_components/FormFields"

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/home")

  return (
    <div>
      <h1>Welcome to DennisTweets!</h1>

      <p>Finish setting up your profile to start posting and reacting</p>

      <FormFields />
    </div>
  )
}

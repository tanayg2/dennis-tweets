import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { ProfileForm } from "../_components/FormFields"

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: userDetails } = await supabase
    .from("user_details")
    .select("*")
    .eq("user_id", user?.id ?? "")
    .single()

  if (!user) redirect("/home")

  return (
    <div>
      <h1>Welcome to Feeds.app!</h1>

      <p>Finish setting up your profile to start posting and reacting</p>

      {user && userDetails && (
        <ProfileForm user={user} userDetails={userDetails} />
      )}
    </div>
  )
}

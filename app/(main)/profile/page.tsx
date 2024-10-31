import { SignoutButton } from "@/components/auth/SignoutButton"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/home")

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <SignoutButton />
    </div>
  )
}

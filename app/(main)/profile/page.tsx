import { SignoutButton } from "@/components/auth/SignoutButton"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/")

  const { data } = await supabase
    .from("user_details")
    .select("*")
    .eq("user_id", user.id)

  return (
    <div className="space-y-4">
      <h1>Welcome, {user.email}</h1>

      <Link href="/profile/settings" className="text-primary">
        {data?.length ? (
          <p>Update your profile</p>
        ) : (
          <p>Finish setting up your profile to start reacting</p>
        )}
      </Link>

      <SignoutButton />
    </div>
  )
}

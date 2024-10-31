"use client"
import { createClient } from "@/utils/supabase/client"
import { Button, ButtonProps } from "../ui/button"

export const SignoutButton = (props: ButtonProps) => {
  const supabase = createClient()
  return (
    <Button {...props} onClick={async () => supabase.auth.signOut()}>
      Sign out
    </Button>
  )
}

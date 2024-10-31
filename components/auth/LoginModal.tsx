"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { createClient } from "@/utils/supabase/client"
import { useLoginModal } from "../../app/_hooks/useLoginModal"

export const LoginModal = () => {
  const supabase = createClient()
  const loginModal = useLoginModal()
  return (
    <Dialog open={loginModal.isOpen} onOpenChange={loginModal.onOpenChange}>
      <DialogContent className="w-[calc(100vw-30px)] bg-background">
        <DialogTitle>Login to your account</DialogTitle>
        <Button
          onClick={() =>
            supabase.auth.signInWithOAuth({
              provider: "google",
              options: {
                redirectTo: `${process.env["NEXT_PUBLIC_URL"]}/auth/callback?next=/profile/finish-setup`,
              },
            })
          }
        >
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  )
}

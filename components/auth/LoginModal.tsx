"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { createClient } from "@/utils/supabase/client"
import { useLoginModal } from "../hooks/useLoginModal"
import { RiGoogleFill } from "@remixicon/react"

export const LoginModal = () => {
  const supabase = createClient()
  const loginModal = useLoginModal()
  return (
    <Dialog open={loginModal.isOpen} onOpenChange={loginModal.onOpenChange}>
      <DialogContent className="w-[calc(100vw-30px)] bg-white">
        <DialogTitle>Login to your account</DialogTitle>
        <Button
          onClick={() =>
            supabase.auth.signInWithOAuth({
              provider: "google",
              options: {
                redirectTo: `${process.env["NEXT_PUBLIC_URL"]}/auth/callback?next=/`,
              },
            })
          }
          className="bg-[#DB4437] text-white after:flex-1 hover:bg-[#DB4437]/90"
        >
          <span className="pointer-events-none me-2 flex-1">
            <RiGoogleFill className="opacity-60" size={16} aria-hidden="true" />
          </span>
          Login with Google
        </Button>
        <p>
          <i>If you want sign in with apple or anything lmk</i>
        </p>
      </DialogContent>
    </Dialog>
  )
}

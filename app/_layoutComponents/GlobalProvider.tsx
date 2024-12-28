"use client"

import { LoginModal } from "../../components/auth/LoginModal"
import { SessionWatcher } from "./SessionWatcher"

export const GlobalProvider = () => {
  return (
    <>
      <LoginModal />
      <SessionWatcher />
    </>
  )
}

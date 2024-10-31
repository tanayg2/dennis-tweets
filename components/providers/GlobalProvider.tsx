"use client"

import { LoginModal } from "../auth/LoginModal"
import { SessionWatcher } from "./SessionWatcher"

export const GlobalProvider = () => {
  return (
    <>
      <LoginModal />
      <SessionWatcher />
    </>
  )
}

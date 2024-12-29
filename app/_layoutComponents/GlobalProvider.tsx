"use client"

import { LoginModal } from "../../components/auth/LoginModal"
import { FirebaseInitializer } from "./FirebaseInitializer"
import { ServiceWorkerRegistration } from "./ServiceWorkerRegistration"
import { SessionWatcher } from "./SessionWatcher"

export const GlobalProvider = () => {
  return (
    <>
      <LoginModal />
      <SessionWatcher />
      <ServiceWorkerRegistration />
      <FirebaseInitializer />
    </>
  )
}

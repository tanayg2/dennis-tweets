"use client"

import { LoginModal } from "../../components/auth/LoginModal"
import { FirebaseClientInitializer } from "./FirebaseClientInitializer"
import { ServiceWorkerRegistration } from "./ServiceWorkerRegistration"
import { SessionWatcher } from "./SessionWatcher"

export const GlobalProvider = () => {
  return (
    <>
      <LoginModal />
      <SessionWatcher />
      <ServiceWorkerRegistration />
      <FirebaseClientInitializer />
    </>
  )
}

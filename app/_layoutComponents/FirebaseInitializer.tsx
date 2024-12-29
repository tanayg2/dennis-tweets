"use client"

import { initializeApp } from "firebase/app"
import { getMessaging } from "firebase/messaging"
import { useEffect } from "react"
import { useSetFirebaseMessaging } from "./useFirebaseMessaging"

export const FirebaseInitializer = () => {
  const setMessaging = useSetFirebaseMessaging()

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    }
    const app = initializeApp(firebaseConfig)

    const messaging = getMessaging(app)
    setMessaging(messaging)
  }, [])

  return null
}

"use server"
import { createClient } from "@/utils/supabase/server"

export const createUserDetails = async (userId: string) => {
  const supabase = await createClient()

  const { data, error } = await supabase.from("user_details").insert({ user_id: userId, username: "new_user" })
  if (error) throw error

  return data
}

export const updatePhoneNumber = async (userId: string, phoneNumber: number) => {
  const supabase = await createClient()

  const { data, error } = await supabase.from("user_details").update({ phone_number: phoneNumber }).eq("id", userId)
  if (error) {
    console.error(error)
    return null
  }
  return data
}

export const updateUsername = async (userId: string, username: string) => {
  const supabase = await createClient()

  const { data, error } = await supabase.from("user_details").update
    ({ username }).eq("id", userId)
  if (error) {
    console.error(error)
    return null
  }

  return data
}

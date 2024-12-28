"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/");
};

export const fetchUserDetails = async (userId: string) => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("user_details")
    .select("*")
    .eq("user_id", userId);
  return data?.[0] ?? null;
}

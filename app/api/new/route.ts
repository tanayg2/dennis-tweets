import { Post } from "@/lib/types"
import { getPostType } from "@/lib/utils"
import { createClient } from "@/utils/supabase/server"
import { NextRequest } from "next/server"

export async function POST(request: Request) {
  const supabase = await createClient()

  // read data from request body (type readable stream)
  const data = await request.json()
  console.log("here")

  // if (data.query) {
  //   console.log("Query params: ", data.query)
  // }

  const url = data.query.text ?? data.body.text
  console.log("URL: ", url)
  if (!url) {
    return Response.json("No link found in data", { status: 400 })
  }
  try {
    console.log("here2")
    new URL(url)
  } catch (e) {
    return Response.json(`Invalid URL: ${url}`, { status: 400 })
  }

  console.log("here3")
  const type = getPostType(url)
  if (!type) {
    return Response.json(`Invalid URL ${url}`, { status: 400 })
  }

  console.log("here4")
  const newPost: Partial<Post> = {
    author: data.query.msisdn ?? data.body.from,
    url,
    type,
  }
  console.log("Data: ", data)

  try {
    console.log("here5")
    const res = await supabase.from("posts").insert([data])
    return Response.json(res, { status: 204 })
  } catch (e) {
    console.log("here6")
    return Response.json(`Error adding document: ${e}`, { status: 500 })
  }
  // const token = request.headers.authorization?.split(" ")[1];
  // if (verifySignature(token, secret)) {
  //   console.log("Valid signature");
  // } else {
  //   console.log("Invalid signature");
  // }
}

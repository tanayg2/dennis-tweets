import { Database } from "@/lib/db.types"
import { getPostType } from "@/lib/utils"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SERVICE_KEY!
  )

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
  const owner = data.query.msisdn ?? data.body.from
  const newPost: Database["public"]["Tables"]["posts"]["Insert"] = {
    owner,
    url,
    type,
  }
  console.log("Data: ", newPost)

  try {
    console.log("here5", newPost)
    const res = await supabase.from("posts").insert(newPost)
    return Response.json(res, { status: 200 })
  } catch (e) {
    console.error(e)
    return Response.json(`Error adding document: ${e}`, { status: 500 })
  }
  // const token = request.headers.authorization?.split(" ")[1];
  // if (verifySignature(token, secret)) {
  //   console.log("Valid signature");
  // } else {
  //   console.log("Invalid signature");
  // }
}

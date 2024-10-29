import { Database } from "@/lib/db.types"
import { getPostType } from "@/lib/utils"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // read data from request body (type readable stream)
  const data = await request.json()

  // if (data.query) {
  //   console.log("Query params: ", data.query)
  // }

  const url = data.query.text ?? data.body.text
  if (!url) {
    return Response.json("No link found in data", { status: 400 })
  }
  try {
    new URL(url)
  } catch (e) {
    return Response.json(`Invalid URL: ${url}`, { status: 400 })
  }

  const type = getPostType(url)
  if (!type) {
    return Response.json(`Invalid URL ${url}`, { status: 400 })
  }

  const owner = data.query.msisdn ?? data.body.from
  const newPost: Database["public"]["Tables"]["posts"]["Insert"] = {
    owner,
    url,
    type,
  }

  try {
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

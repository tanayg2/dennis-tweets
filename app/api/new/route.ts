import { Database } from "@/lib/db.types"
import { getPostType } from "@/lib/utils"
import { createClient } from "@supabase/supabase-js"
import { fromPairs } from "lodash"

type VonageRequest = {
  msisdn: string
  text: string
}
export async function POST(request: Request) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const body = await processRequestBody(request)

  const url = body.text
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

  const owner = body.msisdn
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

const processRequestBody = async (request: Request): Promise<VonageRequest> => {
try { 
  const body = await request.body?.getReader().read().then((r) => {
    return new TextDecoder().decode(r.value)
  })

  return fromPairs(decodeURIComponent(body?? "").split("&").map(pair => pair.split('='))) as VonageRequest
 } catch (e) {
  try {
    return await request.json()
  } catch (e) {
    console.error(e)
    return { msisdn: "", text: "" }
  }
 }
}

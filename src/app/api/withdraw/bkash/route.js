import dbConnect from "@/app/lib/Database/dbConnect";


// Post Api Data ============================
export async function POST(req) {
  const postItems = await req.json();
  const data = await dbConnect("withdraw").insertOne(postItems)

  return Response.json(data)
}
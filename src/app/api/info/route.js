import dbConnect from "../../lib/Database/dbConnect";


// Get Api Data ============================
export async function GET() {
  const data = await dbConnect("user").find({}).toArray()
  return Response.json(data)
}

// Post Api Data ============================
export async function POST(req) {
  const postItems = await req.json();
  const data = await dbConnect("user").insertOne(postItems)

  return Response.json(data)
}
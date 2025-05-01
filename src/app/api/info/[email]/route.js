import { ObjectId } from "mongodb";
import dbConnect from "../../../lib/Database/dbConnect";

// Get Single Api Data============================
export async function GET(req, {params}) {
    const email = await params.email;
    // console.log(email)
    const data = await dbConnect("user").findOne({ email: email });
    return Response.json(data)
}

// Update Single Api Data============================
export async function PATCH(req, {params}) {
    // const email = await params.email;
    const email = await params.email;
    const amout = await req.json();
    // console.log(amout)
    const filter = { email: email };
    const upadateResponse = await dbConnect("user").updateOne(filter, 
        {$set: {
            balance: amout,
         },}, 
        {upsert: true});
    return Response.json(upadateResponse)
}
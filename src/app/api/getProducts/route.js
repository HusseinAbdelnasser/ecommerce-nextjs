
import ProductModal from "DBconfig/models/product";
import { connectMongoDB } from "DBconfig/mongoDB";
import { NextResponse } from "next/server";



export async function GET(request) {
  await connectMongoDB();
  const arrData = await ProductModal.find();
  console.log("***********************************************")
  console.log(arrData);


    // Go back to frontend
    return NextResponse.json(arrData);
}

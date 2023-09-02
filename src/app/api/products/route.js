import { connectionSrt } from "@/utils/dbconnection";
import { Product } from "@/utils/schema/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = [];
    try {
        await mongoose.connect(connectionSrt);
        data = await Product.find();
        return NextResponse.json({ result: data, success: true });

    } catch (error) {
        console.log('Error :', error);
        return NextResponse.json({ result: error, success: false });
    }
}


export async function POST(req) {
    const payload = await req.json();
    payload.color = payload.color.split(',');
    await mongoose.connect(connectionSrt);
    const product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({ result, success: true }, { status: 200 });

}
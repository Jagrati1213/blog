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
import { connectionSrt } from "@/utils/dbconnection";
import { Product } from "@/utils/schema/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {

    const payload = await request.json();
    const productid = content.params.productid;
    const filter = { _id: productid };
    await mongoose.connect(connectionSrt);
    const result = await Product.findOneAndUpdate(filter, payload);

    return NextResponse.json({ result, success: true });
}

export async function GET(_, content) {
    const productid = content.params.productid;
    const filter = { _id: productid };
    await mongoose.connect(connectionSrt);
    const result = await Product.findById(filter);
    return NextResponse.json({ result, success: true });
}

export async function DELETE(_, content) {
    const productid = content.params.productid;
    const filter = { _id: productid };
    await mongoose.connect(connectionSrt);
    const result = await Product.findOneAndDelete(filter);
    return NextResponse.json({ result, success: true });
}
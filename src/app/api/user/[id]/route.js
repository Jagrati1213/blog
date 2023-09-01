import { UserData } from "@/utils/userDatabase";
import { NextResponse } from "next/server";

export function GET(_, content) {
    const id = content.params.id;
    const data = UserData.find((item) => item.id == id);
    if (data !== undefined) {
        return NextResponse.json({ result: data, success: true }, { status: 200 });

    }
    return NextResponse.json({ result: 'this data is not found', success: false }, { status: 400 });
}

export async function PUT(req, content) {
    let payload = await req.json();
    payload.id = content.params.id;
    return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(req, content) {
    let payload = req.json();
    payload.id = content.params.id;
    return NextResponse.json({ result: payload, success: true }, { status: 200 });
}
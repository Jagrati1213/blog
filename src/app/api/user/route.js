import { UserData } from "@/utils/userDatabase";
import { NextResponse } from "next/server";

export function GET() {
    const data = UserData;
    return NextResponse.json({ result: data, success: true }, { status: 200 });
}

export async function POST(req) {
    let res = await req.json();
    if (!res.name || !res.email) {
        return NextResponse.json({ result: 'All fields are required', success: false }, { status: 400 });
    } else {
        return NextResponse.json({ result: res, success: true }, { status: 200 });
    }
}

// Still working in add user
// export async function PUT(req) {
//     let payload = await req.json();
//     return NextResponse.json({ result: payload, success: true }, { status: 200 });
// }
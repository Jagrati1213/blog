import { UserDetails } from "@/util/db";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(UserDetails, { status: 200 });
}

// create-update
export async function POST(req) {
    const payload = await req.json();

    if (!payload.name || !payload.email) {
        return NextResponse.json({ result: 'require field not found', success: false }, { status: 400 });
    } else {
        return NextResponse.json({ result: 'new user created', success: true }, { status: 201 });
    }
}


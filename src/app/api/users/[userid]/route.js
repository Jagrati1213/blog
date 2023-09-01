import { UserDetails } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(_, res) {
    let id = res.params.userid;
    const data = UserDetails.find((item) => item.id == id);
    return NextResponse.json(data == undefined ? 'Not found' : data, { status: 200 });
}

export async function PUT(req, content) {
    let payload = await req.json();
    let userId = content.params.userid;
    payload.id = userId;
    if (!payload.name || !payload.id || !payload.email) {
        return NextResponse.json({ result: 'Error', success: false }, { status: 404 });
    }
    return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(_, con) {
    let id = con.params.userid;
    if (id) {
        return NextResponse.json({ result: 'user deleted', success: true }, { status: 200 });
    } else {
        return NextResponse.json({ result: 'not found', success: false }, { status: 400 });
    }
}
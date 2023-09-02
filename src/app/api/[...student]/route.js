import { NextResponse } from "next/server";

// dynamic route
export function GET(_, content) {
    const studentDetails = content.params.student;
    return NextResponse.json({ result: studentDetails }, { status: 200 });
}
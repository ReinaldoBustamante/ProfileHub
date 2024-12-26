import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
        return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {cache: 'force-cache'});
        if (!response.ok) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        const profile = await response.json();
        const rateResponse = await fetch("https://api.github.com/rate_limit")
        const { rate } = await rateResponse.json()
        
        return NextResponse.json({
            data: profile,
            rate
        });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

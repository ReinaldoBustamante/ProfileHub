
import { Repository } from "@/interface/repository";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      cache: "force-cache"
    });
    if (!response.ok) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const repos: Repository[] = await response.json();
   
    const languages = repos.map(repo => repo.language || "No definido");
    
    const languageCount: Record<string, number> = {};
    languages.forEach((language: string) => {
      languageCount[language] = (languageCount[language] || 0) + 1;
    });

    const rateResponse = await fetch("https://api.github.com/rate_limit")
    const { rate } = await rateResponse.json()
  
    return NextResponse.json({
      languageCount,
      rate_limit: rate
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};

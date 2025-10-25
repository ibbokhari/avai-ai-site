
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  const data = await req.text();
  console.log("Contact form submission:", data);
  return NextResponse.json({ ok: true });
}

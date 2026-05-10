import { NextRequest, NextResponse } from "next/server";
import connect from "libs/config";
import { writeFile } from "fs/promises";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;

  return NextResponse.json({
    success: true,
    message: "User created successfully",
  });
}

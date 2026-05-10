import { NextRequest, NextResponse } from "next/server";
import connect from "libs/config";
import { writeFile } from "fs/promises";
import bcrypt from "bcryptjs";

export async function GET() {
  const [rows] = await connect.execute("SELECT * FROM customer");
  return NextResponse.json(rows);
}
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const nickname = formData.get("nickname");
  const username = formData.get("username");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const avatar = formData.get("image") as File;
  //const image = formData.getAll("image") as File[];
  const password = formData.get("password") as string;

  const hashedPassword = bcrypt.hashSync(password, 8);

  console.log(hashedPassword);
  //console.log("name");

  // /* image single */

  const buffer = Buffer.from(await avatar.arrayBuffer());
  await writeFile(`public/users/${avatar.name}`, buffer.toString());
  const avatarName = avatar.name;
  //console.log(avatar.name);

  await connect.execute(
    `INSERT INTO customer(custname,email,username,password,avatar,phoneno,address) VALUES (?,?,?,?,?,?,?)`,
    [nickname, email, username, hashedPassword, avatarName, phone, address]
  );
  return NextResponse.json({ success: true, message: "successful" });
}

import { NextRequest, NextResponse } from "next/server";
import connect from "libs/config";
import { writeFile } from "fs/promises";
import bcrypt from "bcryptjs";

export async function GET() {
  const [rows] = await connect.execute("SELECT * FROM customer");
  return NextResponse.json(rows);
}
export async function POST(request: NextRequest) {
  const data = await request.formData();
  const nickname = data.get("name");
  const username = data.get("username");
  const email = data.get("email");
  //const phone = data.get("phone");
  //const address = data.get("address");
  //const avatar = data.get("image") as File;
  //const image = data.getAll("image") as File[];
  const password = data.get("password") as string;

  const hashedPassword = bcrypt.hashSync(password, 8);

  //console.log(hashedPassword);
  //console.log("name");

  // /* image single */

  // const buffer = Buffer.from(await avatar.arrayBuffer());
  // await writeFile(`public/users/${avatar.name}`, buffer.toString());
  // const avatarName = avatar.name;
  // console.log(avatarName);

  await connect.execute(
    `INSERT INTO customer(custname,email,username,password) VALUES (?,?,?,?)`,
    [nickname, email, username, hashedPassword]
  );
  return NextResponse.json({ success: true, message: "successful" });
}

import { NextRequest, NextResponse } from "next/server";
import connect from "libs/config";
import { writeFile } from "fs/promises";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const [rows] = await connect.execute(
    "SELECT * FROM customer WHERE cust_id = ?",
    [params.id]
  );
  return NextResponse.json(rows);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await request.formData();
  //const username = data.get("username");
  const image = data.getAll("image") as File[];
  //const password = data.get("password");
  //const nickname = data.get("nickname");
  //const image = data.get("avatar");
  //const email = data.get("email");

  //console.log(image);
  const nameFile = [];

  for (const files of image) {
    if (typeof files === "object" && "arrayBuffer" in files) {
      const fil = files;
      const buffer = Buffer.from(await fil.arrayBuffer());
      await writeFile(`public/users/${fil.name}`, buffer.toString());

      nameFile.push(fil.name);
    }
  }
  //console.log(nameFile);
  await connect.execute(`UPDATE customer SET avatar = ?  WHERE cust_id = ?`, [
    nameFile,
    params.id,
  ]);
  return NextResponse.json({ success: true, message: "successful" });
}

import { NextRequest, NextResponse } from "next/server";
import connect from "libs/config";
import { writeFile } from "fs/promises";

export async function GET() {
  const [rows] = await connect.execute("SELECT * FROM cake");
  return NextResponse.json(rows);
}

export async function POST(request: NextRequest, res: NextResponse) {
  const data = await request.formData();
  const name = data.get("name");
  const image = data.getAll("image") as File[];
  const slices = data.get("slices");

  console.log("name");
  const nameFile = [];

  for (const files of image) {
    if (typeof files === "object" && "arrayBuffer" in files) {
      const fil = files;
      const buffer = Buffer.from(await fil.arrayBuffer());
      await writeFile(`public/images/${fil.name}`, buffer);

      nameFile.push(fil.name);
    }
  }
  console.log(nameFile);

  await connect.execute(
    `INSERT INTO cake(cake_name, cake_image, slices) VALUES (?,?,?)`,
    [name, nameFile, slices]
  );
  return NextResponse.json({ success: true, message: "successful" });
}

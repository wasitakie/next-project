import { writeFile } from "fs/promises";
import connect from "libs/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const [rows] = await connect.execute(`SELECT * FROM cake WHERE cakeid = ? `, [
    params.id,
  ]);
  return NextResponse.json(rows);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await request.formData();
  //const name = data.get("name");
  const image = data.getAll("image") as File[];
  const slices = data.get("slices");

  const nameFile = [];

  for (const files of image) {
    if (typeof files === "object" && "arrayBuffer" in files) {
      const fil = files;
      const buffer = Buffer.from(await fil.arrayBuffer());
      await writeFile(`public/images/${fil.name}`, buffer);

      nameFile.push(fil.name);
    }
  }

  await connect.execute(
    `UPDATE cake SET cake_image= ?,slices = ? WHERE cakeid = ?`,
    [nameFile, slices, params.id]
  );
  return NextResponse.json({ success: true, message: "successful" });
}

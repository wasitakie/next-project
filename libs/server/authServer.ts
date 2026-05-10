"use server";

import { NextRequest, NextResponse } from "next/server";
import connect from "libs/config";

export async function checkUser(data: any) {
  try {
    const [rows] = await connect.execute(
      "SELECT * FROM customer WHERE username=? AND password= ?",
      [data.username, data.password]
    );
    return rows;
  } catch (err) {
    console.log("Error fetching user", err);
    return false;
  }
}

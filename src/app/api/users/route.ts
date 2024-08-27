import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("Failed to retrieve users:", error);
    return NextResponse.json(
      { success: false, message: "Failed to retrieve users" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { name, email, password } = await req.json();

    const newUser = new User({ name, email, password });
    await newUser.save();

    return NextResponse.json({ success: true, data: newUser });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create user" },
      { status: 500 }
    );
  }
}

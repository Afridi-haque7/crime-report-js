import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, name, role } = body;

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, password, and name are required." },
        { status: 400 }
      );
    }

    // Check for existing user
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "A user with this email already exists." },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: role || "USER", // Default to "USER" if not specified
      },
    });

    // Exclude password from the response
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (err) {
    console.error("User signup error:", err);
    return NextResponse.json(
      { error: "Internal server error while creating user." },
      { status: 500 }
    );
  }
}

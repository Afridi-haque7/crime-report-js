import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import { encode } from "next-auth/jwt";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email or Password is missing" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (!existingUser) {
    return NextResponse.json(
      { message: "No user found with this email!!" },
      { status: 402 }
    );
  }

  if (!existingUser.isVerified) {
    return NextResponse.json(
      { message: "Your account is not verified!" },
      { status: 401 }
    );
  }

  if (existingUser?.role !== "ADMIN") {
    return NextResponse.json(
      { message: "You are not authorized to perform this action" },
      { status: 403 }
    );
  }

  try {
    // check if current password matches with database password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Wrong Password!" }, { status: 401 });
    }

    // generate jwt token
    // const token = jwt.sign(
    //   { id: existingUser.id },
    //   process.env.NEXTAUTH_SECRET,
    //   { expiresIn: "24h" }
    // );

    // const cookieOptions = {
    //     httpOnly: true,
    //     maxAge: 24*60*60*1000
    // }

    // const response = NextResponse.json(
    //   {
    //     success: true,
    //     message: "Login Successful",
    //     token,
    //     user: {
    //       id: existingUser.id,
    //       name: existingUser.name,
    //       email: existingUser.email,
    //     },
    //   },
    //   { status: 200 }
    // );

    // response.cookies.set("token", token, cookieOptions);

    // Encode a NextAuth-compatible JWT
    // NOTE: maxAge is in seconds
    const maxAgeSeconds = 24 * 60 * 60; // 1 day
    const nextAuthToken = await encode({
      token: {
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
        sub: existingUser.id.toString(), // important: sub = user id as string
      },
      secret: process.env.NEXTAUTH_SECRET,
      maxAge: maxAgeSeconds,
    });

    // Cookie name: use secure prefixed name in production (requires HTTPS)
    const cookieName =
      process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token";

    // Build response and set cookie (use seconds for maxAge)
    const res = NextResponse.json(
      { success: true, message: "Logged in" },
      { status: 200 }
    );

    res.cookies.set({
      name: cookieName,
      value: nextAuthToken,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: maxAgeSeconds, // **seconds**, not ms
    });

    // Optional: remove your old custom 'token' cookie to avoid confusion
    res.cookies.delete("token", { path: "/" });

    return res;
  } catch (error) {
    console.log(error.message);

    return NextResponse.json({ message: "User login failed" }, { status: 401 });
  }
}

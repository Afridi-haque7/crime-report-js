import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export async function POST(request) {
    const body = await request.json();
    const {email, password} = body;
    
    if(!email || !password) {
        return NextResponse.json(
            {message: "Email or Password is missing"},
            {status: 400}
        );
    }

    const existingUser = await prisma.user.findUnique(
        {where: {email}}
    )

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

    console.log("Outside try-catch");
    
    try {
        // check if current password matches with database password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
          return NextResponse.json(
            { message: "Wrong Password!" },
            { status: 401 }
          );
        }

        // generate jwt token
        const token = jwt.sign(
          { id: existingUser.id },
          process.env.JWT_SECRET,
          { expiresIn: "24h" }
        );

        const cookieOptions = {
            httpOnly: true,
            maxAge: 24*60*60*1000
        }

        const response = NextResponse.json(
          {
            success: true,
            message: "Login Successful",
            token,
            user: {
              id: existingUser.id,
              name: existingUser.name,
              email: existingUser.email,
            },
          },
          { status: 200 }
        );

        response.cookies.set("token", token, cookieOptions);

        return response;

    } catch (error) {
        console.log(error.message);
        
        return NextResponse.json(
          { message: "User login failed" },
          { status: 401 }
        );
    }
}
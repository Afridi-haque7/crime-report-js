import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function PATCH(request, { params }) {
    const { resetToken } = await params;
    const body = await request.json();
    const { password } = body;

    if(!resetToken){
        return NextResponse.json(
            { message: "No Token found!" }, 
            { status: 400 }
        );
    }

    if(!password){
        return NextResponse.json(
          { message: "Enter new password!" },
          { status: 400 }
        );
    }

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                resetPasswordToken: resetToken,
                resetPasswordExpires: {
                    gt: new Date()
                }
            }
        });

        if(!existingUser){
            return NextResponse.json(
              { message: "Invalid or expired token!" },
              { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
          await prisma.user.update({
            where: { email: existingUser.email },
            data: {
              password: hashedPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null,
            },
          });

          return NextResponse.json(
            { message: "Password changed successfully" },
            { status: 201 }
          );
        } catch (error) {
          return NextResponse.json(
            { message: "Failed to update user data" },
            { status: 401 }
          );
        }

    } catch (error) {
        return NextResponse.json(
          { message: "Failed to reset password" },
          { status: 500 }
        );
    }
}

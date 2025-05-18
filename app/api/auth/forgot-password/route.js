import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ message: "Email is missing" }, { status: 400 });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (!existingUser) {
      return NextResponse.json(
        { message: "Email does not exist" },
        { status: 401 }
      );
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 10 * 60 * 1000;

    try {
      await prisma.user.update({
        where: { email },
        data: {
          resetPasswordToken: resetToken,
          resetPasswordExpires: new Date(resetTokenExpiry),
        },
      });

      // send token via mail to user
      const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_URL,
        port: process.env.MAILTRAP_PORT,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.MAILTRAP_SENDEREMAIL,
        to: existingUser.email, // list of receivers
        subject: `Forget Password Token`, // Subject line
        text: `Click on the link to verify: 
                  ${process.env.BASE_URL}/api/auth/reset/${resetToken}`, // plain text body
        html: `<!DOCTYPE html>
            <html lang="en">
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Email Verification</h1>
                    </div>
                    <div class="content">
                        <p>Hello ${existingUser.email},</p>
                        
                        <p>Welcome to our app! We're excited to have you on board.</p>
                        
                        <div class="instructions">
                            <p>To verify your email address, please click below:</p>
                            <a href={${process.env.BASE_URL}/api/auth/reset/${resetToken}} class="button">Verify Email</a>
                            <p>${process.env.BASE_URL}/api/auth/reset/${resetToken}</p>
                        </div>
                        
                        <p>If you didn't request this email, you can safely ignore it.</p>
                        <p>Need help or have questions? Just reply to this email.</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2025 SafeReport. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>`,
      };

      try {
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
          { message: "Forgot password mail sent successfully!" },
          { status: 201 }
        );
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to send forget password email!" },
          { status: 401 }
        );
      }
    } catch (error) {
        return NextResponse.json(
          { message: "Failed to update user details" },
          { status: 401 }
        );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Forgot password failed" },
      { status: 402 }
    );
  }
}

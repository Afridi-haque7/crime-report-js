import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";

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

    try {
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
      const token = crypto.randomBytes(32).toString("hex");

      // Create user
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
          role: role || "USER",
          verificationToken: token,
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
        to: newUser.email, // list of receivers
        subject: `Verify your email`, // Subject line
        text: `Click on the link to verify: 
      ${process.env.BASE_URL}/api/auth/verify/${token}`, // plain text body
        html: `<!DOCTYPE html>
<html lang="en">
<body>
    <div class="container">
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="content">
            <p>Hello ${newUser.email},</p>
            
            <p>Welcome to our app! We're excited to have you on board.</p>
            
            <div class="instructions">
                <p>To verify your email address, please click below:</p>
                <a href={${process.env.BASE_URL}/api/auth/verify/${token}} class="button">Verify Email</a>
                <p>${process.env.BASE_URL}/api/auth/verify/${token}</p>
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
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to send verification email!" },
          { status: 401 }
        );
      }

      // const verificationUrl = `${process.env.BASE_URL}/api/auth/verify/${token}`;

      // const emailSent = await sendEmail({
      //   to: newUser.email,
      //   subject: "Verify your email address",
      //   template: emailTemplates.verification(newUser.name, verificationUrl),
      // });

      // if (!emailSent) {
      //   // Optionally handle email sending failure
      //   console.error("Failed to send verification email");
      // }
      // Exclude password from the response
      const { password: _, ...userWithoutPassword } = newUser;

      return NextResponse.json(
        { message: "User created successfully" },
        userWithoutPassword,
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to create new user" },
        { status: 400 },
        { message: error.message }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error while creating user." },
      { status: 500 }
    );
  }
}

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request){
    const {token} = request.params;
    console.log("token: ", token);
    
    if(!token){
        return NextResponse.json(
            {message: "Invalid Token"},
            {status: 401}
        )
    }

    try {
        
        const user = await prisma.user.findUnique({
          where: {
            verificationToken: token,
          },
        });

        if(!user){
            return NextResponse.json(
                {message: "User not found!"},
                {status: 401}
            );
        }

        try {
            await prisma.user.update({
              where: { verificationToken: token },
              data: {
                isVerified: true,
                verificationToken: null,
              },
            });

            return NextResponse.json(
                {message: "User verified successfully!"},
                {status: 201}
            )
        } catch (error) {
            return NextResponse.json(
                {message: "Failed to update isVerified!"},
                {status: 400}
            )
        }

        
    } catch (error) {
        return NextResponse.json(
          { message: "Failed to verify user" },
          { status: 500 }
        );
    }
}
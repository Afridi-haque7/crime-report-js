import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PATCH(request, { params }) {
  const { reportId } = params;

  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();

    if (!status) {
      return NextResponse.json(
        { error: "Status is required" },
        { status: 400 }
      );
    }

    const report = await prisma.report.update({
      where: { id: reportId },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error updating report:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: "Failed to update report" },
      { status: 500 }
    );
  }
}

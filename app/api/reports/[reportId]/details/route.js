import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET /api/reports/[reportId]
export async function GET(request, { params }) {
  try {
    const { reportId } = await params;

    const report = await prisma.report.findUnique({
      where: { reportId },
    });

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error fetching report details:", error);
    return NextResponse.json(
      { error: "Failed to fetch report details" },
      { status: 500 }
    );
  }
}

// PATCH /api/reports/[id]
export async function PATCH(request, { params }) {
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
      where: { id: params.id },
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

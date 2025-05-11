import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(request) {
  try {
    const { image } = await request.json();
    const base64Data = image.split(",")[1];
    const prompt = `Analyze this emergency situation image and respond in this exact format without any asterisks or bullet points:
TITLE: Write a clear, brief title
TYPE: Choose one (Theft, Fire Outbreak, Medical Emergency, Natural Disaster, Violence, or Other)
DESCRIPTION: Write a short, clear, concise description`;
    const imageMimeType = "image/jpeg";

    const textPart = {
      text: prompt,
    };

    const imagePart = {
      inlineData: {
        mimeType: imageMimeType,
        data: base64Data,
      },
    };

    const requestContents = [imagePart, textPart];
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: requestContents,
    });

    const aiResponse = result.text || ""; // Ensure text() is awaited

    // Parse the response more precisely
    const titleMatch = aiResponse.match(/TITLE:\s*(.+)/);
    const typeMatch = aiResponse.match(/TYPE:\s*(.+)/);
    const descMatch = aiResponse.match(/DESCRIPTION:\s*(.+)/);

    return NextResponse.json({
      title: titleMatch?.[1]?.trim() || "",
      reportType: typeMatch?.[1]?.trim() || "",
      description: descMatch?.[1]?.trim() || "",
    });
  } catch (error) {
    console.error("Image analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    );
  }
}
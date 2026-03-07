import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { image } = await request.json();
    const base64Data = image.split(",")[1];
    const prompt = `Analyze this emergency situation image and respond in this exact format without any asterisks or bullet points:
TITLE: Write a clear, brief title
TYPE: Choose one (Theft, Fire Outbreak, Medical Emergency, Natural Disaster, Violence, or Other)
DESCRIPTION: Write a short, clear, concise description`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-scout-17b-16e-instruct", // ✅ vision model
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",         // ✅ text first
                  text: prompt,
                },
                {
                  type: "image_url",    // ✅ image second
                  image_url: {
                    url: `data:image/jpeg;base64,${base64Data}`,
                  },
                },
              ],
            },
          ],
          max_tokens: 1024,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Groq API error");
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

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
      { status: 500 },
    );
  }
}
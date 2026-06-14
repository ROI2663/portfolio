import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contactSchema";
import { appendContactRow } from "@/lib/googleSheets";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { ok: false, message: "Content-Type は application/json を指定してください。" },
      { status: 400 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "JSONの形式が不正です。" },
      { status: 400 },
    );
  }

  const validated = validateContactPayload(body);
  if (!validated.ok) {
    return NextResponse.json({ ok: false, message: validated.message }, { status: 400 });
  }

  try {
    await appendContactRow(validated.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to append contact row:", error);
    return NextResponse.json(
      { ok: false, message: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }
}

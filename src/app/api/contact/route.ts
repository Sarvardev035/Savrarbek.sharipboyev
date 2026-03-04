import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { user_name, user_email, subject, message } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ error: "Telegram not configured" }, { status: 500 });
    }

    const text =
      `📬 <b>New Portfolio Message</b>\n\n` +
      `👤 <b>Name:</b> ${user_name}\n` +
      `📧 <b>Email:</b> ${user_email}\n` +
      `📌 <b>Subject:</b> ${subject || "—"}\n\n` +
      `💬 <b>Message:</b>\n${message}`;

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    });

    const data = await res.json();

    if (!data.ok) {
      return NextResponse.json({ error: data.description }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

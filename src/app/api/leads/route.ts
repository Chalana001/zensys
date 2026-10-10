import { NextResponse } from "next/server";

const recipient = "founder@zensys.lk";
const allowedKinds = new Set(["demo", "contact"]);

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
    }
  }

  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const input = body as Record<string, unknown>;
  if (text(input.website, 200)) return NextResponse.json({ ok: true });

  const kind = text(input.kind, 20);
  const name = text(input.name, 100);
  const business = text(input.business, 120);
  const email = text(input.email, 200);
  const phone = text(input.phone, 40);
  const product = text(input.product, 30);
  const topic = text(input.topic, 60);
  const message = text(input.message, 2000);

  if (!allowedKinds.has(kind) || !name || !business || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please check the required fields." }, { status: 400 });
  }
  if (kind === "demo" && !["POS", "GMS", "Both"].includes(product)) {
    return NextResponse.json({ error: "Choose a product." }, { status: 400 });
  }
  if (kind === "contact" && !message) return NextResponse.json({ error: "Enter a message." }, { status: 400 });

  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_SENDER_EMAIL;
  const fromName = process.env.BREVO_SENDER_NAME || "ZenSys Solutions";
  if (!apiKey || !fromEmail) return NextResponse.json({ error: "Lead delivery is not configured." }, { status: 503 });

  const subject = kind === "demo" ? `Website demo request — ${product}` : `Website contact — ${topic || "General inquiry"}`;
  const lines = [
    `Request type: ${kind}`,
    `Name: ${name}`,
    `Business: ${business}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone}`,
    kind === "demo" ? `Product: ${product}` : `Topic: ${topic || "General inquiry"}`,
    "",
    message || "No additional message supplied.",
  ];

  const delivery = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: [{ email: recipient, name: "ZenSys Solutions" }],
      replyTo: { email },
      subject,
      textContent: lines.join("\n"),
    }),
    cache: "no-store",
  }).catch(() => null);

  if (!delivery?.ok) return NextResponse.json({ error: "Could not deliver the request." }, { status: 502 });
  return NextResponse.json({ ok: true });
}

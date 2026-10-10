import { NextResponse } from "next/server";

const recipient = "founder@zensys.lk";
const allowedKinds = new Set(["demo", "contact"]);

function failure(status: number, code: string, error: string, requestId: string) {
  return NextResponse.json({ error, code, requestId }, { status });
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function providerDetails(value: unknown) {
  if (!value || typeof value !== "object") return { code: undefined, message: undefined };
  const detail = value as Record<string, unknown>;
  const clean = (item: unknown) => typeof item === "string"
    ? item
      .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "<email>")
      .replace(/(?:xkeysib|xsmtpsib)-[A-Z0-9-]+/gi, "<redacted-key>")
      .slice(0, 240)
    : undefined;
  return { code: clean(detail.code), message: clean(detail.message) };
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return failure(403, "INVALID_ORIGIN", "This request came from an invalid origin.", requestId);
      }
    } catch {
      return failure(403, "INVALID_ORIGIN", "This request came from an invalid origin.", requestId);
    }
  }

  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return failure(400, "INVALID_REQUEST", "The request body is missing or invalid.", requestId);
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
    return failure(400, "INVALID_FIELDS", "Please check the required form fields.", requestId);
  }
  if (kind === "demo" && !["POS", "GMS", "Both"].includes(product)) {
    return failure(400, "INVALID_PRODUCT", "Choose a product before sending the request.", requestId);
  }
  if (kind === "contact" && !message) return failure(400, "MESSAGE_REQUIRED", "Enter a message before sending the request.", requestId);

  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_SENDER_EMAIL;
  const fromName = process.env.BREVO_SENDER_NAME || "ZenSys Solutions";
  if (!apiKey || !fromEmail) {
    console.error("[lead-delivery] configuration_missing", { requestId, hasApiKey: Boolean(apiKey), hasSender: Boolean(fromEmail) });
    return failure(503, "EMAIL_NOT_CONFIGURED", "Email delivery is not configured on this deployment.", requestId);
  }

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

  let delivery: Response;
  try {
    delivery = await fetch("https://api.brevo.com/v3/smtp/email", {
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
    });
  } catch (error) {
    const causeCode = error && typeof error === "object" && "cause" in error
      ? (error as { cause?: { code?: unknown } }).cause?.code
      : undefined;
    console.error("[lead-delivery] provider_connection_failed", {
      requestId,
      errorName: error instanceof Error ? error.name : "UnknownError",
      causeCode: typeof causeCode === "string" ? causeCode : undefined,
    });
    return failure(502, "EMAIL_PROVIDER_UNREACHABLE", "The site could not connect to the email provider. Please try again later.", requestId);
  }

  if (!delivery.ok) {
    const responseBody = await delivery.json().catch(() => null);
    const details = providerDetails(responseBody);
    console.error("[lead-delivery] provider_rejected", {
      requestId,
      status: delivery.status,
      providerCode: details.code,
      providerMessage: details.message,
    });

    if (delivery.status === 401) {
      return failure(502, "BREVO_API_KEY_REJECTED", "Brevo rejected the API key configured for this deployment. Check BREVO_API_KEY in the environment settings.", requestId);
    }
    if (delivery.status === 403) {
      return failure(502, "BREVO_ACCESS_DENIED", "Brevo denied this request. Check account access and any API IP restrictions.", requestId);
    }
    if (delivery.status === 400) {
      return failure(502, "BREVO_SENDER_OR_REQUEST_REJECTED", "Brevo rejected the sender or message. Check that BREVO_SENDER_EMAIL is an active, verified sender.", requestId);
    }
    if (delivery.status === 429) {
      return failure(502, "BREVO_RATE_LIMITED", "Brevo is temporarily rate-limiting requests. Please try again shortly.", requestId);
    }
    return failure(502, "BREVO_REJECTED", `Brevo rejected the request (HTTP ${delivery.status}). Check the deployment logs using request ID ${requestId}.`, requestId);
  }

  return NextResponse.json({ ok: true, requestId });
}

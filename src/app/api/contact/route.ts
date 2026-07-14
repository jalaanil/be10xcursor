import { NextResponse } from "next/server";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

function validatePayload(payload: ContactPayload) {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name) return { error: "Name is required" };
  if (!email) return { error: "Email is required" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter a valid email address" };
  }
  if (!message) return { error: "Message is required" };
  if (message.length < 10) return { error: "Message must be at least 10 characters" };

  return { name, email, message };
}

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Contact form is not configured. Missing Supabase environment variables." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const validated = validatePayload(payload);
  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  try {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name: validated.name,
      email: validated.email,
      message: validated.message,
    });

    if (error) {
      console.error("Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "Unable to save your message. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unable to save your message. Please try again later." },
      { status: 500 },
    );
  }
}

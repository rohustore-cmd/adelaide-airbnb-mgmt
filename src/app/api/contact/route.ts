import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const MIN_ELAPSED_MS = 3000; // real users take at least 3 seconds

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, suburb, bedrooms, message, _hp, _t } = body;

    // Honeypot: reject if the hidden field was filled
    if (_hp) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Timing check: reject if submitted too fast (bot behaviour)
    const elapsed = Date.now() - Number(_t);
    if (!_t || elapsed < MIN_ELAPSED_MS) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.from("contact_leads").insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      suburb: suburb?.trim() || null,
      bedrooms: bedrooms || null,
      message: message?.trim() || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save your enquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

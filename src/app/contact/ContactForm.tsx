"use client";

import { useState, FormEvent, useRef } from "react";
import Button from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  bedrooms: string;
  message: string;
}

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  suburb: "",
  bedrooms: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // Honeypot field value — must stay empty for real users
  const [honeypot, setHoneypot] = useState("");
  // Track when the form was rendered so we can check submission timing
  const loadedAt = useRef<number>(Date.now());

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Client-side honeypot check — bail silently so bots get no feedback
    if (honeypot) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _hp: honeypot,
          _t: loadedAt.current,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Submission failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/10 transition";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-brand-cream rounded-2xl border border-gray-100">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
          Thanks — we&apos;ll be in touch!
        </h2>
        <p className="text-brand-slate max-w-md">
          One of our local Adelaide property managers will review your details and reach out
          within 48 business hours with a personalised income estimate.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="secondary"
          size="sm"
          className="mt-6"
        >
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/*
        Honeypot: visually hidden, never filled by real users.
        CSS hides it — not display:none, so basic bots still see it in the DOM.
      */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="website">Leave this blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="04XX XXX XXX"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="suburb" className="block text-sm font-semibold text-brand-navy mb-2">
            Property Suburb
          </label>
          <input
            id="suburb"
            name="suburb"
            type="text"
            value={form.suburb}
            onChange={handleChange}
            placeholder="e.g. Glenelg, Norwood"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bedrooms" className="block text-sm font-semibold text-brand-navy mb-2">
          Number of Bedrooms
        </label>
        <select
          id="bedrooms"
          name="bedrooms"
          value={form.bedrooms}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select bedrooms</option>
          <option value="Studio">Studio</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4+">4+ Bedrooms</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">
          Message / Questions
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your property or any questions you have..."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Estimate"}
      </Button>

      <p className="text-xs text-gray-400 text-center">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-brand-navy">
          Privacy Policy
        </a>
        . We never share your data.
      </p>
    </form>
  );
}

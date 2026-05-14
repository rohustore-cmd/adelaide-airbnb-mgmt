import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Adelaide Airbnb Management",
  description:
    "Full-service Airbnb management in Adelaide — dynamic pricing, professional cleaning, linen management, guest communication, owner dashboard, and maintenance coordination.",
  alternates: { canonical: "https://www.adelaidebnb.au/services" },
};

const included = [
  "Listing creation and optimisation on Airbnb & Booking.com",
  "Professional photography coordination",
  "Dynamic nightly pricing (adjusted daily)",
  "Full guest communication — pre-stay, during, and post-stay",
  "Professional cleaning after every guest",
  "Hotel-quality linen — washed, pressed, and restocked",
  "Guest review management and response",
  "Maintenance triage and coordination",
  "Live owner dashboard with real-time booking and income data",
  "Monthly payout with itemised statements",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Everything Your Property Needs, Handled
          </h1>
          <p className="text-gray-300 text-lg">
            Our management fee covers the complete service — no add-ons, no surprises. Just
            one simple percentage and full peace of mind.
          </p>
        </div>
      </section>

      <ServicesGrid />

      {/* What's included */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Everything Covered
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              What&apos;s Included in Your Management Fee
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-slate text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 text-center">
            <p className="text-brand-slate mb-2">Our management fee</p>
            <p className="font-display text-5xl font-bold text-brand-navy">
              15–20<span className="text-2xl">%</span>
            </p>
            <p className="text-sm text-brand-slate mt-2">
              of gross booking revenue &middot; No lock-in contracts &middot; Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

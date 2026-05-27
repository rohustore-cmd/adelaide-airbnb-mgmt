import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import { Users, Shield, BarChart3, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Adelaide Airbnb Management",
  description:
    "Meet the Adelaide team behind the city's most trusted Airbnb management company. Local expertise, full transparency, and a genuine passion for maximising your property's potential.",
  alternates: { canonical: "https://www.adelaidebnb.au/about" },
};

const values = [
  {
    icon: Shield,
    title: "Full Transparency",
    description:
      "Every booking, every dollar, every guest review — visible to you in real time. No hidden fees, no monthly mystery statements.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description:
      "We use real market data to price your property correctly every night. Not gut feel — actual competitor pricing and demand signals.",
  },
  {
    icon: Users,
    title: "Locally Owned",
    description:
      "We live and work in Adelaide. We know Glenelg performs differently to Prospect, and we price accordingly.",
  },
  {
    icon: Heart,
    title: "Genuinely Care",
    description:
      "Your property is someone's home. We treat it that way — with vetted cleaners, quality linen, and attentive guest care.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Adelaide&apos;s Most Trusted Property Management Team
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We started because we were frustrated owners ourselves. We knew Adelaide properties
            could earn significantly more with the right management — and we built the team to
            prove it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3 mb-6">
                Built by Adelaide Property Owners, for Adelaide Property Owners
              </h2>
              <div className="space-y-4 text-brand-slate leading-relaxed">
                <p>
                  We started managing our own short-term rentals in Adelaide and quickly
                  discovered how much time, expertise, and technology it takes to do it properly.
                  Flat-rate pricing left money on the table. Inconsistent cleaners left guests
                  unhappy. And there was no simple way to see what was happening with the
                  property at a glance.
                </p>
                <p>
                  So we built the solution we wished existed — a full-service management company
                  that treats every property like our own, backed by real pricing technology and
                  a cleaning network that consistently earns 5-star reviews.
                </p>
                <p>
                  Today we manage properties across greater Adelaide, from Glenelg to the
                  Adelaide Hills, and we&apos;re proud of every single one.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" size="md">
                  Work With Us
                </Button>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "Superhost", label: "Adelaide Airbnb since 2024" },
                { value: "34%", label: "Average revenue uplift for new owners" },
                { value: "4.9★", label: "Average owner satisfaction rating" },
                { value: "48h", label: "Average onboarding time from sign-up" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-cream rounded-2xl p-8 text-center border border-gray-100"
                >
                  <span className="font-display text-4xl font-bold text-brand-gold">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-brand-slate">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                      {v.title}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

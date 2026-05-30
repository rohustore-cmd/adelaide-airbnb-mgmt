import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { suburbs, getSuburb } from "@/lib/suburbs";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import { CheckCircle, TrendingUp, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ suburb: string }>;
}

export async function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) return {};

  return {
    title: `Airbnb Management ${suburb.name} | Adelaide BnB Management`,
    description: `Professional Airbnb and short-term rental management in ${suburb.name}, Adelaide. We handle cleaning, pricing, and guest communication. Get a free income estimate.`,
    alternates: {
      canonical: `https://adelaidebnb.au/airbnb-management-${suburb.slug}`,
    },
    openGraph: {
      title: `Airbnb Management ${suburb.name} | Adelaide BnB Management`,
      description: `Earn more from your ${suburb.name} property with professional Airbnb management. Dynamic pricing, professional cleaning, full owner transparency.`,
    },
  };
}

export default async function SuburbPage({ params }: PageProps) {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Adelaide BnB Management — ${suburb.name}`,
    description: `Professional Airbnb and short-term rental management in ${suburb.name}, Adelaide SA.`,
    url: `https://adelaidebnb.au/airbnb-management-${suburb.slug}`,
    email: "gh@adelaidebnb.au",
    areaServed: {
      "@type": "Place",
      name: `${suburb.name}, Adelaide, South Australia`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      addressCountry: "AU",
    },
    serviceType: "Airbnb Property Management",
    priceRange: "15–20% of booking revenue",
  };

  const otherSuburbs = suburbs.filter((s) => s.slug !== suburb.slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            {suburb.name}, Adelaide SA
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6 leading-tight">
            Airbnb Management in {suburb.name}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            {suburb.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" variant="gold">
              Get a Free {suburb.name} Income Estimate
            </Button>
            <Button
              href="/how-it-works"
              size="lg"
              variant="secondary"
              className="border-white/40 text-white hover:bg-white hover:text-brand-navy"
            >
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Market Summary */}
      <section className="bg-brand-gold/10 border-y border-brand-gold/30 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <p className="text-brand-navy text-base sm:text-lg font-medium leading-relaxed flex-1">
            <span className="font-bold text-brand-gold uppercase tracking-wide text-xs block mb-1">
              {suburb.name} Market Insight
            </span>
            {suburb.marketSummary}
          </p>
          <Button href="/contact" size="md" variant="gold" className="whitespace-nowrap flex-shrink-0">
            Get My Free Estimate
            <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </Button>
        </div>
      </section>

      {/* Earnings snapshot */}
      <section className="py-16 bg-brand-cream border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <TrendingUp className="w-8 h-8 text-brand-gold mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-brand-navy">
                {suburb.avgEarnings}
              </p>
              <p className="text-sm text-brand-slate mt-2">
                Estimated annual earnings
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <Star className="w-8 h-8 text-brand-gold mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-brand-navy">Superhost</p>
              <p className="text-sm text-brand-slate mt-2">Adelaide Airbnb since 2024</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <CheckCircle className="w-8 h-8 text-brand-gold mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-brand-navy">15–20%</p>
              <p className="text-sm text-brand-slate mt-2">
                Simple management fee, all-inclusive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this suburb */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                Why {suburb.name} Works for Short-Term Rentals
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3 mb-6">
                What Makes {suburb.name} a Strong Airbnb Market
              </h2>
              <p className="text-brand-slate leading-relaxed mb-6">
                {suburb.name} is home to {suburb.propertyTypes} that consistently attract
                guests with {suburb.demandNote}. Our local knowledge means we price your
                property correctly every night — capturing peak rates during high-demand
                periods and filling gaps with strategic discounts.
              </p>
              <ul className="space-y-3">
                {suburb.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-brand-slate text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="font-display text-2xl font-bold text-brand-navy">
                What We Handle in {suburb.name}
              </h3>
              {[
                "Dynamic pricing — adjusted daily to local demand",
                "Professional cleaning after every guest stay",
                "Hotel-quality linen management",
                "Guest communication — 24/7 response",
                "Listing optimisation on Airbnb & Booking.com",
                "Owner dashboard with real-time earnings data",
                "Maintenance coordination with local tradespeople",
                "Monthly payouts with itemised statements",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  </span>
                  <span className="text-brand-slate text-sm">{item}</span>
                </div>
              ))}
              <div className="pt-4">
                <Button href="/contact" size="md">
                  Get My Free {suburb.name} Estimate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Estimate CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Free, No-Obligation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            How Much Could Your {suburb.name} Property Earn?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get a personalised income estimate for your {suburb.name} property — we&apos;ll show
            you exactly what it could earn on Airbnb with professional management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="gold">
              Get My Free {suburb.name} Estimate
            </Button>
            <Button
              href="/how-it-works"
              size="lg"
              variant="secondary"
              className="border-white/40 text-white hover:bg-white hover:text-brand-navy"
            >
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Other suburbs */}
      <section className="py-16 bg-brand-cream border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-navy mb-8 text-center">
            We Also Manage Properties In
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherSuburbs.map((s) => (
              <Link
                key={s.slug}
                href={`/airbnb-management-${s.slug}`}
                className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-brand-gold hover:shadow-md transition-all text-sm font-semibold text-brand-navy hover:text-brand-gold"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

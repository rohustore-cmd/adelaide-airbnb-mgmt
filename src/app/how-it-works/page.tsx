import type { Metadata } from "next";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import OwnerDashboardTeaser from "@/components/sections/OwnerDashboardTeaser";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "How It Works | Adelaide Airbnb Management",
  description:
    "Three simple steps to professional Airbnb management in Adelaide. Free property assessment, seamless setup, then sit back and earn. No lock-in contracts.",
  alternates: { canonical: "https://www.adelaidebnb.au/how-it-works" },
};

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most properties are live within 48–72 hours of signing. We handle photography, listing setup, and pricing configuration before going live.",
  },
  {
    q: "Are there any lock-in contracts?",
    a: "No. We operate on a month-to-month basis. If you decide to pause or sell, you can exit with 30 days notice.",
  },
  {
    q: "How do I get paid?",
    a: "We process monthly payouts directly to your nominated bank account, with a full itemised statement of bookings, cleaning costs, and any maintenance.",
  },
  {
    q: "What happens if there's damage?",
    a: "We document the property condition before and after every stay with photos. Damage is claimed through Airbnb's AirCover protection. We coordinate the entire process.",
  },
  {
    q: "Can I still use my property myself?",
    a: "Yes. You can block off dates in the owner dashboard for personal use whenever you like. We just ask for 72 hours notice so any existing bookings can be managed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            From Assessment to Earnings in 3 Steps
          </h1>
          <p className="text-gray-300 text-lg">
            We&apos;ve streamlined our onboarding so Adelaide property owners can start earning
            more — fast. No complicated contracts, no learning curve.
          </p>
        </div>
      </section>

      <HowItWorksSection />
      <OwnerDashboardTeaser />

      {/* FAQ */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Common Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              Owner FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="font-display text-lg font-bold text-brand-navy mb-3">
                  {faq.q}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import { ClipboardCheck, Settings, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";

const steps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Free Property Assessment",
    description:
      "We visit your Adelaide property, run a comparative market analysis, and give you a clear income projection. No obligation, no pressure.",
  },
  {
    step: "02",
    icon: Settings,
    title: "We Handle the Setup",
    description:
      "We create or optimise your listing, photograph the property, configure dynamic pricing, and onboard your cleaning team — all before the first guest arrives.",
  },
  {
    step: "03",
    icon: DollarSign,
    title: "You Earn. We Manage.",
    description:
      "Sit back and watch the numbers in your live owner dashboard. Monthly payouts, transparent statements, and full booking visibility — always.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-brand-cream" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            The Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
            Up and Running in 3 Simple Steps
          </h2>
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
            We&apos;ve refined our onboarding to make it as effortless as possible for Adelaide
            property owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 bg-brand-gold/30 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
                  Step {step.step}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Book a Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}

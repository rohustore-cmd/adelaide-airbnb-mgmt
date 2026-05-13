import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
          Ready to Earn More?
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Get Your Free Adelaide Property Income Estimate
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          No obligation. No lock-in contracts. Just a clear picture of what your property
          could earn under professional management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg" variant="gold">
            Get a Free Estimate
          </Button>
          <Button
            href="/how-it-works"
            size="lg"
            variant="secondary"
            className="border-white/40 text-white hover:bg-white hover:text-brand-navy"
          >
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}

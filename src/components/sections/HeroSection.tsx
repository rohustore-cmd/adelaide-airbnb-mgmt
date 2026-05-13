import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #1B2B4B 0%, #2d4270 40%, #1B2B4B 100%)",
        }}
      />
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-brand-gold font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            Adelaide&apos;s #1 Rated Property Management Team
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Adelaide&apos;s Most Trusted{" "}
            <span className="text-brand-gold">Airbnb Management</span> Company
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            We handle everything — from cleaning to dynamic pricing — so you earn more
            without lifting a finger. Full transparency, real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" variant="gold">
              Get a Free Estimate
            </Button>
            <Button href="/how-it-works" size="lg" variant="secondary" className="border-white/50 text-white hover:bg-white hover:text-brand-navy">
              See How It Works
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-400">
            <div>
              <span className="block text-2xl font-bold text-white">200+</span>
              Properties Managed
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">34%</span>
              Avg Revenue Increase
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">4.9★</span>
              Owner Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L1440 80L1440 40C1200 80 900 0 720 20C540 40 240 80 0 40L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

import {
  TrendingUp,
  Sparkles,
  BedDouble,
  MessageSquare,
  LayoutDashboard,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description:
      "Our AI-powered engine adjusts your nightly rate in real time based on local events, competitor availability, and demand signals — maximising revenue every night.",
  },
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description:
      "Hotel-standard cleans between every stay, handled by our vetted cleaning team. Quality-checked before each guest arrival.",
  },
  {
    icon: BedDouble,
    title: "Linen Management",
    description:
      "Fresh, professionally laundered linen for every guest. We manage the full linen lifecycle so you never have to think about it.",
  },
  {
    icon: MessageSquare,
    title: "Guest Communication",
    description:
      "24/7 guest messaging, review responses, and check-in coordination. We maintain a fast response rate so your listing ranks higher.",
  },
  {
    icon: LayoutDashboard,
    title: "Owner Dashboard",
    description:
      "Real-time visibility into every booking, every dollar, and every occupancy metric — accessible from any device, any time.",
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description:
      "Issues flagged by guests are triaged and coordinated with trusted local tradespeople. You approve costs above the agreed threshold.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
            Everything Your Property Needs, Done for You
          </h2>
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
            From the moment a guest books to the moment they leave a five-star review, we
            handle every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-gold hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-5 group-hover:bg-brand-gold/10 transition-colors">
                  <Icon className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

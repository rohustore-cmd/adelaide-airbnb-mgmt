const stats = [
  { value: "34%", label: "Average Revenue Increase", sublabel: "vs fixed-rate pricing" },
  { value: "Superhost", label: "Adelaide Airbnb", sublabel: "recognised since 2024" },
  { value: "4.9★", label: "Owner Satisfaction", sublabel: "based on owner reviews" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-cream border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-5xl font-bold text-brand-navy">
                {stat.value}
              </span>
              <span className="mt-2 text-base font-semibold text-brand-navy">
                {stat.label}
              </span>
              <span className="mt-1 text-sm text-brand-slate">{stat.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

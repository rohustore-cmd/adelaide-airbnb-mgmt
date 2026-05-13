import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Glenelg",
    bedrooms: "2-bedroom apartment",
    rating: 5,
    text: "I was sceptical at first, but our income jumped by over 40% in the first two months. The team manages everything — I literally just check the dashboard once a week. Best decision I've made for this investment.",
  },
  {
    name: "James T.",
    suburb: "Norwood",
    bedrooms: "3-bedroom house",
    rating: 5,
    text: "After years of managing it myself and dealing with bad guests and cleaning nightmares, handing it over was a relief. The cleaning is hotel standard, the pricing is smart, and the monthly statements are crystal clear.",
  },
  {
    name: "Priya K.",
    suburb: "North Adelaide",
    bedrooms: "1-bedroom apartment",
    rating: 5,
    text: "The owner dashboard is genuinely impressive. I can see every booking, every payout, and what guests said — all in real time. I feel more in control than I did when I was managing it myself.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Owner Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
            What Adelaide Property Owners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-brand-cream rounded-2xl p-8 border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>

              <blockquote className="text-brand-slate text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-semibold text-brand-navy">{t.name}</p>
                <p className="text-xs text-brand-slate mt-1">
                  {t.bedrooms} &middot; {t.suburb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

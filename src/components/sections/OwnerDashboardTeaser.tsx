export default function OwnerDashboardTeaser() {
  const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const earnings = [3200, 4100, 3800, 5200, 4800, 6100];
  const maxEarning = Math.max(...earnings);

  return (
    <section className="py-20 bg-white" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Full Transparency
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3 mb-6">
              Your Property. Your Data. Your Dashboard.
            </h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Log in from any device and see exactly what&apos;s happening with your property in
              real time. Every booking, every payout, every guest review — nothing hidden.
            </p>
            <ul className="space-y-3 text-brand-slate text-sm">
              {[
                "Live earnings and occupancy metrics",
                "Month-by-month income chart",
                "Upcoming booking calendar",
                "Cleaning and maintenance log",
                "Monthly payout statements (PDF download)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard mockup */}
          <div className="bg-brand-navy rounded-3xl shadow-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Owner Dashboard
                </p>
                <h3 className="font-display text-lg font-bold mt-1">
                  Your Property Overview
                </h3>
              </div>
              <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                Live
              </span>
            </div>

            {/* Key metrics row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-gray-400">This Month</p>
                <p className="text-xl font-bold text-brand-gold mt-1">$6,100</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-gray-400">Occupancy</p>
                <p className="text-xl font-bold text-white mt-1">82%</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-gray-400">Avg/Night</p>
                <p className="text-xl font-bold text-white mt-1">$247</p>
              </div>
            </div>

            {/* Bar chart */}
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <p className="text-xs text-gray-400 mb-4">Monthly Earnings (last 6 months)</p>
              <div className="flex items-end gap-2 h-28">
                {earnings.map((val, idx) => (
                  <div
                    key={months[idx]}
                    className="flex flex-col items-center flex-1 gap-1"
                  >
                    <div
                      className="w-full rounded-t-md bg-brand-gold/70 hover:bg-brand-gold transition-colors"
                      style={{ height: `${(val / maxEarning) * 100}%` }}
                    />
                    <span className="text-xs text-gray-400">{months[idx]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking calendar mini */}
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-3">December Availability</p>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const isBooked = [1,2,3,4,7,8,9,14,15,16,17,21,22,23,24,25,26,27,28].includes(day);
                  const isBlocked = [5, 6].includes(day);
                  return (
                    <div
                      key={day}
                      className={`h-6 w-full rounded text-center text-xs flex items-center justify-center ${
                        isBooked
                          ? "bg-brand-gold/80 text-white"
                          : isBlocked
                          ? "bg-gray-600 text-gray-400"
                          : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 mt-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-brand-gold/80" /> Booked
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-white/10" /> Available
                </span>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              Real-time access. Your property, your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

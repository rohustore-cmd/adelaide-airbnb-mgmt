import Link from "next/link";
import { Share2, MessageCircle, Globe } from "lucide-react";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Blog", href: "/blog" },
      { label: "Free Estimate", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const serviceAreas = [
  { label: "Glenelg", href: "/airbnb-management-glenelg" },
  { label: "Norwood", href: "/airbnb-management-norwood" },
  { label: "Adelaide CBD", href: "/airbnb-management-adelaide-cbd" },
  { label: "North Adelaide", href: "/airbnb-management-north-adelaide" },
  { label: "Unley", href: "/airbnb-management-unley" },
  { label: "Prospect", href: "/airbnb-management-prospect" },
  { label: "Henley Beach", href: "/airbnb-management-henley-beach" },
  { label: "Adelaide Hills", href: "/airbnb-management-adelaide-hills" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-bold">
              Adelaide<span className="text-brand-gold">BnB</span>
            </span>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Adelaide&apos;s most trusted Airbnb and short-term rental management company.
              We handle everything so you earn more without lifting a finger.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>Adelaide, SA 5000, Australia</p>
              <p className="mt-1">ABN: 85 691 937 069</p>
            </div>
            {/* Social icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/share/18a7UdA323/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://www.instagram.com/bnb_managers_adelaide/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Company links */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Service areas — important for local SEO */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Adelaide Airbnb Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

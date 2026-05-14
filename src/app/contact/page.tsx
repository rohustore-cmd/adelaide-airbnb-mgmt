import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Estimate | Adelaide Airbnb Management",
  description:
    "Find out what your Adelaide property could earn under professional management. Free, no-obligation income estimate. Contact our team today.",
  alternates: { canonical: "https://www.adelaidebnb.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Get Your Free Property Estimate
          </h1>
          <p className="text-gray-300 text-lg">
            Tell us about your Adelaide property and we&apos;ll send you a detailed income
            projection — no obligation, no pressure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Location</p>
                      <p className="text-brand-slate text-sm mt-1">
                        Adelaide, SA 5000<br />South Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Phone</p>
                      <p className="text-brand-slate text-sm mt-1">+61 (0)4XX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Response Time</p>
                      <p className="text-brand-slate text-sm mt-1">
                        We respond to all enquiries within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-cream rounded-2xl p-6 border border-gray-100">
                <p className="font-semibold text-brand-navy mb-2">What happens next?</p>
                <ol className="space-y-2 text-sm text-brand-slate list-decimal list-inside">
                  <li>We review your property details</li>
                  <li>We prepare a custom income estimate</li>
                  <li>A local Adelaide manager calls you within 24 hours</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

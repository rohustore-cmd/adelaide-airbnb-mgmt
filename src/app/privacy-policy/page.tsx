import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Adelaide Airbnb Management",
  description: "Privacy policy for Adelaide Airbnb Management.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-brand-navy mb-4">Privacy Policy</h1>
        <p className="text-sm text-brand-slate mb-10">Last updated: January 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-brand-slate">
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly, including your name, email address,
              phone number, property suburb, and any message you send via our contact form. We
              may also collect analytics data about how you use our website (page views,
              referral sources) via privacy-friendly analytics tools.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Respond to your enquiry and provide income estimates</li>
              <li>Contact you about our services</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
              3. Data Storage and Security
            </h2>
            <p>
              Your data is stored securely using Supabase, a cloud database provider with
              enterprise-grade security. We implement row-level security to ensure your data
              is accessible only to authorised personnel. We do not sell, rent, or share your
              personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
              4. Your Rights
            </h2>
            <p>
              Under Australian Privacy Act 1988, you have the right to access, correct, or
              delete your personal information. To exercise these rights, contact us at the
              details below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
              5. Cookies
            </h2>
            <p>
              Our website may use cookies for analytics and to improve your browsing
              experience. You can disable cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
              6. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{" "}
              <a
                href="mailto:hello@adelaidebnb.au"
                className="text-brand-gold hover:underline"
              >
                hello@adelaidebnb.au
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

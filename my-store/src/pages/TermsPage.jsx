export default function TermsPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-5">
            Terms & Conditions
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Terms of Use
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            By accessing and using this website, you agree to the following
            terms and conditions. Please read them carefully.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Website Purpose
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This website is designed to showcase products from our brands and
            help customers discover items that are available for purchase
            through Amazon.
          </p>
        </div>
      </section>

      {/* Main Terms */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Use */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Use of Website</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              You may browse and use this website for personal, lawful, and
              non-commercial purposes only.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Misuse, unauthorized access, or harmful activity is prohibited.
            </p>
          </div>

          {/* Product Info */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Product Information</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We aim to keep product descriptions, images, and information
              accurate and updated.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Final pricing, stock availability, delivery timelines, and full
              product details are determined on Amazon.
            </p>
          </div>

          {/* Purchases */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Purchases Through Amazon</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              When you click a product link, you may be redirected to Amazon to
              complete your purchase.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Payments, shipping, returns, refunds, and customer order handling
              are managed directly by Amazon under their own policies.
            </p>
          </div>

          {/* Liability */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Liability</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We are not responsible for third-party transactions, delivery
              delays, cancellations, or issues arising after purchase through
              Amazon or other external platforms.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Intellectual Property</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Website content including branding, logos, text, graphics, and
              design elements may not be copied or reused without permission.
            </p>
          </div>

          {/* Changes */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Changes to Terms</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We may update these Terms & Conditions at any time without prior
              notice. Continued use of the website means acceptance of updated
              terms.
            </p>
          </div>
        </div>
      </section>

      {/* Fair Use */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-4">
            Fair Use
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Respectful & Responsible Access
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We ask all visitors to use this website responsibly and in
            accordance with applicable laws and respectful online conduct.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-4">
            Questions?
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Contact Our Team
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            If you have questions regarding these Terms & Conditions, feel free
            to contact us.
          </p>

          <a
            href="mailto:support@rgrglobalstore.com"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            support@rgrglobalstore.com
          </a>
        </div>
      </section>
    </div>
  );
}
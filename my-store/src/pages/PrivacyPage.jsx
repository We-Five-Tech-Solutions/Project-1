export default function PrivacyPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-5">
            Privacy Policy
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Privacy & Transparency
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            Your privacy matters to us. We are committed to keeping this website
            simple, secure, and transparent for every visitor.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Commitment to Privacy
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We do not sell or misuse personal information. This website is
            created to showcase our products and help customers discover items
            that are available for purchase through Amazon.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Information */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Information We Collect</h3>

            <ul className="mt-5 space-y-3 text-gray-600 leading-relaxed">
              <li>• Basic website visit statistics</li>
              <li>• Pages viewed on our website</li>
              <li>• Information voluntarily shared through email</li>
            </ul>
          </div>

          {/* Usage */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">How We Use Information</h3>

            <ul className="mt-5 space-y-3 text-gray-600 leading-relaxed">
              <li>• Improve website usability and content</li>
              <li>• Respond to support enquiries</li>
              <li>• Maintain performance and reliability</li>
            </ul>
          </div>

          {/* Amazon */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Purchases Through Amazon</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Products shown on this website redirect to Amazon for purchase.
              Payments, shipping, returns, delivery, and order management are
              handled directly by Amazon.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Once redirected, Amazon’s own Privacy Policy and Terms apply.
            </p>
          </div>

          {/* Cookies */}
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Cookies</h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              This website may use basic cookies required for smooth browsing
              and standard functionality.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              You can manage cookies anytime through your browser settings.
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-4">
            Security
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Safe & Responsible
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We aim to maintain a secure and reliable website environment using
            reasonable technical measures and responsible practices.
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
            If you have any questions regarding this Privacy Policy, please
            contact us anytime.
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
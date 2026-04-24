export default function ContactPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-5">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            We’re Here to Help
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            Questions about our products, brand, or website? Reach out anytime
            and our team will be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Email */}
          <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-5">✉️</div>

            <h3 className="text-2xl font-semibold">Customer Support</h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              For product questions, website assistance, or general enquiries.
            </p>

            <a
              href="mailto:support@rgrglobalstore.com"
              className="inline-block mt-5 font-medium text-black underline underline-offset-4"
            >
              support@rgrglobalstore.com
            </a>
          </div>

          {/* Amazon Orders */}
          <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-5">📦</div>

            <h3 className="text-2xl font-semibold">Orders & Delivery</h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              Products featured on this website redirect to Amazon for purchase.
              For shipping, tracking, returns, or refunds, please contact Amazon
              customer support directly.
            </p>
          </div>

          {/* Product Info */}
          <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-5">⭐</div>

            <h3 className="text-2xl font-semibold">Product Information</h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              Need help choosing the right product or learning more about our
              brands? Email us and we’ll guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-4">
              How This Website Works
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Discover Here. Buy Securely on Amazon.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our website showcases products from our brands and helps you
              explore collections easily. When you choose a product, you’ll be
              redirected to Amazon to complete your purchase securely.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Trusted Amazon Checkout",
              "Genuine Brand Products",
              "Easy Product Discovery",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-4">
            Need Help?
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Contact Our Team
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            We’re available for any questions related to our products, website,
            or brands.
          </p>

          <a
            href="mailto:support@rgrglobalstore.com"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Email Support
          </a>
        </div>
      </section>
    </div>
  );
}

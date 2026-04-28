export default function ContactPage() {
  const cards = [
    {
      icon: "✉️",
      title: "Customer Support",
      text: "For product questions, website assistance, or general enquiries.",
      link: "support@rgrglobalstore.com",
    },
    {
      icon: "📦",
      title: "Orders & Delivery",
      text: "Products featured on this website redirect to Amazon for purchase. For shipping, tracking, returns, or refunds, please contact Amazon customer support directly.",
    },
    {
      icon: "⭐",
      title: "Product Information",
      text: "Need help choosing the right product or learning more about our brands? Email us and we’ll guide you.",
    },
  ];

  const features = [
    "Trusted Amazon Checkout",
    "Genuine Brand Products",
    "Easy Product Discovery",
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-5">
            Contact Us
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            We’re Here to Help
          </h1>

          <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-1 sm:px-0">
            Questions about our products, brand, or website? Reach out anytime
            and our team will be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>

              {item.link && (
                <a
                  href={`mailto:${item.link}`}
                  className="inline-block mt-5 text-sm sm:text-base font-medium text-black underline underline-offset-4 break-all"
                >
                  {item.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-500 mb-4">
              How This Website Works
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Discover Here. Buy Securely on Amazon.
            </h2>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              Our website showcases products from our brands and helps you
              explore collections easily. When you choose a product, you’ll be
              redirected to Amazon to complete your purchase securely.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 text-center text-sm sm:text-base font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 text-center">
          <p className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-500 mb-4">
            Need Help?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Contact Our Team
          </h2>

          <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
            We’re available for any questions related to our products, website,
            or brands.
          </p>

          <a
            href="mailto:support@rgrglobalstore.com"
            className="inline-flex items-center justify-center mt-8 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black text-white text-sm sm:text-base font-semibold hover:bg-gray-800 transition w-full sm:w-auto"
          >
            Email Support
          </a>
        </div>
      </section>
    </div>
  );
}
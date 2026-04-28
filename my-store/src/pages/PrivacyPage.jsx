export default function TermsPage() {
  const terms = [
    {
      title: "Use of Website",
      text1:
        "You may browse and use this website for personal, lawful, and non-commercial purposes only.",
      text2:
        "Misuse, unauthorized access, or harmful activity is prohibited.",
    },
    {
      title: "Product Information",
      text1:
        "We aim to keep product descriptions, images, and information accurate and updated.",
      text2:
        "Final pricing, stock availability, delivery timelines, and full product details are determined on Amazon.",
    },
    {
      title: "Purchases Through Amazon",
      text1:
        "When you click a product link, you may be redirected to Amazon to complete your purchase.",
      text2:
        "Payments, shipping, returns, refunds, and customer order handling are managed directly by Amazon under their own policies.",
    },
    {
      title: "Liability",
      text1:
        "We are not responsible for third-party transactions, delivery delays, cancellations, or issues arising after purchase through Amazon or other external platforms.",
    },
    {
      title: "Intellectual Property",
      text1:
        "Website content including branding, logos, text, graphics, and design elements may not be copied or reused without permission.",
    },
    {
      title: "Changes to Terms",
      text1:
        "We may update these Terms & Conditions at any time without prior notice. Continued use of the website means acceptance of updated terms.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-5">
            Terms & Conditions
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Terms of Use
          </h1>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-1 sm:px-0">
            By accessing and using this website, you agree to the following
            terms and conditions. Please read them carefully.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20">
        <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Website Purpose</h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            This website is designed to showcase products from our brands and
            help customers discover items that are available for purchase
            through Amazon.
          </p>
        </div>
      </section>

      {/* Main Terms */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pb-14 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {terms.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.text1}
              </p>

              {item.text2 && (
                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.text2}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fair Use */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24 text-center">
          <p className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-500 mb-4">
            Fair Use
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Respectful & Responsible Access
          </h2>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
            We ask all visitors to use this website responsibly and in
            accordance with applicable laws and respectful online conduct.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 text-center">
          <p className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-500 mb-4">
            Questions?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Contact Our Team
          </h2>

          <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
            If you have questions regarding these Terms & Conditions, feel free
            to contact us.
          </p>

          <a
            href="mailto:support@rgrglobalstore.com"
            className="inline-flex items-center justify-center mt-8 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black text-white text-sm sm:text-base font-semibold hover:bg-gray-800 transition w-full sm:w-auto break-all"
          >
            support@rgrglobalstore.com
          </a>
        </div>
      </section>
    </div>
  );
}
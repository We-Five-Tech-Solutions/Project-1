import StaticPageLayout from "@/components/ui/StaticPageLayout";
import Section from "@/components/ui/Section";

export default function AboutPage() {
  const brands = [
    [
      "🏋️",
      "Bodylastics",
      "Strength and training gear designed for progress.",
    ],
    [
      "⚡",
      "Fitlastics",
      "Mobility and resistance products for evnpm eryday movement.",
    ],
    [
      "🐾",
      "Petology",
      "Pet care essentials focused on comfort and safety.",
    ],
  ];

  const values = [
    "✔ Reliable Quality",
    "✨ Clean Design",
    "🤝 Customer Trust",
    "🎯 Functional Purpose",
  ];

  const philosophy = [
    "Designed with intention",
    "Tested for everyday use",
    "Built to last longer",
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-5">
            About Us
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            Built Around Better Products
          </h1>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
            We are a multi-brand company built on a clear principle—creating
            products that are considered, reliable, and made to last.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {brands.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">{item[0]}</div>

              <h3 className="text-xl sm:text-2xl font-semibold">{item[1]}</h3>

              <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                {item[2]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Standard */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              One Standard.
              <br />
              Three Distinct Brands.
            </h2>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              While each brand serves a different space, they are united by a
              single standard—attention to detail, functional design, and
              uncompromising quality.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We believe good products do not need excess. They need to work
              well, feel right, and earn their place over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {values.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-200 p-5 sm:p-6 text-center font-medium text-sm sm:text-base shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
  <div className="text-center max-w-2xl mx-auto">
    <p className="uppercase text-[10px] tracking-[0.25em] text-gray-500 mb-3">
      Our Philosophy
    </p>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
      Designed for Real Life
    </h2>

    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
      Good products should solve real needs, feel intuitive in use, and
      remain dependable over time.
    </p>
  </div>

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {philosophy.map((item, i) => (
      <div
        key={i}
        className="rounded-2xl bg-black text-white p-5 min-h-[90px] flex flex-col justify-between"
      >
        <div className="text-[11px] text-gray-400">
          0{i + 1}
        </div>

        <h3 className="text-lg sm:text-xl font-semibold leading-snug">
          {item}
        </h3>
      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 text-center">
          <p className="uppercase text-[10px] sm:text-xs tracking-[0.28em] sm:tracking-[0.35em] text-gray-500 mb-4">
            Growing with Purpose
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Products You Can Trust
          </h2>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
            As we expand, our commitment remains unchanged: create honest
            products people trust, recommend, and rely on.
          </p>

          <a
            href="/collections/all"
            className="inline-flex items-center justify-center mt-8 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black text-white text-sm sm:text-base font-semibold hover:bg-gray-800 transition w-full sm:w-auto"
          >
            Shop Our Collection
          </a>
        </div>
      </section>
    </div>
  );
}
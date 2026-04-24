import { Link } from "react-router-dom";

export default function HeroBanner() {
return (
  <section className="relative w-full h-[420px] md:h-[560px] overflow-hidden bg-white text-black">
  
    
    {/* Subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

    {/* Soft glow accents */}
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.05),transparent_50%)]" />
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.05),transparent_50%)]" />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
      
      {/* Top label */}
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
        Petology • Fitlastics • Bodylastics
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-6">
        Everything You Need for Pets & Performance
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 max-w-xl mb-8">
        Premium pet care, grooming essentials, and high-performance fitness gear — all in one place.
      </p>

      {/* CTA */}
      <Link
        to="/collections/all"
        className="bg-black text-white px-8 py-3 text-sm font-semibold rounded hover:bg-gray-800 transition"
      >
        Explore Collection
      </Link>
    </div>
  </section>
);
}
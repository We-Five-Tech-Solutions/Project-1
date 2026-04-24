// Professional Ecommerce Category Grid
import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useProducts";

export default function CategoryGrid() {
  const categories = useCategories();

  return (
    <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
          Shop by Category
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Explore our curated collections
        </p>
      </div>

      {/* Centered Row Layout */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/collections/${cat.slug}`}
            className="group flex flex-col items-center text-center"
          >
            {/* Circle Image */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-full" />
              )}
            </div>

            {/* Label */}
            {/**
              <span className="mt-3 text-sm md:text-base font-medium text-gray-800 group-hover:text-black transition">
              {cat.name}
            </span>
              */}
          </Link>
        ))}
      </div>
    </section>
  );
}

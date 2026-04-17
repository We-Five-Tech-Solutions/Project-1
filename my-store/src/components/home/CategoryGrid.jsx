// Horizontal row of circular category icons with labels — "Shop by Category"
import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useProducts";

export default function CategoryGrid() {
  const categories = useCategories();

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center tracking-tighter mb-8">
        Shop by Category
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/collections/${cat.slug}`}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>

              {/* Label */}
              <span className="mt-3 text-xs md:text-sm font-medium text-gray-700 group-hover:text-black transition text-center">
                {cat.name}
              </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Horizontal row of circular category icons with labels — "Shop by Category"
import { Link } from 'react-router-dom'
import { useCategories } from '@/hooks/useProducts'

export default function CategoryGrid() {
  const categories = useCategories()

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Shop by <span className="font-extrabold">category.</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/collections/${cat.slug}`}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-black transition-all duration-200 bg-gray-100">
              {cat.image
                ? <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                : <div className="w-full h-full bg-gray-200" />
              }
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-black transition-colors">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

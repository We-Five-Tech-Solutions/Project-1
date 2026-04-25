import ProductGrid from '@/components/product/ProductGrid'
import { useProducts } from '@/hooks/useProducts'
import { Link } from 'react-router-dom'

export default function FeaturedProducts() {
  const { data: products = [] } = useProducts()
  const featured = products
    .filter((p) => p.badge === "Best seller")
    .slice(0, 8)

  if (!featured.length) return null

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
            Featured
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Best Sellers
          </h2>
        </div>

        <Link
          to="/collections/all"
          className="text-sm font-medium underline underline-offset-4 hover:text-gray-600 transition"
        >
          View all
        </Link>
      </div>

      {/* Grid */}
      <ProductGrid products={featured} />
    </section>
  )
}
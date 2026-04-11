// "Best sellers" product grid on homepage — shows first 8 products
import ProductGrid from '@/components/product/ProductGrid'
import { useProducts } from '@/hooks/useProducts'
import { Link } from 'react-router-dom'

export default function FeaturedProducts() {
  const { data: products = [] } = useProducts()
  const featured = products.slice(0, 8)

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Best sellers</h2>
        <Link to="/collections/all" className="text-sm underline underline-offset-2 hover:text-gray-600">
          View all
        </Link>
      </div>
      <ProductGrid products={featured} />
    </section>
  )
}

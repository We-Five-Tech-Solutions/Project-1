import ProductCard from './ProductCard'
import EmptyState from '@/components/ui/EmptyState'

export default function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return <EmptyState title="No products found" message="Try adjusting your filters." />
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}


// Horizontal scroll row of related products shown at bottom of ProductPage
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

export default function RelatedProducts({ products = [] }) {
  if (!products.length) return null

  return (
    <section className="py-10">
      <h2 className="text-xl font-bold mb-4">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

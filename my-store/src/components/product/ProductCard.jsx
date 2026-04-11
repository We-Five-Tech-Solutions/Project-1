// Single product tile used in grids and carousels
// Shows: image, name, price, discount badge, quick-add on hover
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '@/store/cartStore'
import { formatPrice, discountPercent } from '@/utils/formatPrice'
import ProductBadge from './ProductBadge'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  const discount = product.originalPrice
    ? discountPercent(product.originalPrice, product.price)
    : null

  return (
    <div
      className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.images?.[0] || '/placeholder.jpg'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && <ProductBadge label={`-${discount}%`} color="green" />}
        {product.badge && <ProductBadge label={product.badge} color="black" position="top-left" />}
      </Link>

      {/* Info */}
      <div className="p-3">
        <Link to={`/products/${product.id}`}>
          <p className="text-sm font-medium text-gray-900 truncate hover:text-black">{product.name}</p>
        </Link>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-sm font-bold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Quick add button — visible on hover */}
        <button
          onClick={() => addItem(product)}
          className={`mt-2 w-full py-2 text-xs font-medium border border-gray-900 rounded transition-all duration-200 ${
            hovered ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          + Add to cart
        </button>
      </div>
    </div>
  )
}

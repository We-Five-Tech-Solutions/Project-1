import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice, discountPercent } from '@/utils/formatPrice'
import ProductBadge from './ProductBadge'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)

  const discount = product.originalPrice
    ? discountPercent(product.originalPrice, product.price)
    : null

  const handleRedirectToAmazon = () => {
    if (!product?.amazonLink) {
      alert('Amazon link is not available for this product.')
      return
    }
    window.open(product.amazonLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        className="block relative h-64 overflow-hidden flex items-center justify-center bg-white"
      >
        <img
          src={product.images?.[0] || '/placeholder.jpg'}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

        {/* Badges */}
        {discount && (
          <ProductBadge label={`-${discount}%`} color="green" />
        )}
        {product.badge && (
          <ProductBadge
            label={product.badge}
            color="black"
            position="top-left"
          />
        )}
      </Link>

      {/* Info */}
      <div className="p-4 space-y-2 flex flex-col flex-grow">
        <Link to={`/products/${product.id}`}>
          <p className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[40px] group-hover:text-black transition">
            {product.name}
          </p>
        </Link>

        {/* Bottom section */}
        <div className="mt-auto">
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-black">
              {formatPrice(product.price)}
            </span>

            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            onClick={handleRedirectToAmazon}
            className={`
              mt-3 w-full py-2.5 text-xs font-semibold tracking-wide rounded-lg transition-all duration-300
              ${
                hovered
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-gray-300 hover:border-black'
              }   
            `}
          >
            Buy on Amazon
          </button>
        </div>
      </div>
    </div>
  )
} 
// /products/:id — full product detail view
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '@/hooks/useProducts'
import { useCartStore } from '@/store/cartStore'
import { useUIStore } from '@/store/uiStore'
import ProductGallery from '@/components/product/ProductGallery'
import SizeSelector from '@/components/product/SizeSelector'
import ColorSelector from '@/components/product/ColorSelector'
import QuantityInput from '@/components/product/QuantityInput'
import RelatedProducts from '@/components/product/RelatedProducts'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Spinner from '@/components/ui/Spinner'
import { formatPrice } from '@/utils/formatPrice'

export default function ProductPage() {
  const { id } = useParams()
  const { data: product, isLoading } = useProduct(id)
  const addItem = useCartStore((s) => s.addItem)
  const openCart = useUIStore((s) => s.openCart)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [qty, setQty] = useState(1)

  if (isLoading) return <Spinner />
  if (!product) return <p className="p-8 text-center text-gray-500">Product not found.</p>

  const handleAddToCart = () => {
    addItem({ ...product, selectedSize, selectedColor, qty })
    openCart()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[
        { label: product.category, href: `/collections/${product.category}` },
        { label: product.name }
      ]} />

      <div className="grid md:grid-cols-2 gap-10">
        <ProductGallery images={product.images} />

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {product.colors?.length > 0 && (
            <div className="mb-4">
              <ColorSelector colors={product.colors} selected={selectedColor} onChange={setSelectedColor} />
            </div>
          )}

          {product.sizes?.length > 0 && (
            <div className="mb-6">
              <SizeSelector sizes={product.sizes} selected={selectedSize} onChange={setSelectedSize} />
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            <QuantityInput value={qty} onChange={setQty} />
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-900 transition-colors"
          >
            Add to cart — {formatPrice(product.price * qty)}
          </button>

          {product.description && (
            <div className="mt-8 prose prose-sm text-gray-600">
              <h3 className="font-semibold text-black text-sm mb-2">Product details</h3>
              <p>{product.description}</p>
            </div>
          )}
        </div>
      </div>

      <RelatedProducts products={product.related} />
    </div>
  )
}

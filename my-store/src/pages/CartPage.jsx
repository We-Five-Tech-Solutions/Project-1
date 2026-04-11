// Full /cart page — mirrors CartDrawer but as a full-page layout
import { Link } from 'react-router-dom'
import { useCartStore } from '@/store/cartStore'
import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'

export default function CartPage() {
  const items = useCartStore((s) => s.items)

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 text-sm mb-6">Add some products to get started.</p>
        <Link to="/collections/all" className="bg-black text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-gray-900 transition-colors">
          Shop now
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8">Your cart</h1>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 h-fit">
          <CartSummary />
          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

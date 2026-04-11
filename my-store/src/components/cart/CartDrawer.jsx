// Slide-in cart panel from the right side
import { useUIStore } from '@/store/uiStore'
import { useCartStore } from '@/store/cartStore'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const closeCart = useUIStore((s) => s.closeCart)
  const items = useCartStore((s) => s.items)

  return (
    <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="font-bold text-lg">Your cart ({items.length})</h2>
        <button onClick={closeCart} className="text-xl text-gray-500 hover:text-black p-1">✕</button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {items.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🛒</p>
            <p className="text-sm">Your cart is empty</p>
            <button onClick={closeCart} className="mt-4 text-sm underline text-black">
              Continue shopping
            </button>
          </div>
        ) : (
          items.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>

      {/* Summary + CTA */}
      {items.length > 0 && (
        <div className="border-t border-gray-100 px-6 py-4">
          <CartSummary />
          <Link
            to="/cart"
            onClick={closeCart}
            className="mt-4 block w-full bg-black text-white text-center py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  )
}

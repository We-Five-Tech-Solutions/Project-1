// Price breakdown: subtotal, discount, total shown in cart drawer and page
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/utils/formatPrice'

export default function CartSummary() {
  const items = useCartStore((s) => s.items)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const savings  = items.reduce((sum, i) =>
    i.originalPrice ? sum + (i.originalPrice - i.price) * i.qty : sum, 0)

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      {savings > 0 && (
        <div className="flex justify-between text-sm text-green-600">
          <span>You save</span>
          <span>−{formatPrice(savings)}</span>
        </div>
      )}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Delivery</span>
        <span>{subtotal >= 599 ? 'Free' : formatPrice(99)}</span>
      </div>
      <div className="flex justify-between font-bold text-base border-t border-gray-100 pt-2">
        <span>Total</span>
        <span>{formatPrice(subtotal >= 599 ? subtotal : subtotal + 99)}</span>
      </div>
    </div>
  )
}

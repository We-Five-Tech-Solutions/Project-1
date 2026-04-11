// Single line item row inside the CartDrawer and CartPage
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/utils/formatPrice'
import QuantityInput from '@/components/product/QuantityInput'

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCartStore()

  return (
    <div className="flex gap-4">
      <img
        src={item.images?.[0] || '/placeholder.jpg'}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg bg-gray-50 shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{item.name}</p>
        {item.selectedSize && (
          <p className="text-xs text-gray-500 mt-0.5">Size: {item.selectedSize}</p>
        )}
        {item.selectedColor && (
          <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
        )}
        <div className="flex items-center justify-between mt-2">
          <QuantityInput
            value={item.qty}
            onChange={(qty) => updateQty(item.id, qty)}
          />
          <div className="text-right">
            <p className="text-sm font-bold">{formatPrice(item.price * item.qty)}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

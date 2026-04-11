// Convenience hook wrapping cartStore — use this in components
import { useCartStore } from '@/store/cartStore'

export function useCart() {
  const items     = useCartStore((s) => s.items)
  const addItem   = useCartStore((s) => s.addItem)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQty  = useCartStore((s) => s.updateQty)
  const clearCart  = useCartStore((s) => s.clearCart)

  const totalItems   = items.reduce((a, i) => a + i.qty, 0)
  const totalPrice   = items.reduce((a, i) => a + i.price * i.qty, 0)

  return { items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }
}

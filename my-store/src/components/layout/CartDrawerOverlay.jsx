// Transparent overlay behind CartDrawer — clicking it closes the drawer
import { useUIStore } from '@/store/uiStore'
import CartDrawer from '@/components/cart/CartDrawer'

export default function CartDrawerOverlay() {
  const { cartOpen, closeCart } = useUIStore()

  if (!cartOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={closeCart}
      />
      <CartDrawer />
    </>
  )
}

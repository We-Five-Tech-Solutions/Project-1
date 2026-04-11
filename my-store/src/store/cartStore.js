import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((s) => {
          const key = `${product.id}-${product.selectedSize}-${product.selectedColor}`
          const exists = s.items.find((i) => i._key === key)
          if (exists) {
            return {
              items: s.items.map((i) =>
                i._key === key ? { ...i, qty: i.qty + (product.qty ?? 1) } : i
              ),
            }
          }
          return { items: [...s.items, { ...product, _key: key, qty: product.qty ?? 1 }] }
        }),

      updateQty: (id, qty) =>
        set((s) => ({
          items: qty <= 0
            ? s.items.filter((i) => i.id !== id)
            : s.items.map((i) => (i.id === id ? { ...i, qty } : i)),
        })),

      removeItem: (id) =>
        set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

      clearCart: () => set({ items: [] }),
    }),
    { name: 'cart-storage' }
  )
)

import { create } from 'zustand'

export const useUIStore = create((set) => ({
  cartOpen: false,
  openCart:  () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),

  mobileMenuOpen: false,
  openMobileMenu:  () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}))

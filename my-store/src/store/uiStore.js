import { create } from 'zustand'

// Minimal UI state — only mobile menu (cart removed)
export const useUIStore = create((set) => ({
  mobileMenuOpen: false,
  openMobileMenu:  () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}))
import { create } from 'zustand'

const defaults = {
  category: null,
  maxPrice: 5000,
  color: null,
  size: null,
  sortBy: 'featured',
}

export const useFilterStore = create((set) => ({
  filters: { ...defaults },

  setFilter: (key, value) =>
    set((s) => ({ filters: { ...s.filters, [key]: value } })),

  resetFilters: () => set({ filters: { ...defaults } }),
}))

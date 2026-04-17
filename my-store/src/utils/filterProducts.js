// Pure function version of product filtering — useful for testing
export function filterProducts(products, filters) {
  return products
    .filter((p) => !filters.category || p.category === filters.category)
    .filter((p) => !filters.maxPrice  || p.price <= filters.maxPrice)
    .filter((p) => !filters.color || p.colors?.some((c) => c.name === filters.color))
    .sort((a, b) => {
      if (filters.sortBy === 'price_asc')  return a.price - b.price
      if (filters.sortBy === 'price_desc') return b.price - a.price
      return 0
    })
}

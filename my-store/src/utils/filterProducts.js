export function filterProducts(products, filters) {
  // clone array first
  let filtered = [...products];

  // filters
  filtered = filtered.filter(
    (p) => !filters.category || p.category === filters.category
  );

  filtered = filtered.filter(
    (p) => !filters.maxPrice || Number(p.price) <= Number(filters.maxPrice)
  );

  filtered = filtered.filter(
    (p) =>
      !filters.color ||
      p.colors?.some((c) =>
        typeof c === "string"
          ? c.toLowerCase() === filters.color.toLowerCase()
          : c.name?.toLowerCase() === filters.color.toLowerCase()
      )
  );

  // sorting happens BEFORE pagination/render
  filtered.sort((a, b) => {
    if (filters.sortBy === "price_desc") {
      return Number(b.price) - Number(a.price);
    }

    // default lower to higher
    return Number(a.price) - Number(b.price);
  });

  return filtered;
}
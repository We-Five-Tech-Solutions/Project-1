// Format a number as Indian Rupees: 1299 → "₹1,299"
export function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Calculate discount percentage: (1999, 1299) → 35
export function discountPercent(original, sale) {
  if (!original || original <= sale) return null
  return Math.round(((original - sale) / original) * 100)
}

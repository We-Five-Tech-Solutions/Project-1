// Reusable button — variants: primary (black), outline, ghost
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl transition-all active:scale-[0.98]'
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900',
    outline: 'border border-black text-black hover:bg-black hover:text-white',
    ghost:   'text-black hover:bg-gray-100',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

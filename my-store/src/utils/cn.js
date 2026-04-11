// Lightweight classname helper — merges class strings, ignores falsy values
// Usage: cn('base', condition && 'extra', 'other')
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

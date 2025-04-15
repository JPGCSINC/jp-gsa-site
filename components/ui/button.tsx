export function Button({ children, variant, className }: any) {
  const base = variant === 'outline'
    ? 'border bg-transparent'
    : 'bg-blue-600 text-white';
  return <button className={`px-4 py-2 rounded ${base} ${className}`}>{children}</button>;
}

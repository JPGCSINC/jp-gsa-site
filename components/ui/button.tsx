export function Button({ children, variant }: any) {
  return (
    <button className={`px-4 py-2 rounded ${variant === 'outline' ? 'border' : 'bg-blue-600 text-white'}`}>
      {children}
    </button>
  );
}

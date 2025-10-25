export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-xl bg-teal-400 px-4 py-2 font-medium text-black hover:bg-teal-300 transition ${className}`}
    >
      {children}
    </button>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-[#121738] border border-[#273057] rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`text-gray-300 ${className}`}>{children}</div>
  );
}

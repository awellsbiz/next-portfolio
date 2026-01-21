export default function LayoutColumn({ children, className = '', ...props }) {
  return (
    <div className={`md:col-span-1 space-y-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

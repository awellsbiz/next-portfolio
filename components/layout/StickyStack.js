export default function StickyStack({ children, className = '', ...props }) {
  return (
    <div
      className={`flex flex-col ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

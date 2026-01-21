export default function StickyStack({ children, className = '', ...props }) {
  return (
    <div
      className={`md:sticky md:top-0 flex flex-col ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

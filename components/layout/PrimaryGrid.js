export default function PrimaryGrid({
  as: Component = 'div',
  children,
  className = '',
  ...props
}) {
  return (
    <Component
      className={`md:grid md:grid-cols-3 gap-4 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

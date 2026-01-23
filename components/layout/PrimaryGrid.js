export default function PrimaryGrid({
  as: Component = 'div',
  children,
  className = '',
  ...props
}) {
  return (
    <Component
      className={`md:grid md:grid-cols-4 gap-[var(--grid-gap)] ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

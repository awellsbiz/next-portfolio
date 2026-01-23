export default function Card({
  as: Component = 'div',
  children,
  className = '',
  ...props
}) {
  return (
    <Component
      className={`bg-[var(--surface-card)] shadow-[var(--shadow-inset-1)] rounded-[var(--radius-card)] p-[var(--space-card-padding)] ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

import Card from '../Card';

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Postgres',
];

export default function StackCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Stack</h2>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-2 py-1 text-xs text-[var(--text-secondary)]"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}

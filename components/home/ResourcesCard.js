import Card from '../Card';

const resources = [
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Process notes', href: '#process' },
  { label: 'Client references', href: '#references' },
];

export default function ResourcesCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-4 bg-[var(--surface-utility)] ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Resources</h2>
      <ul className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
        {resources.map((resource) => (
          <li key={resource.label}>
            <a
              href={resource.href}
              className="flex items-center justify-between rounded-[calc(var(--radius-card)/2)] border border-[var(--border-faint)] px-3 py-2"
            >
              {resource.label}
              <span className="text-[var(--text-muted)]">→</span>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}

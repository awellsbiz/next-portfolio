import Card from '../Card';

export default function CtaCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-4 bg-[var(--surface-utility)] ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Let’s build together</h2>
      <p className="text-[var(--text-secondary)]">
        I help teams ship polished web experiences with clear scopes and
        reliable delivery.
      </p>
      <button
        type="button"
        className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-primary)]"
      >
        Start a project
      </button>
    </Card>
  );
}

import Card from '../Card';

export default function HeroCard({
  className = '',
  onResumeOpen,
  onServicesOpen,
}) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`.trim()}>
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-wide text-[var(--text-muted)]">
          Full Stack Software Developer
        </p>
        <h1 className="text-4xl font-semibold">Anthony Wells</h1>
      </div>
      <p className="text-[var(--text-secondary)]">
        I build clear, fast web experiences with a focus on craft, systems, and
        measurable impact.
      </p>
      <div className="flex gap-2 justify-center">
        <button
          type="button"
          onClick={onServicesOpen}
          className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-white hover:text-black"
        >
          Services
        </button>
        <button
          type="button"
          onClick={onResumeOpen}
          className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-white hover:text-black"
        >
          Resume
        </button>
      </div>
    </Card>
  );
}

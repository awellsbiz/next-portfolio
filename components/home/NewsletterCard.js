import Card from '../Card';

export default function NewsletterCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Newsletter</h2>
      <p className="text-[var(--text-secondary)]">
        Comming Soon... 
      </p>
      {/* <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--accent-surface)] px-3 py-2 text-sm text-[var(--text-primary)]"
        />
        <button
          type="button"
          className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-primary)]"
        >
          Join list
        </button>
      </div> */}
    </Card>
  );
}

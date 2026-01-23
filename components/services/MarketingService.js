import Card from '../Card';

export default function MarketingService({ onBack }) {
  return (
    <div className="flex flex-col gap-[var(--space-minor)]">
      <Card className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Marketing &amp; Lead Generation</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Campaign planning, content execution, and reporting designed to drive
          qualified leads and measurable pipeline movement.
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          How I work
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          Clear channel ownership, weekly reporting, and direct feedback loops.
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Engagement model
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          Contracted build phase followed by monthly maintenance and reporting.
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">Pricing</h4>
        <p className="text-sm text-[var(--text-secondary)]">$75/hr build</p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Maintenance model
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          Contract + monthly maintenance
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Equity note
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          No equity option
        </p>
      </Card>

      <button
        type="button"
        onClick={onBack}
        className="self-start rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-primary)]"
      >
        Back
      </button>
    </div>
  );
}

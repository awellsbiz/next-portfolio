import Card from '../Card';

export default function ServicesOverview({ onSelect, viewKeys }) {
  return (
    <div className="flex flex-col gap-[var(--space-minor)]">
      <Card className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">End-to-End Product Development</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Strategy to launch. Product planning, architecture, delivery, and
          ongoing improvement with clear ownership.
        </p>
        <button
          type="button"
          onClick={() => onSelect(viewKeys.END_TO_END)}
          className="self-start rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-primary)]"
        >
          View details
        </button>
      </Card>

      <Card className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">E-Commerce Solutions</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Conversion-focused storefronts, integrations, and operational
          automation with measurable outcomes.
        </p>
        <button
          type="button"
          onClick={() => onSelect(viewKeys.ECOMMERCE)}
          className="self-start rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-primary)]"
        >
          View details
        </button>
      </Card>

      <Card className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Marketing &amp; Lead Generation</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Campaign systems, content execution, and reporting that tie to revenue
          and pipeline.
        </p>
        <button
          type="button"
          onClick={() => onSelect(viewKeys.MARKETING)}
          className="self-start rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-primary)]"
        >
          View details
        </button>
      </Card>

      <Card className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Availability
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          Limited concurrent projects
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          Long-term engagements only
        </p>
      </Card>
    </div>
  );
}

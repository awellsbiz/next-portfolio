import Card from '../Card';

export default function EcommerceService({ onBack }) {
  return (
    <div className="flex flex-col gap-[var(--space-minor)]">
      <Card className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">E-Commerce Solutions</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Storefront architecture, conversion optimization, and operational
          integrations aligned to revenue and fulfillment needs.
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          How I work
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          Focused sprints, clear performance baselines, and prioritized
          iterations based on data.
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Engagement model
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          Build phase followed by monthly optimization and maintenance.
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">Pricing</h4>
        <p className="text-sm text-[var(--text-secondary)]">$100/hr build</p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Maintenance model
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          $250–$500/month maintenance
        </p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Equity note
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">
          Equity / co-founder option: case-by-case
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

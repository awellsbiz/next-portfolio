import Card from '../Card';

export default function ToggleCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-3 ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Theme</h2>
      <p className="text-sm text-[var(--text-muted)]">
        Theme switching is coming soon.
      </p>
      <button
        type="button"
        className="w-full rounded-[var(--radius-card)] border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-primary)]"
      >
        Toggle theme
      </button>
    </Card>
  );
}

import Card from '../Card';

export default function AboutCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-3 ${className}`.trim()}>
      <h2 className="text-xl font-semibold">About</h2>
      <p className="text-[var(--text-secondary)]">
        Creative engineer focused on web platforms, marketing systems, and
        reliable delivery across product and content teams.
      </p>
      <p className="text-sm text-[var(--text-muted)]">
        Based in Los Angeles · Available for select collaborations.
      </p>
    </Card>
  );
}

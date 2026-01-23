import Card from '../Card';

export default function AboutCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-3 ${className}`.trim()}>
      <h2 className="text-xl font-semibold">About</h2>
      <p className="text-[var(--text-secondary)]">
      I’m an AI-first software engineer focused on building secure, reliable web platforms and marketing systems. I help founders and teams solve real problems by designing systems that support clear execution, collaboration, and long-term maintainability.
      </p>
      <p className="text-sm text-[var(--text-muted)]">
        Based in Los Angeles · Open to new opportunities & Relocation
      </p>
    </Card>
  );
}

import Card from "../Card";

export default function AboutCard({ className = "" }) {
  return (
    <Card className={`flex flex-col gap-3 ${className}`.trim()}>
      <h2 className="text-xl font-semibold">About</h2>
      <p className="text-[var(--text-secondary)]">
        I'm Anthony—a software engineer based in Los Angeles. I build full-stack
        applications and data pipelines, taking projects from idea to
        production. I care about clean data, reliable systems, and shipping work
        that holds up. I enjoy collaborating with others to build something
        great. Let's build!
      </p>
      <p className="text-sm text-[var(--text-muted)]">
        Based in Los Angeles · Open to new opportunities & Relocation
      </p>
    </Card>
  );
}

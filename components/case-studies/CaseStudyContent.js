import Card from '../Card';

export default function CaseStudyContent({ caseStudy }) {
  if (!caseStudy) {
    return (
      <p className="text-sm text-[var(--text-secondary)]">
        Case study details are not available.
      </p>
    );
  }

  const { title, summary, liveDemoUrl, stack, star } = caseStudy;

  return (
    <div className="flex flex-col gap-[var(--space-minor)]">
      <Card className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{summary}</p>
      </Card>

      <Card className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-2 py-1 text-xs text-[var(--text-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Situation
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">{star.situation}</p>
      </Card>

      <Card className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Task
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">{star.task}</p>
      </Card>

      <Card className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Action
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">{star.action}</p>
      </Card>

      <Card className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Result
        </h4>
        <p className="text-sm text-[var(--text-secondary)]">{star.result}</p>
      </Card>

      <Card className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
          Live demo
        </h4>
        {liveDemoUrl ? (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-primary)]"
          >
            Open demo
          </a>
        ) : (
          <p className="text-sm text-[var(--text-secondary)]">
            Demo not available.
          </p>
        )}
      </Card>
    </div>
  );
}

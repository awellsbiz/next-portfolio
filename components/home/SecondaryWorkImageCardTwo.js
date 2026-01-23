import Image from 'next/image';
import Card from '../Card';

export default function SecondaryWorkImageCardTwo({
  className = '',
  onOpenCaseStudy,
  caseStudyId,
}) {
  return (
    <Card className={`relative p-0 overflow-hidden ${className}`.trim()}>
      <div className="badge badge-outline bg-[#161618] badge-sm absolute left-4 top-1 z-10 font-light uppercase tracking-wide text-[var(--accent-primary)]">
        Case study
      </div>
      <button
        type="button"
        onClick={() => onOpenCaseStudy?.(caseStudyId)}
        className="bg-[var(--accent-primary)] text-[var(--accent-surface)] hover:bg-[var(--accent-surface)] hover:text-[var(--accent-primary)] absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded-[calc(var(--radius-card)/2)] border border-[var(--accent-surface)] px-3 py-1 text-xs text-[var(--text-primary)]"
      >
        View details
      </button>
      <Image
        src="/mockup3.jpg"
        alt="Secondary work preview two"
        width={520}
        height={640}
        className="h-full w-full object-cover"
      />
    </Card>
  );
}

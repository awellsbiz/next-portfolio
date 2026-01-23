import Image from 'next/image';
import Card from '../Card';

export default function PrimaryWorkImageCard({ className = '' }) {
  return (
    <Card className={`relative p-0 overflow-hidden ${className}`.trim()}>
      <div className="badge badge-outline bg-[#161618] badge-sm absolute left-4 top-4 z-10 font-light uppercase tracking-wide text-[var(--accent-primary)]">
        Case study
      </div>
      <Image
        src="/cinesearch.png"
        alt="Primary work preview"
        width={820}
        height={640}
        className="h-full w-full object-cover"
      />
    </Card>
  );
}

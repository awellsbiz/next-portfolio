import Image from 'next/image';
import Card from '../Card';

export default function SecondaryWorkImageCardOne({ className = '' }) {
  return (
    <Card className={`relative p-0 overflow-hidden ${className}`.trim()}>
      <div className="badge badge-outline badge-sm bg-[#161618] absolute left-4 top-4 z-10 font-light uppercase tracking-wide text-[var(--accent-primary)]">
        Case study
      </div>
      <Image
        src="/PeakySS.png"
        alt="Secondary work preview one"
        width={520}
        height={600}
        className="h-full w-full object-cover"
      />
    </Card>
  );
}

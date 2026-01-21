import Image from 'next/image';
import Card from '../Card';

export default function PrimaryWorkImageCard({ className = '' }) {
  return (
    <Card className={`p-0 overflow-hidden ${className}`.trim()}>
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

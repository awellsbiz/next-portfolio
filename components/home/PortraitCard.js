import Image from 'next/image';
import Card from '../Card';

export default function PortraitCard({ className = '' }) {
  return (
    <Card className={`p-0 overflow-hidden ${className}`.trim()}>
      <Image
        src="/Awells.jpg"
        alt="Portrait"
        width={560}
        height={700}
        className="h-full w-full object-cover"
        priority
      />
    </Card>
  );
}

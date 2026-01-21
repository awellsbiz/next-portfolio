import Image from 'next/image';
import Card from '../Card';

export default function SecondaryWorkImageCardOne({ className = '' }) {
  return (
    <Card className={`p-0 overflow-hidden ${className}`.trim()}>
      <Image
        src="/PeakySS.png"
        alt="Secondary work preview one"
        width={520}
        height={640}
        className="h-full w-full object-cover"
      />
    </Card>
  );
}

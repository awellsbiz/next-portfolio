import Image from 'next/image';
import Card from '../Card';

export default function SecondaryWorkImageCardTwo({ className = '' }) {
  return (
    <Card className={`p-0 overflow-hidden ${className}`.trim()}>
      <Image
        src="/game.png"
        alt="Secondary work preview two"
        width={520}
        height={640}
        className="h-full w-full object-cover"
      />
    </Card>
  );
}

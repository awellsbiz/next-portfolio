import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Card from '../Card';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/awells91/', icon: AiOutlineLinkedin },
  { label: 'Twitter', href: 'https://twitter.com/_a_wells', icon: AiOutlineTwitter },
  { label: 'GitHub', href: 'https://github.com/awellsbiz', icon: AiOutlineGithub },
];

export default function SocialLinksCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-4 bg-[var(--surface-utility)] ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Social</h2>
      <div className="flex gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex h-12 w-12 items-center justify-center rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] text-[var(--accent-primary)]"
              aria-label={link.label}
            >
              <Icon size={22} />
            </a>
          );
        })}
      </div>
    </Card>
  );
}

import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFileImage } from 'react-icons/ai';
import Card from '../Card';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/awells91/', icon: AiOutlineLinkedin },
  { label: 'GitHub', href: 'https://github.com/awellsbiz', icon: AiOutlineGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/awells91/', icon: AiOutlineInstagram },
  { label: 'Resume', href: 'https://www.awells.dev/', icon: AiOutlineFileImage },
  // { label: 'TikTok', href: 'https://www.tiktok.com/@awells91', icon: AiOutlineTikTok },


];

export default function SocialLinksCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-4 bg-[#0A0A0B] ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Social</h2>
      <div className="flex gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex h-20 w-20 items-center justify-center rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] text-[var(--accent-primary)]bg-[#161618]"
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

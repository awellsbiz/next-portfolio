import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import Card from './Card';
export default function Contact() {
  return (
    <Card id="contact" className="card">
    <div>
      <div className="flex flex-row gap-4 justify-center">
        <div className="flex flex-col items-center rounded-[calc(var(--radius-card)/2)] bg-[var(--accent-surface)] text-[var(--accent-primary)] p-[calc(var(--space-mobile-gap)/2)] w-16 h-12">
          <a href="https://www.linkedin.com/in/awells91/">
            <AiOutlineInstagram size={30} />
          </a>
        </div>
        <div className="flex flex-col items-center rounded-[calc(var(--radius-card)/2)] bg-[var(--accent-surface)] text-[var(--accent-primary)] p-[calc(var(--space-mobile-gap)/2)] w-16 h-12">
          <a href="https://www.linkedin.com/in/awells91/">
            <AiOutlineLinkedin size={30} />
          </a>
        </div>
        <div className="flex flex-col items-center rounded-[calc(var(--radius-card)/2)] bg-[var(--accent-surface)] text-[var(--accent-primary)] p-[calc(var(--space-mobile-gap)/2)] w-16 h-12">
          <a href="https://twitter.com/_a_wells">
            <AiOutlineTwitter size={30} />
          </a>
        </div>
        <div className="flex flex-col items-center rounded-[calc(var(--radius-card)/2)] bg-[var(--accent-surface)] text-[var(--accent-primary)] p-[calc(var(--space-mobile-gap)/2)] w-16 h-12">
          <a href="https://github.com/awellsbiz">
            <AiOutlineGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  </Card>

  );
}
     
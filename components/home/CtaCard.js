import Card from '../Card';

export default function CtaCard({ className = '' }) {
  const handleCalendlyOpen = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/anthony-wells/coffe-chat',
      });
    }
  };

  return (
    <Card className={`flex flex-col gap-4 bg-[var(--surface-utility)] ${className}`.trim()}>
      <h2 className="text-xl font-semibold">Virtual Coffee Chat</h2>
      <p className="text-[var(--text-secondary)]">
      Let’s talk 1:1 for 30 minutes — no agenda, no pitch. We’ll discuss your painpoints and see if I can help.
      </p>
      <button
        type="button"
        onClick={handleCalendlyOpen}
        className="rounded-[var(--radius-card)] border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-primary)]"
      >
        Schedule A Chat
      </button>
    </Card>
  );
}

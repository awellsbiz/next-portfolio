import { useEffect, useId, useRef } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const previousActiveRef = useRef(null);
  const previousOverflowRef = useRef('');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousActiveRef.current = document.activeElement;
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    if (dialogRef.current) {
      dialogRef.current.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflowRef.current;
      document.removeEventListener('keydown', handleKeyDown);
      if (previousActiveRef.current && previousActiveRef.current.focus) {
        previousActiveRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const titleProps = title
    ? { 'aria-labelledby': titleId }
    : { 'aria-label': 'Modal dialog' };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-[3px] px-4 py-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className="w-full max-w-3xl rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-[var(--shadow-inset-1)] outline-none"
        {...titleProps}
      >
        <div className="flex items-start justify-between border-b border-[var(--border-faint)] px-6 py-4">
          <div className="flex-1">
            {title ? (
              <h2 id={titleId} className="text-lg font-semibold">
                {title}
              </h2>
            ) : null}
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="rounded-[calc(var(--radius-card)/2)] border border-[var(--border-subtle)] px-3 py-1 text-sm text-[var(--text-primary)]"
          >
            X
          </button>
        </div>
        <div className=" py-3">{children}</div>
      </div>
    </div>
  );
}

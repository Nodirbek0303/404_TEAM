import { ReactNode, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useModalBehaviour } from '../../hooks/useMotionPrefs';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Terminal sarlavha panelidagi fayl nomi */
  title: string;
  children: ReactNode;
  closeLabel?: string;
  /** Pastdagi yopish tugmasi matni */
  footerLabel?: string;
  maxWidth?: string;
  id?: string;
}

/**
 * Kod muharriri oynasi ko'rinishidagi modal.
 * Escape, overlay bosish, scroll-lock, focus trap va focus qaytarish qo'llab-quvvatlanadi.
 */
export default function Modal({
  open,
  onClose,
  title,
  children,
  closeLabel = 'Yopish',
  footerLabel,
  maxWidth = 'max-w-2xl',
  id,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useModalBehaviour(open, onClose);

  // Fokusni modalga olib kirish va yopilganda qaytarish
  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement as HTMLElement | null;

    const raf = requestAnimationFrame(() => {
      panelRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(raf);
      restoreFocusRef.current?.focus?.();
    };
  }, [open]);

  // Fokus tuzog'i — Tab modaldan chiqib ketmasin
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;

      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      {/* Fon — kod yomg'iri bilan qoraytirilgan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-[#04040c]/95 bg-crt"
      />

      <motion.div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className={`term-window relative w-full ${maxWidth} my-auto outline-none`}
      >
        {/* Terminal sarlavha paneli */}
        <div className="term-bar sticky top-0 z-20 bg-[#0b0b1a]">
          <span className="term-dot term-dot-r" />
          <span className="term-dot term-dot-y" />
          <span className="term-dot term-dot-g" />
          <span className="term-title flex-1">{title}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="shrink-0 p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-7 space-y-6 max-h-[78vh] overflow-y-auto team-scroll">
          {children}

          {footerLabel && (
            <div className="pt-4 border-t border-white/5 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="btn-term"
              >
                {footerLabel}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

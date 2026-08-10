import { useEffect, useState } from 'react';
import { useInView, usePrefersReducedMotion } from '../../hooks/useMotionPrefs';

interface TypeWriterProps {
  /** Yoziladigan matn(lar). Massiv berilsa navbat bilan yoziladi. */
  text: string | string[];
  /** Bir belgi orasidagi vaqt (ms) */
  speed?: number;
  /** Boshlanishidan oldingi kechikish (ms) */
  startDelay?: number;
  /** Qatorlar orasidagi kechikish (ms) — faqat massiv uchun */
  lineDelay?: number;
  className?: string;
  /** Kursor ko'rsatilsinmi */
  cursor?: boolean;
  cursorClassName?: string;
  /** Yozib bo'lgach kursorni yashirish */
  hideCursorOnDone?: boolean;
  onDone?: () => void;
}

/**
 * Kod muharririda yozilayotgandek effekt.
 * Ekranga kirganda ishga tushadi; reduced-motion'da darhol to'liq matn.
 */
export default function TypeWriter({
  text,
  speed = 38,
  startDelay = 0,
  lineDelay = 320,
  className = '',
  cursor = true,
  cursorClassName = 'caret caret-thin',
  hideCursorOnDone = false,
  onDone,
}: TypeWriterProps) {
  const lines = Array.isArray(text) ? text : [text];
  const full = lines.join('\n');

  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.2 });
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;

    if (reduced) {
      setShown(full);
      setDone(true);
      onDone?.();
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let index = 0;

    const step = () => {
      if (cancelled) return;
      index += 1;
      setShown(full.slice(0, index));

      if (index >= full.length) {
        setDone(true);
        onDone?.();
        return;
      }

      // Yangi qator oldidan biroz uzoqroq pauza — "o'ylab yozayotgandek"
      const nextIsNewline = full.charAt(index) === '\n';
      timer = setTimeout(step, nextIsNewline ? lineDelay : speed);
    };

    timer = setTimeout(step, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, full, speed, startDelay, lineDelay]);

  const showCursor = cursor && !(hideCursorOnDone && done);

  return (
    <span ref={ref} className={className} style={{ whiteSpace: 'pre-wrap' }}>
      {shown}
      {showCursor && <span className={cursorClassName} aria-hidden />}
    </span>
  );
}

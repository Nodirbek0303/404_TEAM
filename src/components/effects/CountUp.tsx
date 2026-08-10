import { useEffect, useState } from 'react';
import { useInView, usePrefersReducedMotion } from '../../hooks/useMotionPrefs';

interface CountUpProps {
  /** "50+", "24/7", "99.6%", "4+" kabi qiymatlar qo'llab-quvvatlanadi */
  value: string;
  duration?: number;
  className?: string;
}

/** "50+" → { prefix: '', num: 50, decimals: 0, suffix: '+' } */
function parseValue(value: string) {
  const match = value.match(/-?\d+(?:[.,]\d+)?/);
  if (!match) return null;

  const raw = match[0];
  const num = parseFloat(raw.replace(',', '.'));
  if (Number.isNaN(num)) return null;

  const dot = raw.indexOf('.') >= 0 ? raw.indexOf('.') : raw.indexOf(',');
  const decimals = dot >= 0 ? raw.length - dot - 1 : 0;

  return {
    prefix: value.slice(0, match.index ?? 0),
    suffix: value.slice((match.index ?? 0) + raw.length),
    num,
    decimals,
  };
}

/**
 * Raqam 0 dan maqsadgacha "hisoblanadi" — build progress / metrika hissi.
 */
export default function CountUp({ value, duration = 1500, className = '' }: CountUpProps) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const parsed = parseValue(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;

    if (reduced) {
      setCurrent(parsed.num);
      return;
    }

    let raf: number;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutExpo — tez boshlanib, silliq to'xtaydi
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCurrent(parsed.num * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, duration, value]);

  if (!parsed) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {parsed.prefix}
      {current.toFixed(parsed.decimals)}
      {parsed.suffix}
    </span>
  );
}

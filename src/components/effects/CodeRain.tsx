import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/useMotionPrefs';

/** Rain'da tushadigan belgilar — kod/hex ruhida */
const CHARS = '01{}[]()<>/\\;:=+-*&|!?$#@abcdefABCDEF0123456789';

interface CodeRainProps {
  className?: string;
  /** Ustunlar orasidagi masofa (px) — kattaroq = yengilroq */
  columnWidth?: number;
  /** Kadr tezligi (fps) — past qiymat = kam quvvat sarfi */
  fps?: number;
  opacity?: number;
}

/**
 * Canvas'da "raqamli yomg'ir" — matritsa uslubidagi kod oqimi.
 * Ekrandan chiqib ketganda va tab yashirilganda to'liq to'xtaydi.
 */
export default function CodeRain({
  className = '',
  columnWidth = 22,
  fps = 20,
  opacity = 0.55,
}: CodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let drops: number[] = [];
    let raf = 0;
    let lastFrame = 0;
    let visible = true;
    let onScreen = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const frameInterval = 1000 / fps;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.max(1, Math.floor(width / columnWidth));
      drops = Array.from({ length: columns }, () => Math.random() * -height);
    };

    const draw = (ts: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || !onScreen) return;
      if (ts - lastFrame < frameInterval) return;
      lastFrame = ts;

      // Iz qoldiruvchi o'chirish
      ctx.fillStyle = 'rgba(4, 4, 12, 0.11)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `600 ${columnWidth * 0.62}px "JetBrains Mono", monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        const x = i * columnWidth;
        const y = drops[i];

        // Oqim boshidagi belgi yorqinroq — "yangi yozilgan" hissi
        ctx.fillStyle = Math.random() > 0.965 ? 'rgba(210, 180, 255, 0.95)' : 'rgba(139, 92, 246, 0.5)';
        ctx.fillText(char, x, y);

        drops[i] += columnWidth * 0.85;
        if (drops[i] > height && Math.random() > 0.975) {
          drops[i] = -columnWidth;
        }
      }
    };

    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    // Ekrandan chiqsa — to'xtatamiz
    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        ([entry]) => { onScreen = entry.isIntersecting; },
        { threshold: 0 }
      );
      io.observe(canvas);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      io?.disconnect();
    };
  }, [reduced, columnWidth, fps]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
      style={{ opacity }}
      aria-hidden
    />
  );
}

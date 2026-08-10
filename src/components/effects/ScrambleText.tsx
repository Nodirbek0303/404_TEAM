import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView, usePrefersReducedMotion } from '../../hooks/useMotionPrefs';

const GLYPHS = '01<>{}[]/\\|=+-*&%$#@!?~^;:ABCDEF0123456789';

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Har bir belgi "qulflanishi" uchun kerak bo'lgan kadrlar */
  speed?: number;
  /** 'view' — ekranga kirganda, 'hover' — kursor tekkanda, 'both' — ikkalasi */
  trigger?: 'view' | 'hover' | 'both';
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

/**
 * Matn tasodifiy belgilardan asta-sekin "deshifrlanadi".
 * Dekodlash / hash hisoblash metaforasi.
 */
export default function ScrambleText({
  text,
  className = '',
  speed = 2,
  trigger = 'view',
  as: Tag = 'span',
}: ScrambleTextProps) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState(reduced ? text : '');
  const frameRef = useRef<number | undefined>(undefined);
  const runningRef = useRef(false);

  const run = useCallback(() => {
    if (reduced) {
      setDisplay(text);
      return;
    }
    if (runningRef.current) return;
    runningRef.current = true;

    let frame = 0;
    const total = text.length * speed + 8;

    const tick = () => {
      const revealed = Math.floor(frame / speed);
      let out = '';

      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === ' ') {
          out += ' ';
        } else if (i < revealed) {
          out += ch;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplay(out);
      frame += 1;

      if (frame <= total) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        runningRef.current = false;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  }, [text, speed, reduced]);

  useEffect(() => {
    if ((trigger === 'view' || trigger === 'both') && inView) run();
  }, [inView, trigger, run]);

  useEffect(() => () => {
    if (frameRef.current !== undefined) cancelAnimationFrame(frameRef.current);
  }, []);

  const hoverProps =
    trigger === 'hover' || trigger === 'both' ? { onMouseEnter: run } : {};

  return (
    <Tag ref={ref as never} className={className} {...hoverProps}>
      {display || (reduced ? text : ' ')}
    </Tag>
  );
}

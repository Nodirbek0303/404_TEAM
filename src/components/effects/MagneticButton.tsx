import { ReactNode, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/useMotionPrefs';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  /** Tortilish kuchi (0–1) */
  strength?: number;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
}

/**
 * Kursorga "magnit" kabi tortiladigan tugma.
 * Nozik, lekin interfeysni juda jonli qiladi.
 */
export default function MagneticButton({
  children,
  onClick,
  className = '',
  strength = 0.28,
  type = 'button',
  disabled = false,
  id,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: { clientX: number; clientY: number }) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: dx * strength, y: dy * strength });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      aria-label={ariaLabel}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0
          ? 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)'
          : 'transform 90ms linear',
      }}
    >
      {children}
    </button>
  );
}

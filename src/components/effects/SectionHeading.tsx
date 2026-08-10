import { ReactNode } from 'react';
import { motion } from 'motion/react';
import ScrambleText from './ScrambleText';

interface SectionHeadingProps {
  /** Badge — terminal buyrug'i sifatida ko'rsatiladi: `$ npm run <command>` */
  command: string;
  title: string;
  /** Kichik izoh — `// comment` uslubida */
  subtitle?: string;
  icon?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

/**
 * Barcha bo'limlar uchun yagona sarlavha bloki.
 * Badge = terminal buyrug'i, sarlavha = deshifrlanuvchi matn, izoh = kod kommentariyasi.
 */
export default function SectionHeading({
  command,
  title,
  subtitle,
  icon,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-4 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'} ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-badge"
      >
        {icon}
        <span className="text-emerald-400 font-bold">$</span>
        <span className="normal-case tracking-normal text-gray-400">{command}</span>
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="section-title"
      >
        <ScrambleText text={title} speed={1} />
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-sm text-gray-400 font-light leading-relaxed"
        >
          <span className="font-mono text-[var(--tok-com)] mr-1.5 select-none">//</span>
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

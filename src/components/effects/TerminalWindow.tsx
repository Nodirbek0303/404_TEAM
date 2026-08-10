import { ReactNode } from 'react';

interface TerminalWindowProps {
  /** Sarlavha panelidagi fayl nomi yoki buyruq */
  title?: string;
  /** O'ng tomondagi qo'shimcha belgi (masalan, til yoki status) */
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  /** Yashil "ishlayapti" LED ko'rsatilsinmi */
  live?: boolean;
}

/**
 * Kod muharriri / terminal oynasi ramkasi.
 * Sayt bo'ylab bir xil "IDE" tilini saqlash uchun.
 */
export default function TerminalWindow({
  title = 'bash',
  badge,
  children,
  className = '',
  bodyClassName = '',
  live = false,
}: TerminalWindowProps) {
  return (
    <div className={`term-window ${className}`}>
      <div className="term-bar">
        <span className="term-dot term-dot-r" />
        <span className="term-dot term-dot-y" />
        <span className="term-dot term-dot-g" />
        <span className="term-title flex-1">{title}</span>
        {live && (
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="led" />
            <span className="font-mono text-[0.58rem] text-emerald-400/80 uppercase tracking-widest">
              live
            </span>
          </span>
        )}
        {badge && <span className="shrink-0">{badge}</span>}
      </div>
      <div className={`term-body ${bodyClassName}`}>{children}</div>
    </div>
  );
}

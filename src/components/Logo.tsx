export const LOGO_SRC = '/branding/logo.png';
export const LOGO_ALT = '404-TEAM — Global IT Solutions';

interface LogoProps {
  variant?: 'nav' | 'footer' | 'hero';
  className?: string;
  onClick?: () => void;
}

function LogoWordmark({ size = 'nav' }: { size?: 'nav' | 'footer' | 'hero' }) {
  const titleClass =
    size === 'nav' ? 'text-base sm:text-lg' : size === 'footer' ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl';

  const tagClass =
    size === 'nav' ? 'text-[0.5rem] sm:text-[0.55rem] tracking-[0.18em]' : 'text-[0.55rem] sm:text-[0.6rem] tracking-[0.22em]';

  return (
    <div className="flex flex-col leading-none text-left">
      <div className={`font-black tracking-tight font-mono ${titleClass}`}>
        <span className="text-white glitch-hover inline-block">404-</span>
        <span className="text-[#22d3ee]">TEAM</span>
        <span className="caret caret-thin ml-0.5 !h-[0.85em]" aria-hidden />
      </div>
      <span className={`${tagClass} font-mono font-semibold text-gray-600 uppercase mt-1`}>
        Global IT Solutions
      </span>
    </div>
  );
}

function LogoIcon({ size = 'nav' }: { size?: 'nav' | 'footer' | 'hero' }) {
  const box =
    size === 'nav'
      ? 'h-10 w-10 sm:h-11 sm:w-11'
      : size === 'footer'
        ? 'h-14 w-14 sm:h-16 sm:w-16'
        : 'h-16 w-16 sm:h-20 sm:w-20';

  return (
    <div
      className={`${box} shrink-0 overflow-hidden rounded-lg bg-[#ececec] ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_0_22px_-4px_rgba(168,85,247,0.65)]`}
    >
      <img
        src={LOGO_SRC}
        alt=""
        aria-hidden
        className="w-full h-auto object-cover object-top scale-[1.65] origin-top"
      />
    </div>
  );
}

export default function Logo({ variant = 'nav', className = '', onClick }: LogoProps) {
  const navContent = (
    <div className={`group flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoIcon size="nav" />
      <LogoWordmark size="nav" />
    </div>
  );

  const footerContent = (
    <div className={`rounded-xl bg-[#ececec] p-3 sm:p-4 inline-block ring-1 ring-white/10 ${className}`}>
      <img src={LOGO_SRC} alt={LOGO_ALT} className="w-[min(100%,280px)] h-auto object-contain" />
    </div>
  );

  const content = variant === 'footer' ? footerContent : navContent;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={LOGO_ALT}
        className="shrink-0 text-left transition-opacity hover:opacity-90"
      >
        {content}
      </button>
    );
  }

  return content;
}

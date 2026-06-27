import React from 'react';

export const LOGO_SRC = '/branding/logo.png';
export const LOGO_ALT = '404-TEAM — Global IT Solutions';

interface LogoProps {
  variant?: 'nav' | 'footer' | 'hero';
  className?: string;
  onClick?: () => void;
}

function LogoWordmark({ size = 'nav' }: { size?: 'nav' | 'footer' | 'hero' }) {
  const titleClass =
    size === 'nav'
      ? 'text-base sm:text-lg'
      : size === 'footer'
        ? 'text-xl sm:text-2xl'
        : 'text-2xl sm:text-3xl';

  const tagClass =
    size === 'nav'
      ? 'text-[8px] sm:text-[9px] tracking-[0.18em]'
      : 'text-[9px] sm:text-[10px] tracking-[0.22em]';

  return (
    <div className="flex flex-col leading-none text-left">
      <div className={`font-black tracking-tight ${titleClass}`}>
        <span className="text-white">404-</span>
        <span className="text-[#00b4d8]">TEAM</span>
      </div>
      <span className={`${tagClass} font-semibold text-gray-400 uppercase mt-1`}>
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
    <div className={`${box} shrink-0 overflow-hidden rounded-lg bg-[#ececec]`}>
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
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoIcon size="nav" />
      <LogoWordmark size="nav" />
    </div>
  );

  const footerContent = (
    <div className={`rounded-xl bg-[#ececec] p-3 sm:p-4 inline-block ${className}`}>
      <img
        src={LOGO_SRC}
        alt={LOGO_ALT}
        className="w-[min(100%,300px)] h-auto object-contain"
      />
    </div>
  );

  const content = variant === 'footer' ? footerContent : navContent;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="shrink-0 text-left transition-opacity hover:opacity-90">
        {content}
      </button>
    );
  }

  return content;
}

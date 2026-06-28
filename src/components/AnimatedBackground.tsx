import React from 'react';

const FLOATS = [
  {
    src: '/backgrounds/sphere-gold.png',
    alt: '',
    className: 'bg-float-1 top-[8%] -right-[5%] w-[min(420px,55vw)] opacity-[0.22]',
    anim: 'bg-drift-slow',
  },
  {
    src: '/backgrounds/quantum-lab.png',
    alt: '',
    className: 'bg-float-2 top-[35%] -left-[8%] w-[min(380px,50vw)] opacity-[0.18]',
    anim: 'bg-drift-reverse',
  },
  {
    src: '/backgrounds/neural-network.png',
    alt: '',
    className: 'bg-float-3 bottom-[15%] right-[5%] w-[min(360px,48vw)] opacity-[0.2]',
    anim: 'bg-drift-slow',
    delay: 'animation-delay-4s',
  },
  {
    src: '/backgrounds/drone-tech.png',
    alt: '',
    className: 'bg-float-4 top-[55%] left-[40%] w-[min(280px,38vw)] opacity-[0.15]',
    anim: 'bg-drift-reverse',
    delay: 'animation-delay-2s',
  },
];

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {/* Grid + scan line */}
      <div className="absolute inset-0 bg-grid-tech opacity-40" />
      <div className="absolute inset-0 bg-scan-line" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-[100px] bg-pulse-orb" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600/8 blur-[120px] bg-pulse-orb-delayed" />
      <div className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full bg-amber-500/5 blur-[80px] bg-pulse-orb" />

      {/* Code rain particles */}
      <div className="absolute inset-0 bg-particles" />

      {/* Floating tech images */}
      {FLOATS.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt={item.alt}
          className={`absolute object-contain rounded-2xl mix-blend-screen filter blur-[0.5px] ${item.className} ${item.anim} ${item.delay ?? ''}`}
          loading="lazy"
        />
      ))}

      {/* Vignette — content readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 via-[#050510]/70 to-[#050510]" />
    </div>
  );
}

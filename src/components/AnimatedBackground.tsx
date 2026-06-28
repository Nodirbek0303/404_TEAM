import React from 'react';

const FLOATS = [
  {
    src: '/backgrounds/sphere-gold.png',
    className: 'top-[5%] right-[0%] w-[min(480px,58vw)]',
    anim: 'bg-drift-slow',
  },
  {
    src: '/backgrounds/quantum-lab.png',
    className: 'top-[30%] -left-[4%] w-[min(440px,52vw)]',
    anim: 'bg-drift-reverse',
  },
  {
    src: '/backgrounds/neural-network.png',
    className: 'bottom-[10%] right-[2%] w-[min(420px,50vw)]',
    anim: 'bg-drift-slow animation-delay-4s',
  },
  {
    src: '/backgrounds/drone-tech.png',
    className: 'top-[50%] left-[35%] w-[min(320px,42vw)]',
    anim: 'bg-drift-reverse animation-delay-2s',
  },
];

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {/* Asosiy fon — neural network butun ekran */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.35]"
        style={{ backgroundImage: "url('/backgrounds/neural-network.png')" }}
      />

      {/* Ikkinchi qatlam — oltin globus markazda */}
      <div
        className="absolute inset-0 bg-cover bg-right-top bg-no-repeat opacity-[0.28]"
        style={{ backgroundImage: "url('/backgrounds/sphere-gold.png')" }}
      />

      {/* Grid + scan */}
      <div className="absolute inset-0 bg-grid-tech opacity-70" />
      <div className="absolute inset-0 bg-scan-line opacity-80" />

      {/* Yorug' orbalar */}
      <div className="absolute top-[15%] left-[20%] w-72 h-72 rounded-full bg-purple-600/25 blur-[90px] bg-pulse-orb" />
      <div className="absolute bottom-[20%] right-[15%] w-96 h-96 rounded-full bg-blue-500/20 blur-[110px] bg-pulse-orb-delayed" />
      <div className="absolute top-[60%] left-[55%] w-56 h-56 rounded-full bg-amber-400/15 blur-[70px] bg-pulse-orb" />

      <div className="absolute inset-0 bg-particles opacity-90" />

      {/* Suzuvchi rasmlar */}
      {FLOATS.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt=""
          className={`absolute object-contain rounded-xl opacity-55 shadow-[0_0_60px_rgba(124,58,237,0.25)] ${item.className} ${item.anim}`}
          loading="lazy"
        />
      ))}

      {/* Faqat chetlarda qoraytirish — markaz ochiq qoladi */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,16,0.45)_55%,rgba(5,5,16,0.85)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050510] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050510]/80 to-transparent" />
    </div>
  );
}

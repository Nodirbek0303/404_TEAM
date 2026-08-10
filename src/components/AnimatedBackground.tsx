import CodeRain from './effects/CodeRain';

/**
 * Sayt fon qatlami.
 * Avvalgi 4 ta og'ir PNG o'rniga — canvas kod yomg'iri + grid + orblar.
 * Bu ancha yengil (~1 MB kamroq trafik) va mavzuga mos.
 */
export default function AnimatedBackground() {
  return (
    <div
      id="site-background"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {/* Kod yomg'iri */}
      <div className="absolute inset-0">
        <CodeRain columnWidth={28} fps={18} opacity={0.5} />
      </div>

      {/* Texnik grid + skan chizig'i */}
      <div className="absolute inset-0 bg-grid-tech opacity-60" />
      <div className="absolute inset-0 bg-scan-line opacity-70" />
      <div className="absolute inset-0 bg-crt opacity-50" />

      {/* Yorug' orblar */}
      <div className="absolute top-[12%] left-[18%] w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] bg-pulse-orb" />
      <div className="absolute bottom-[18%] right-[14%] w-96 h-96 rounded-full bg-blue-500/16 blur-[120px] bg-pulse-orb-delayed" />
      <div className="absolute top-[58%] left-[52%] w-56 h-56 rounded-full bg-cyan-400/10 blur-[80px] bg-pulse-orb" />

      {/* Chetlarni yumshoq qoraytirish — markazdagi kod oqimi ko'rinib turadi */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,4,12,0.3)_62%,rgba(4,4,12,0.8)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#04040c] to-transparent" />
    </div>
  );
}

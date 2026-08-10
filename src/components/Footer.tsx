import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Send, Terminal, Globe2 } from 'lucide-react';
import Logo from './Logo';
import { Language, translations } from '../translations';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

/** Dunyo xaritasi o'rniga — global tugunlar tarmog'i (yengil SVG) */
function NetworkDecor({ label }: { label: string }) {
  const nodes = [
    { x: 22, y: 40 }, { x: 48, y: 26 }, { x: 74, y: 44 },
    { x: 36, y: 66 }, { x: 62, y: 72 }, { x: 86, y: 62 },
  ];

  return (
    <div className="relative h-48 md:h-full min-h-[13rem] rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-[#0b0b1a] to-[#12122a]">
      <div className="absolute inset-0 bg-grid-tech opacity-50" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
        {/* Tugunlar orasidagi bog'lanishlar */}
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist > 42) return null;
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="url(#netGrad)"
                strokeWidth="0.35"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.55 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15 + (i + j) * 0.08 }}
              />
            );
          })
        )}

        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x} cy={n.y} r="1.4"
            fill={i % 2 === 0 ? '#a855f7' : '#3b82f6'}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.09 }}
          />
        ))}

        <defs>
          <linearGradient id="netGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent" />

      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-mono text-[0.6rem] text-purple-400/85 uppercase tracking-widest flex items-center gap-1.5">
          <Globe2 className="w-3 h-3" />
          Global Reach
        </p>
        <p className="font-mono text-[0.68rem] text-gray-500 mt-1">{label}</p>
      </div>

      <span className="absolute top-4 right-4 flex items-center gap-1.5">
        <span className="led" />
        <span className="font-mono text-[0.55rem] text-emerald-400/80 uppercase tracking-widest">online</span>
      </span>
    </div>
  );
}

export default function Footer({ onNavigate, lang }: FooterProps) {
  const t = translations[lang] || translations.uz;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';

  const L = {
    cta: {
      uz: 'LOYIHANGIZNI BIRGALIKDA AMALGA OSHIRAYLIK!',
      en: "LET'S BUILD YOUR PROJECT TOGETHER!",
      ru: 'РЕАЛИЗУЕМ ВАШ ПРОЕКТ ВМЕСТЕ!',
    }[key],
    newsletter: {
      uz: 'YANGILIKLAR VA MAQOLALAR',
      en: 'NEWS & ARTICLES',
      ru: 'НОВОСТИ И СТАТЬИ',
    }[key],
    newsletterSub: {
      uz: "Telegram kanalimizda yangi loyihalar, texnik maqolalar va ochiq vakansiyalarni e'lon qilamiz.",
      en: 'We post new projects, engineering articles and open roles on our Telegram channel.',
      ru: 'Публикуем новые проекты, технические статьи и вакансии в нашем Telegram-канале.',
    }[key],
    subscribe: { uz: 'Kanalga obuna', en: 'Subscribe', ru: 'Подписаться' }[key],
    contactUs: { uz: "Biz bilan bog'lanish", en: 'Get in touch', ru: 'Связаться с нами' }[key],
    region: {
      uz: "O'zbekiston · Markaziy Osiyo · Dunyo",
      en: 'Uzbekistan · Central Asia · Worldwide',
      ru: 'Узбекистан · Центральная Азия · Мир',
    }[key],
    top: { uz: 'Yuqoriga', en: 'Back to top', ru: 'Наверх' }[key],
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    // Backend yo'q — foydalanuvchini Telegram kanaliga yo'naltiramiz
    window.open('https://t.me/uz_team_404', '_blank', 'noopener,noreferrer');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="border-t border-purple-500/10 bg-[#05050a] pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-5">
            <h3 className="text-xl font-black text-white uppercase leading-snug">{L.cta}</h3>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary px-6 py-3 text-[0.72rem] font-mono uppercase tracking-wider inline-flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              {L.contactUs}
            </button>
            <Logo variant="footer" />
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[0.68rem] font-bold text-purple-300 uppercase tracking-widest">
              <span className="text-gray-700 select-none">// </span>
              {t.navContact}
            </h4>
            <div className="space-y-2 font-mono text-[0.78rem] text-gray-500">
              <p className="flex items-start gap-2">
                <span className="text-gray-700 shrink-0">→</span>
                {L.region}
              </p>
              <p>
                <a href="tel:+998955997703" className="link-underline hover:text-purple-300">+998 95 599 77 03</a>
              </p>
              <p>
                <a href="tel:+998904150847" className="link-underline hover:text-purple-300">+998 90 415 08 47</a>
              </p>
              <p>
                <a
                  href="https://t.me/uz_team_404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-purple-300"
                >
                  @uz_team_404
                </a>
              </p>
              <p>
                <a
                  href="https://t.me/evanshar03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-purple-300"
                >
                  @evanshar03
                </a>
              </p>
            </div>
          </div>

          <NetworkDecor label={L.region} />
        </div>

        {/* Obuna */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/5">
          <div className="space-y-4">
            <h4 className="font-mono text-[0.68rem] font-bold text-purple-300 uppercase tracking-widest">
              <span className="text-gray-700 select-none">// </span>
              {L.newsletter}
            </h4>
            <p className="text-[0.75rem] text-gray-500 leading-relaxed max-w-md">{L.newsletterSub}</p>

            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                aria-label="Email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-black/60 border border-white/[0.08] font-mono text-[0.75rem] text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-primary px-5 py-2.5 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-wider shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{L.subscribe}</span>
              </button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[0.68rem] text-emerald-400"
              >
                <span className="opacity-60">[OK]</span> t.me/uz_team_404 →{' '}
                {key === 'uz' ? 'kanal ochildi' : key === 'ru' ? 'канал открыт' : 'channel opened'}
              </motion.p>
            )}
          </div>

          <div className="flex flex-wrap items-end justify-start md:justify-end gap-4 font-mono text-[0.7rem] text-gray-600">
            <a
              href="https://t.me/uz_team_404"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-purple-300"
            >
              Telegram
            </a>
            <span className="text-white/10">·</span>
            <button onClick={() => onNavigate('team')} className="link-underline hover:text-purple-300">
              {t.navTeam}
            </button>
            <span className="text-white/10">·</span>
            <button onClick={() => onNavigate('projects')} className="link-underline hover:text-purple-300">
              {t.navProjects}
            </button>
            <span className="text-white/10">·</span>
            <button onClick={() => onNavigate('contact')} className="link-underline hover:text-purple-300">
              {t.navContact}
            </button>
          </div>
        </div>

        {/* Pastki qator — terminal prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[0.68rem] text-gray-600">
            <span className="text-emerald-500/70">$</span> echo &copy; {new Date().getFullYear()} 404-TEAM — {t.footerRights}
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-[0.6rem] text-gray-700">
              <span className="led" />
              all systems operational
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={L.top}
              className="p-2 rounded-lg border border-white/10 text-gray-500 hover:text-purple-300 hover:border-purple-500/40 hover:-translate-y-0.5 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { ArrowUp, Send, Plane } from 'lucide-react';
import Logo from './Logo';
import { Language, translations } from '../translations';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

function WorldMapDecor() {
  return (
    <div className="relative h-48 md:h-full min-h-[12rem] rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-[#0d0d1a] to-[#12122a]">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cpath fill='%23a855f7' fill-opacity='0.15' d='M120,180 Q200,120 280,160 T440,140 T600,170 T720,150 L720,280 Q600,300 480,270 T240,290 T120,260 Z'/%3E%3Ccircle cx='200' cy='160' r='4' fill='%233b82f6'/%3E%3Ccircle cx='400' cy='140' r='6' fill='%23a855f7'/%3E%3Ccircle cx='550' cy='180' r='4' fill='%233b82f6'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[10px] font-mono text-purple-400/80 uppercase tracking-widest">Global Reach</p>
        <p className="text-xs text-gray-500 mt-1">O&apos;zbekiston · Markaziy Osiyo · Dunyo</p>
      </div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-500/50" />
      <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}

export default function Footer({ onNavigate, lang }: FooterProps) {
  const t = translations[lang] || translations.uz;
  const [email, setEmail] = useState('');

  const ctaTitle = lang === 'uz'
    ? "LOYIHANGIZNI BIRGALIKDA AMALGA OSHIRAYLIK!"
    : lang === 'en'
      ? "LET'S BUILD YOUR PROJECT TOGETHER!"
      : 'РЕАЛИЗУЕМ ВАШ ПРОЕКТ ВМЕСТЕ!';

  const newsletterTitle = lang === 'uz' ? 'YANGILIKLAR VA MAQOLALAR' : lang === 'en' ? 'NEWS & ARTICLES' : 'НОВОСТИ И СТАТЬИ';

  return (
    <footer className="border-t border-purple-500/10 bg-[#05050a] pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-5">
            <h3 className="text-xl font-black text-white uppercase leading-snug">{ctaTitle}</h3>
            <button onClick={() => onNavigate('contact')} className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
              <Plane className="w-4 h-4" />
              {lang === 'uz' ? "Biz bilan bog'lanish" : t.navContact}
            </button>
            <Logo variant="footer" />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider">{t.navContact}</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 O&apos;zbekiston, Samarqand shahri, Pavarot</p>
              <p>
                <a href="tel:+998955997703" className="hover:text-purple-300 transition-colors">+998 95 599 77 03</a>
              </p>
              <p>
                <a href="tel:+998904150847" className="hover:text-purple-300 transition-colors">+998 90 415 08 47</a>
              </p>
              <p>
                <a href="https://t.me/uz_team_404" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                  Telegram: @uz_team_404
                </a>
              </p>
              <p>
                <a href="https://t.me/evanshar03" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                  Konsultatsiya: @evanshar03
                </a>
              </p>
            </div>
          </div>

          <WorldMapDecor />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/5">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider">{newsletterTitle}</h4>
            <p className="text-xs text-gray-500">
              {lang === 'uz' ? 'Yangiliklar va foydali maqolalar uchun email qoldiring' : 'Subscribe for news and articles'}
            </p>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="flex-1 px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50"
              />
              <button className="btn-primary px-4 py-2.5">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-end justify-start md:justify-end gap-4 text-xs text-gray-500">
            <button type="button" className="hover:text-purple-300 transition-colors">Privacy Policy</button>
            <span className="text-white/10">|</span>
            <button type="button" className="hover:text-purple-300 transition-colors">Terms of Use</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} 404-TEAM. {t.footerRights}</p>
          <div className="flex items-center gap-4">
            <a href="https://t.me/uz_team_404" target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-purple-300">Telegram</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-purple-300 hover:border-purple-500/40">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Rocket, Infinity, Bot } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

const HERO_BG = '/backgrounds/neural-network.png';

export default function Hero({ onNavigate, lang }: HeroProps) {
  const t = translations[lang] || translations.uz;

  const sub =
    lang === 'uz'
      ? "Biz g'oyalarni zamonaviy texnologiyalar orqali real loyihalarga aylantiradigan innovatsion jamoamiz. Har bir loyiha — sizning biznesingiz uchun maxsus yechim."
      : lang === 'en'
        ? 'We turn ideas into real projects with modern technology. Every project is a custom solution for your business.'
        : 'Мы превращаем идеи в реальные проекты с помощью современных технологий.';

  const negaTitle = lang === 'uz' ? 'Nega 404?' : lang === 'en' ? 'Why 404?' : 'Почему 404?';
  const negaDesc =
    lang === 'uz'
      ? "404 xato emas — bu bizning falsafamiz: har qanday muammoni yechimga aylantiramiz."
      : '404 is not an error — it is our philosophy: we turn every problem into a solution.';

  const negaItems = [
    { icon: Rocket, num: '4', label: 'Forward', sub: lang === 'uz' ? 'Oldinga intilish' : 'Moving forward' },
    { icon: Infinity, num: '0', label: 'Zero Limits', sub: lang === 'uz' ? 'Cheklovsiz imkon' : 'No limits' },
    { icon: Bot, num: '4', label: 'Future', sub: lang === 'uz' ? 'Kelajak texnologiyasi' : 'Future tech' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover object-center scale-105 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/95 to-[#050510]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/50" />
      </div>

      <div className="hero-glow top-20 right-1/4 w-[500px] h-[350px] bg-purple-600/25" />
      <div className="hero-glow bottom-10 left-1/3 w-[400px] h-[300px] bg-blue-600/15" />

      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
        <div className="relative hero-404-glow opacity-90">
          <span className="text-[140px] font-black text-brand-gradient leading-none tracking-tighter" style={{ filter: 'drop-shadow(0 0 80px rgba(168,85,247,0.6))' }}>
            404
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight">
                WHERE OTHERS SEE
                <br />
                ERRORS,{' '}
                <span className="text-brand-gradient block sm:inline mt-1 sm:mt-0">
                  WE BUILD SOLUTIONS.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl"
            >
              {sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary px-8 py-4 text-sm flex items-center justify-center gap-2"
              >
                {lang === 'uz' ? 'Loyihani boshlash' : t.navCTA}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="btn-outline px-8 py-4 text-sm flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                {lang === 'uz' ? "Portfolio ko'rish" : t.navProjects}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 sm:p-7 space-y-5 border-purple-500/30">
              <div>
                <h3 className="text-base font-bold text-white mb-1">{negaTitle}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{negaDesc}</p>
              </div>
              <div className="space-y-4">
                {negaItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-white">{item.num}</span>
                          <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">{item.label}</span>
                        </div>
                        <p className="text-[11px] text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

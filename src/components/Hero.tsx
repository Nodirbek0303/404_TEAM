import { motion } from 'motion/react';
import { ArrowRight, Terminal, Rocket, Infinity as InfinityIcon, Bot, GitBranch } from 'lucide-react';
import { Language, translations } from '../translations';
import { TypeWriter, MagneticButton } from './effects';
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

export default function Hero({ onNavigate, lang }: HeroProps) {
  const t = translations[lang] || translations.uz;
  const reduced = usePrefersReducedMotion();

  const negaTitle = lang === 'uz' ? 'Nega 404?' : lang === 'en' ? 'Why 404?' : 'Почему 404?';
  const negaDesc =
    lang === 'uz'
      ? "404 xato emas — bu bizning falsafamiz: har qanday muammoni yechimga aylantiramiz."
      : lang === 'en'
        ? '404 is not an error — it is our philosophy: we turn every problem into a solution.'
        : '404 — не ошибка, а философия: мы превращаем любую проблему в решение.';

  const negaItems = [
    {
      icon: Rocket,
      num: '4',
      label: 'Forward',
      sub: lang === 'uz' ? 'Oldinga intilish' : lang === 'en' ? 'Moving forward' : 'Движение вперёд',
    },
    {
      icon: InfinityIcon,
      num: '0',
      label: 'Zero Limits',
      sub: lang === 'uz' ? 'Cheklovsiz imkon' : lang === 'en' ? 'No limits' : 'Без ограничений',
    },
    {
      icon: Bot,
      num: '4',
      label: 'Future',
      sub: lang === 'uz' ? 'Kelajak texnologiyasi' : lang === 'en' ? 'Future tech' : 'Технологии будущего',
    },
  ];

  return (
    <section id="home" className="relative min-h-[94vh] flex items-center overflow-hidden">
      {/*
        Fon: global AnimatedBackground'dagi kod yomg'iri shu yerdan ko'rinadi.
        Hero o'z canvas'ini yaratmaydi — bitta canvas butun sayt uchun yetarli.
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#04040c]/75 via-[#04040c]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04040c] via-transparent to-[#04040c]/35" />
        <div className="absolute inset-0 bg-crt opacity-50" />
      </div>

      <div className="hero-glow top-16 right-1/4 w-[520px] h-[360px] bg-purple-600/22" />
      <div className="hero-glow bottom-8 left-1/3 w-[420px] h-[300px] bg-blue-600/14" />

      {/* Fon 404 — glitch bilan */}
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
        <span
          className="glitch text-[150px] font-black text-brand-gradient leading-none tracking-tighter"
          data-text="404"
          style={{ filter: 'drop-shadow(0 0 90px rgba(168,85,247,0.55))' }}
        >
          404
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Chap: sarlavha + terminal */}
          <div className="lg:col-span-7 space-y-7">

            {/* Git branch status qatori */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-purple-500/20 bg-black/40 font-mono text-[0.66rem]"
            >
              <span className="led" />
              <GitBranch className="w-3 h-3 text-purple-400" />
              <span className="text-gray-500">main</span>
              <span className="text-white/15">|</span>
              <span className="text-emerald-400">build: passing</span>
              <span className="text-white/15">|</span>
              <span className="text-gray-500">v2.0.4</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl sm:text-5xl md:text-[3.4rem] font-black text-white leading-[1.08] tracking-tight"
            >
              <span className="block text-gray-500 font-mono text-base sm:text-lg font-medium mb-3">
                {'<'}h1{'>'}
              </span>
              WHERE OTHERS SEE
              <br />
              <span className="glitch-hover inline-block cursor-default">ERRORS,</span>{' '}
              <span className="text-brand-gradient block sm:inline mt-1 sm:mt-0">
                WE BUILD SOLUTIONS.
              </span>
              <span className="block text-gray-500 font-mono text-base sm:text-lg font-medium mt-3">
                {'</'}h1{'>'}
              </span>
            </motion.h1>

            {/* Terminal: kompaniya tavsifi kod sifatida */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="term-window max-w-xl"
            >
              <div className="term-bar">
                <span className="term-dot term-dot-r" />
                <span className="term-dot term-dot-y" />
                <span className="term-dot term-dot-g" />
                <span className="term-title flex-1">~/404-team/about.ts</span>
                <span className="led" />
              </div>
              <div className="term-body text-[0.72rem] sm:text-[0.78rem]">
                <TypeWriter
                  speed={reduced ? 0 : 16}
                  startDelay={500}
                  lineDelay={140}
                  hideCursorOnDone={false}
                  cursorClassName="caret caret-thin"
                  className="text-gray-300"
                  text={[
                    lang === 'uz'
                      ? "const team = '404-TEAM';"
                      : lang === 'en'
                        ? "const team = '404-TEAM';"
                        : "const team = '404-TEAM';",
                    lang === 'uz'
                      ? "// Biz g'oyalarni real loyihalarga aylantiramiz."
                      : lang === 'en'
                        ? '// We turn ideas into real, shipped products.'
                        : '// Мы превращаем идеи в реальные проекты.',
                    lang === 'uz'
                      ? "team.build(['web', 'mobile', 'ai', 'iot', 'security']);"
                      : lang === 'en'
                        ? "team.build(['web', 'mobile', 'ai', 'iot', 'security']);"
                        : "team.build(['web', 'mobile', 'ai', 'iot', 'security']);",
                    '// ✔ compiled successfully in 0.4s',
                  ]}
                />
              </div>
            </motion.div>

            {/* CTA tugmalari — magnit effekti bilan */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                onClick={() => onNavigate('contact')}
                className="btn-primary px-8 py-4 text-sm flex items-center justify-center gap-2 font-mono"
                strength={0.22}
              >
                <Terminal className="w-4 h-4" />
                {lang === 'uz' ? 'npm run start-project' : lang === 'en' ? 'npm run start-project' : 'npm run start-project'}
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={() => onNavigate('projects')}
                className="btn-outline px-8 py-4 text-sm flex items-center justify-center gap-2 font-mono"
                strength={0.18}
              >
                <GitBranch className="w-4 h-4" />
                {lang === 'uz' ? 'git log --portfolio' : lang === 'en' ? 'git log --portfolio' : 'git log --portfolio'}
              </MagneticButton>
            </motion.div>
          </div>

          {/* O'ng: "Nega 404?" — konsol paneli */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="term-window trace-border">
              <div className="term-bar">
                <span className="term-dot term-dot-r" />
                <span className="term-dot term-dot-y" />
                <span className="term-dot term-dot-g" />
                <span className="term-title flex-1">why-404.json</span>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 font-mono">
                    <span className="text-[var(--tok-punc)]">{'{ '}</span>
                    {negaTitle}
                    <span className="text-[var(--tok-punc)]">{' }'}</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{negaDesc}</p>
                </div>

                <div className="space-y-3">
                  {negaItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                        className="group flex items-center gap-4 p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-purple-500/40 hover:bg-purple-500/[0.06] transition-all duration-300 cursor-default"
                      >
                        <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-white font-mono">{item.num}</span>
                            <span className="text-xs font-bold text-purple-300 uppercase tracking-wide font-mono">
                              {item.label}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500">{item.sub}</p>
                        </div>
                        <span className="ml-auto font-mono text-[10px] text-gray-700 group-hover:text-emerald-400 transition-colors shrink-0">
                          ✓
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pastdagi scroll indikatori — faqat katta ekranda (kichikda StatsBar bilan to'qnashadi) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden 2xl:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[0.6rem] text-gray-600 tracking-widest uppercase">scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5">
          <motion.span
            animate={reduced ? {} : { y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-purple-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

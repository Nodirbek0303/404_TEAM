import { motion } from 'motion/react';
import { CheckCircle2, TerminalSquare } from 'lucide-react';
import { Language } from '../translations';
import { SectionHeading, CountUp } from './effects';

/** Har bir sabab — o'tgan test kabi ko'rsatiladi */
const reasons: { uz: string; en: string; ru: string; ms: number }[] = [
  {
    uz: "Zamonaviy texnologiyalar va eng so'nggi stack",
    en: 'Modern technologies and an up-to-date stack',
    ru: 'Современные технологии и актуальный стек',
    ms: 12,
  },
  {
    uz: 'Har bir loyiha uchun individual yondashuv',
    en: 'A tailored approach for every project',
    ru: 'Индивидуальный подход к каждому проекту',
    ms: 8,
  },
  {
    uz: "24/7 texnik qo'llab-quvvatlash va kafolat",
    en: '24/7 technical support and warranty',
    ru: 'Техподдержка 24/7 и гарантия',
    ms: 21,
  },
  {
    uz: 'Tajribali jamoa — 50+ mutaxassis',
    en: 'Experienced team — 50+ specialists',
    ru: 'Опытная команда — 50+ специалистов',
    ms: 15,
  },
  {
    uz: "Shaffof jarayon va muddatlarga rioya",
    en: 'Transparent process and on-time delivery',
    ru: 'Прозрачный процесс и соблюдение сроков',
    ms: 9,
  },
  {
    uz: "Xavfsizlik va sifat — birinchi o'rinda",
    en: 'Security and quality come first',
    ru: 'Безопасность и качество — прежде всего',
    ms: 18,
  },
];

interface WhyUsProps {
  lang: Language;
}

export default function WhyUs({ lang }: WhyUsProps) {
  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';

  const title =
    lang === 'uz' ? 'NIMA UCHUN BIZ?'
    : lang === 'ru' ? 'ПОЧЕМУ МЫ?'
    : lang === 'tr' ? 'NEDEN BİZ?'
    : lang === 'de' ? 'WARUM WIR?'
    : lang === 'fr' ? 'POURQUOI NOUS ?'
    : lang === 'zh' ? '为什么选择我们'
    : lang === 'ja' ? '選ばれる理由'
    : lang === 'ko' ? '우리를 선택하는 이유'
    : 'WHY CHOOSE US?';

  const sub =
    lang === 'uz' ? 'Har bir va’damiz — bajarilgan test kabi tekshiriladi'
    : lang === 'ru' ? 'Каждое наше обещание проверено, как пройденный тест'
    : 'Every promise we make is verified — like a passing test';

  const totalMs = reasons.reduce((sum, r) => sum + r.ms, 0);

  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute left-1/4 top-1/2 w-72 h-72 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Chap: test natijalari terminali */}
          <div className="space-y-8">
            <SectionHeading
              command="npm test -- --coverage"
              title={title}
              subtitle={sub}
              icon={<TerminalSquare className="w-3.5 h-3.5" />}
              align="left"
            />

            <div className="term-window">
              <div className="term-bar">
                <span className="term-dot term-dot-r" />
                <span className="term-dot term-dot-y" />
                <span className="term-dot term-dot-g" />
                <span className="term-title flex-1">PASS ./why-404-team.test.ts</span>
              </div>

              <div className="p-4 sm:p-5 space-y-1">
                {reasons.map((item, i) => (
                  <motion.div
                    key={item.en}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.11, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-start gap-3 py-2 px-2 -mx-2 rounded-lg hover:bg-purple-500/[0.06] transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[0.8rem] text-gray-300 group-hover:text-white transition-colors flex-1 leading-relaxed">
                      {item[key]}
                    </span>
                    <span className="font-mono text-[0.6rem] text-gray-700 shrink-0 mt-1 group-hover:text-emerald-500/70 transition-colors">
                      {item.ms} ms
                    </span>
                  </motion.div>
                ))}

                {/* Yakuniy hisobot */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 }}
                  className="pt-4 mt-3 border-t border-white/5 font-mono text-[0.68rem] space-y-1"
                >
                  <p className="text-gray-500">
                    Tests: <span className="text-emerald-400 font-semibold">{reasons.length} passed</span>,{' '}
                    {reasons.length} total
                  </p>
                  <p className="text-gray-500">
                    Coverage: <span className="text-emerald-400 font-semibold">100%</span> · Time:{' '}
                    <span className="text-gray-400">{(totalMs / 1000).toFixed(3)} s</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* O'ng: 3D "404" kubi + coverage metrikalari */}
          <div className="flex flex-col items-center gap-8">
            <div className="perspective-[900px]">
              <div className="cube-3d relative w-52 h-52">
                <div className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-25 blur-3xl" />
                <div className="relative w-full h-full rounded-2xl border border-purple-500/40 bg-gradient-to-br from-[#1a1035] to-[#0b0b1a] flex flex-col items-center justify-center shadow-2xl shadow-purple-500/25 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-tech opacity-40" />
                  <span
                    className="glitch relative text-5xl font-black text-brand-gradient font-mono"
                    data-text="404"
                  >
                    404
                  </span>
                  <span className="relative text-[0.65rem] font-mono font-bold text-purple-300 tracking-[0.35em] mt-2">
                    TEAM
                  </span>
                  <span className="relative font-mono text-[0.55rem] text-gray-600 mt-3">
                    exit code: 0
                  </span>
                </div>
              </div>
            </div>

            {/* Coverage ko'rsatkichlari */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {[
                { label: 'uptime', value: '99.9%' },
                { label: 'on-time', value: '96%' },
                { label: 'retention', value: '92%' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="code-card p-3 text-center"
                  style={{ ['--scan-h' as string]: '80px' }}
                >
                  <p className="font-mono text-lg font-black text-white">
                    <CountUp value={m.value} duration={1400} />
                  </p>
                  <p className="font-mono text-[0.55rem] text-gray-600 uppercase tracking-widest mt-0.5">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

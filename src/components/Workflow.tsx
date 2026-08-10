import type { ComponentType } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Search, PenTool, Code2, TestTube2, Rocket, GitCommitHorizontal } from 'lucide-react';
import { Language } from '../translations';
import { SectionHeading } from './effects';

interface Step {
  num: string;
  hash: string;
  icon: ComponentType<{ className?: string }>;
  title: Record<'uz' | 'en' | 'ru', string>;
  desc: Record<'uz' | 'en' | 'ru', string>;
  branch: string;
}

const steps: Step[] = [
  {
    num: '01', hash: 'a4f2e1c', icon: Lightbulb, branch: 'feat/discovery',
    title: { uz: "G'oyani qabul qilamiz", en: 'Discovery', ru: 'Приём идеи' },
    desc: { uz: 'Ehtiyojlarni tinglaymiz', en: 'We listen to your needs', ru: 'Изучаем ваши потребности' },
  },
  {
    num: '02', hash: '9b3d70a', icon: Search, branch: 'feat/analysis',
    title: { uz: 'Tahlil qilamiz', en: 'Analysis', ru: 'Анализ' },
    desc: { uz: 'Bozor va texnik tahlil', en: 'Market & technical research', ru: 'Рынок и техническая база' },
  },
  {
    num: '03', hash: 'c17e5d9', icon: PenTool, branch: 'feat/design',
    title: { uz: 'Dizayn & Prototip', en: 'Design & Prototype', ru: 'Дизайн и прототип' },
    desc: { uz: 'UI/UX va wireframe', en: 'UI/UX and wireframes', ru: 'UI/UX и вайрфреймы' },
  },
  {
    num: '04', hash: '2e8a41f', icon: Code2, branch: 'feat/development',
    title: { uz: 'Dasturlash', en: 'Development', ru: 'Разработка' },
    desc: { uz: 'Agile metodologiya', en: 'Agile methodology', ru: 'Agile-методология' },
  },
  {
    num: '05', hash: 'd50c93b', icon: TestTube2, branch: 'test/qa',
    title: { uz: 'Test & Sifat', en: 'Testing & QA', ru: 'Тестирование и QA' },
    desc: { uz: 'QA va xavfsizlik', en: 'QA and security audit', ru: 'QA и аудит безопасности' },
  },
  {
    num: '06', hash: '7fae620', icon: Rocket, branch: 'main',
    title: { uz: 'Tayyor mahsulot', en: 'Ship to production', ru: 'Запуск продукта' },
    desc: { uz: "Ishga tushirish va support", en: 'Launch and support', ru: 'Запуск и поддержка' },
  },
];

interface WorkflowProps {
  lang: Language;
}

export default function Workflow({ lang }: WorkflowProps) {
  const key: 'uz' | 'en' | 'ru' = lang === 'en' ? 'en' : lang === 'ru' ? 'ru' : lang === 'uz' ? 'uz' : 'en';

  const title =
    lang === 'uz' ? 'BIZ QANDAY ISHLAYMIZ?'
    : lang === 'ru' ? 'КАК МЫ РАБОТАЕМ'
    : lang === 'tr' ? 'NASIL ÇALIŞIYORUZ'
    : lang === 'de' ? 'WIE WIR ARBEITEN'
    : lang === 'fr' ? 'NOTRE MÉTHODE'
    : lang === 'zh' ? '我们的工作流程'
    : lang === 'ja' ? '開発プロセス'
    : lang === 'ko' ? '작업 방식'
    : 'HOW WE WORK';

  const sub =
    lang === 'uz' ? "Har bir loyiha — aniq bosqichlardan iborat commit tarixi"
    : lang === 'ru' ? 'Каждый проект — это история коммитов с чёткими этапами'
    : 'Every project is a commit history with clear, reviewable stages';

  return (
    <section className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          command="git log --oneline --graph"
          title={title}
          subtitle={sub}
          icon={<GitCommitHorizontal className="w-3.5 h-3.5" />}
          className="mb-14"
        />

        {/* Git commit tarixi */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertikal branch chizig'i — scroll bilan chiziladi */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="git-line absolute left-[1.35rem] sm:left-[1.6rem] top-4 bottom-4 hidden sm:block"
          />

          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex items-start gap-4 sm:gap-6"
                >
                  {/* Commit tuguni */}
                  <div className="relative z-10 shrink-0 flex items-center justify-center w-11 h-11 sm:w-[3.25rem] sm:h-[3.25rem] rounded-xl bg-[#0b0b1a] border border-purple-500/25 group-hover:border-cyan-400/60 group-hover:bg-purple-500/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-purple-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
                    {isLast && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0b0b1a] animate-pulse" />
                    )}
                  </div>

                  {/* Commit ma'lumoti */}
                  <div className="code-card flex-1 p-4 sm:p-5 min-w-0" style={{ ['--scan-h' as string]: '120px' }}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2">
                      <span className="font-mono text-[0.68rem] text-amber-400/90 font-semibold">
                        {step.hash}
                      </span>
                      <span className="font-mono text-[0.62rem] px-2 py-0.5 rounded border border-purple-500/25 bg-purple-500/10 text-purple-300">
                        {step.branch}
                      </span>
                      <span className="font-mono text-[0.6rem] text-gray-700 ml-auto">
                        step {step.num}/06
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                      {step.title[key]}
                    </h3>
                    <p className="text-[0.72rem] text-gray-500 mt-1 font-mono">
                      <span className="text-gray-700 select-none">// </span>
                      {step.desc[key]}
                    </p>

                    {/* Hover'da chiziladigan diff indikatori */}
                    <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-[0.6rem] text-emerald-500">+++</span>
                      <div className="h-1 flex-1 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-[width] duration-700 ease-out" />
                      </div>
                      <span className="font-mono text-[0.6rem] text-gray-600">100%</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Yakuniy holat */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 ml-0 sm:ml-[4.25rem] font-mono text-[0.72rem] flex flex-wrap items-center gap-2 text-gray-500"
          >
            <span className="text-emerald-400">✔</span>
            <span>Deployed to production</span>
            <span className="text-white/15">·</span>
            <span className="text-gray-600">0 errors</span>
            <span className="text-white/15">·</span>
            <span className="text-gray-600">0 warnings</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

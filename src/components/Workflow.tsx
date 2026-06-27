import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Search, PenTool, Code2, TestTube2, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../translations';

const stepsUz = [
  { num: '01', icon: Lightbulb, title: "G'oyani qabul qilamiz", desc: "Ehtiyojlarni tinglaymiz" },
  { num: '02', icon: Search, title: 'Tahlil qilamiz', desc: "Bozor va texnik tahlil" },
  { num: '03', icon: PenTool, title: 'Dizayn & Prototip', desc: 'UI/UX va wireframe' },
  { num: '04', icon: Code2, title: 'Dasturlash', desc: 'Agile metodologiya' },
  { num: '05', icon: TestTube2, title: 'Test & Sifat', desc: 'QA va xavfsizlik' },
  { num: '06', icon: Rocket, title: 'Tayyor mahsulot', desc: "Ishga tushirish va support" },
];

interface WorkflowProps {
  lang: Language;
}

export default function Workflow({ lang }: WorkflowProps) {
  const title = lang === 'uz' ? 'BIZ QANDAY ISHLAYMIZ?' : lang === 'en' ? 'HOW WE WORK' : 'КАК МЫ РАБОТАЕМ';
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-badge">Process</span>
            <h2 className="section-title mt-4">{title}</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')} className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-stretch">
          <div
            ref={scrollRef}
            className="xl:col-span-3 flex gap-4 overflow-x-auto team-scroll pb-2 snap-x snap-mandatory"
          >
            {stepsUz.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass-card p-5 min-w-[200px] flex-1 snap-start space-y-3 relative"
                >
                  {i < stepsUz.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-4 w-8 process-line z-10" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-purple-400">{step.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-purple-300" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-[11px] text-gray-500">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="xl:col-span-2 glass-card overflow-hidden min-h-[260px] relative">
            <img
              src="https://images.unsplash.com/photo-1517694712202-8dd79c90dc33?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="w-full h-full object-cover min-h-[260px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-bold text-white">404-TEAM Dev Studio</p>
              <p className="text-xs text-gray-400 mt-1">Full-cycle software engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

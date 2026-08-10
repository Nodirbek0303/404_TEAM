import { motion } from 'motion/react';
import { FolderKanban, Users, UserCheck, Calendar, Headphones, ShieldCheck } from 'lucide-react';
import { Language } from '../translations';
import { CountUp } from './effects';

interface StatsBarProps {
  lang: Language;
}

const stats = [
  { icon: FolderKanban, value: '50+', key: 'projects', labelUz: 'Loyihalar', labelEn: 'Projects', labelRu: 'Проекты' },
  { icon: Users, value: '30+', key: 'clients', labelUz: 'Mijozlar', labelEn: 'Clients', labelRu: 'Клиенты' },
  { icon: UserCheck, value: '50+', key: 'team', labelUz: "Jamoa a'zolari", labelEn: 'Team Members', labelRu: 'Команда' },
  { icon: Calendar, value: '4+', key: 'years', labelUz: 'Yillik tajriba', labelEn: 'Years Experience', labelRu: 'Лет опыта' },
  { icon: Headphones, value: '24/7', key: 'support', labelUz: "Qo'llab-quvvatlash", labelEn: 'Support', labelRu: 'Поддержка' },
  { icon: ShieldCheck, value: '100%', key: 'quality', labelUz: 'Sifat kafolati', labelEn: 'Quality Guarantee', labelRu: 'Гарантия качества' },
];

export default function StatsBar({ lang }: StatsBarProps) {
  const label = (s: (typeof stats)[number]) =>
    lang === 'en' ? s.labelEn : lang === 'ru' ? s.labelRu : s.labelUz;

  return (
    <section className="relative z-20 -mt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="term-window overflow-hidden">
          {/* Terminal sarlavhasi — metrika buyrug'i */}
          <div className="term-bar">
            <span className="term-dot term-dot-r" />
            <span className="term-dot term-dot-y" />
            <span className="term-dot term-dot-g" />
            <span className="term-title flex-1">
              <span className="text-emerald-400">$</span> 404-team --stats --format=table
            </span>
            <span className="led" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="group relative text-center space-y-2 py-6 px-3 hover:bg-purple-500/[0.07] transition-colors duration-300 cursor-default overflow-hidden"
                >
                  {/* Hover'da pastdan ko'tariluvchi chiziq */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-[width] duration-500 ease-out" />

                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto group-hover:border-purple-400/60 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>

                  <div className="text-2xl md:text-3xl font-black text-white font-mono">
                    <CountUp value={stat.value} duration={1600} />
                  </div>

                  <div className="text-[10px] md:text-[11px] text-gray-500 group-hover:text-gray-300 font-mono leading-tight transition-colors">
                    {label(stat)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

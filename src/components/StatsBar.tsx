import React from 'react';
import { FolderKanban, Users, UserCheck, Calendar, Headphones, ShieldCheck } from 'lucide-react';
import { Language } from '../translations';

interface StatsBarProps {
  lang: Language;
}

const stats = [
  { icon: FolderKanban, value: '50+', labelUz: 'Loyihalar', labelEn: 'Projects' },
  { icon: Users, value: '30+', labelUz: 'Mijozlar', labelEn: 'Clients' },
  { icon: UserCheck, value: '50+', labelUz: "Jamoa a'zolari", labelEn: 'Team Members' },
  { icon: Calendar, value: '4+', labelUz: 'Yillik tajriba', labelEn: 'Years Experience' },
  { icon: Headphones, value: '24/7', labelUz: "Qo'llab-quvvatlash", labelEn: 'Support' },
  { icon: ShieldCheck, value: '100%', labelUz: 'Sifat kafolati', labelEn: 'Quality Guarantee' },
];

export default function StatsBar({ lang }: StatsBarProps) {
  return (
    <section className="relative z-20 -mt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-white/5 overflow-hidden">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center space-y-2 py-6 px-3 hover:bg-purple-500/5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-gray-400 font-medium leading-tight">
                  {lang === 'en' ? stat.labelEn : stat.labelUz}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

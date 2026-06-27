import React from 'react';
import { CheckCircle2, Box } from 'lucide-react';
import { Language } from '../translations';

const reasonsUz = [
  'Zamonaviy texnologiyalar va eng so\'nggi stack',
  'Har bir loyiha uchun individual yondashuv',
  '24/7 texnik qo\'llab-quvvatlash va kafolat',
  'Tajribali jamoa — 50+ mutaxassis',
  'Shaffof jarayon va muddatlarga rioya',
  'Xavfsizlik va sifat — birinchi o\'rinda',
];

interface WhyUsProps {
  lang: Language;
}

export default function WhyUs({ lang }: WhyUsProps) {
  const title = lang === 'uz' ? 'NIMA UCHUN BIZ?' : lang === 'en' ? 'WHY CHOOSE US?' : 'ПОЧЕМУ МЫ?';
  const reasons = lang === 'uz' ? reasonsUz : reasonsUz;

  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="section-badge">Why Us</span>
            <h2 className="section-title">{title}</h2>
            <ul className="space-y-4">
              {reasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center perspective-[800px]">
            <div className="cube-3d relative w-48 h-48">
              <div className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-20 blur-3xl" />
              <div className="relative w-full h-full rounded-2xl border border-purple-500/40 bg-gradient-to-br from-[#1a1035] to-[#0d0d1a] flex flex-col items-center justify-center shadow-2xl shadow-purple-500/30">
                <Box className="w-10 h-10 text-purple-400 mb-3" />
                <span className="text-4xl font-black text-brand-gradient">404</span>
                <span className="text-xs font-bold text-purple-300 tracking-[0.3em] mt-1">TEAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

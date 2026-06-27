import React from 'react';
import { Language } from '../translations';

const partners = ['IT Park', 'Uzinfocom', 'MITC', '21 School', 'Alfraganus University'];

interface PartnersProps {
  lang: Language;
}

export default function Partners({ lang }: PartnersProps) {
  const title = lang === 'uz' ? 'HAMKORLARIMIZ' : lang === 'en' ? 'OUR PARTNERS' : 'ПАРТНЁРЫ';

  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-badge">Partners</span>
        <h2 className="text-2xl font-black text-white uppercase mt-4 mb-10">{title}</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {partners.map((name) => (
            <div
              key={name}
              className="glass-card px-6 py-4 text-sm font-bold text-gray-400 hover:text-white transition-colors min-w-[140px]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, UserCheck } from 'lucide-react';
import { internsData } from '../data';
import { Intern } from '../types';
import { Language, translations } from '../translations';

interface InternsProps {
  lang: Language;
}

export default function Interns({ lang }: InternsProps) {
  const t = translations[lang] || translations.uz;
  const [filter, setFilter] = useState<string>('all');

  const directions = useMemo(() => {
    const set = new Set(internsData.map((i) => i.direction));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered =
    filter === 'all' ? internsData : internsData.filter((i) => i.direction === filter);

  const allLabel = lang === 'uz' ? 'Barchasi' : lang === 'en' ? 'All' : 'Все';

  return (
    <section id="interns" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="section-badge">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.internsBadge}</span>
          </span>
          <h2 className="section-title">{t.internsTitle}</h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">{t.internsSub}</p>
        </div>

        {internsData.length > 0 && directions.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {directions.map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => setFilter(dir)}
                className={`px-4 py-2 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                  filter === dir
                    ? 'bg-brand-gradient text-white border border-purple-500/40'
                    : 'bg-black/50 text-gray-400 border border-white/10 hover:border-purple-500/40'
                }`}
              >
                {dir === 'all' ? allLabel : dir}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="glass-card max-w-xl mx-auto p-10 text-center space-y-4">
            <GraduationCap className="w-12 h-12 text-purple-400/40 mx-auto" />
            <p className="text-sm text-gray-400 leading-relaxed">{t.internsEmpty}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((intern, index) => (
              <InternCard key={intern.id} intern={intern} index={index} t={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function InternCard({
  intern,
  index,
  t,
}: {
  intern: Intern;
  index: number;
  t: (typeof translations)['uz'];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card flex flex-col overflow-hidden"
    >
      <div className="p-5 flex flex-col items-center text-center space-y-3 border-b border-white/5">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30 bg-black shrink-0">
          <img
            src={intern.avatar}
            alt={intern.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white leading-snug">{intern.name}</h3>
          <p className="text-[10px] font-mono text-purple-400/90 uppercase tracking-wide mt-1.5">
            {t.internsDirection}
          </p>
          <span className="inline-block mt-1 text-[10px] font-semibold text-gray-300 bg-purple-500/10 border border-purple-500/25 px-2.5 py-1 rounded-lg">
            {intern.direction}
          </span>
        </div>
      </div>

      <div className="p-4 flex items-center gap-3 bg-black/20">
        <div className="w-11 h-11 rounded-full overflow-hidden border border-blue-500/30 bg-black shrink-0">
          <img
            src={intern.curator.avatar}
            alt={intern.curator.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="text-left min-w-0">
          <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
            <UserCheck className="w-3 h-3 text-blue-400" />
            {t.internsCurator}
          </p>
          <p className="text-xs font-bold text-white truncate">{intern.curator.name}</p>
          {intern.curator.role && (
            <p className="text-[10px] text-gray-500 truncate">{intern.curator.role}</p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

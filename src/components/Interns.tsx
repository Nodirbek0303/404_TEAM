import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  UserCheck,
  X,
  FolderKanban,
  CheckCircle2,
  Star,
  Calendar,
} from 'lucide-react';
import { internsData } from '../data';
import { Intern } from '../types';
import { Language, translations } from '../translations';

interface InternsProps {
  lang: Language;
}

function modalLabels(lang: Language) {
  if (lang === 'en') {
    return {
      detail: 'View profile',
      active: 'Current projects',
      completed: 'Completed projects',
      grades: 'Curator grades',
      comment: 'Curator comment',
      overall: 'Overall score',
      since: 'Internship since',
      close: 'Close',
      noProjects: 'Not yet assigned to any projects',
      noGrades: 'No curator grades yet',
    };
  }
  if (lang === 'ru') {
    return {
      detail: 'Подробнее',
      active: 'Текущие проекты',
      completed: 'Завершённые проекты',
      grades: 'Оценки куратора',
      comment: 'Комментарий куратора',
      overall: 'Общий балл',
      since: 'Практика с',
      close: 'Закрыть',
      noProjects: 'Пока не участвует в проектах',
      noGrades: 'Оценки куратора ещё не выставлены',
    };
  }
  return {
    detail: "Batafsil ma'lumot",
    active: 'Hozirgi loyihalar',
    completed: 'Ishlagan loyihalar',
    grades: 'Kurator ballari',
    comment: 'Kurator izohi',
      overall: 'Umumiy ball',
      since: 'Amaliyot boshlangan',
      close: 'Yopish',
      noProjects: 'Hali loyihalarda ishtirok etilmagan',
      noGrades: 'Kurator ballari hali qo\'yilmagan',
    };
}

export default function Interns({ lang }: InternsProps) {
  const t = translations[lang] || translations.uz;
  const labels = modalLabels(lang);
  const [filter, setFilter] = useState<string>('all');
  const [activeIntern, setActiveIntern] = useState<Intern | null>(null);

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
              <InternCard
                key={intern.id}
                intern={intern}
                index={index}
                t={t}
                detailLabel={labels.detail}
                onOpen={() => setActiveIntern(intern)}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeIntern && (
          <InternModal
            intern={activeIntern}
            labels={labels}
            t={t}
            onClose={() => setActiveIntern(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function InternCard({
  intern,
  index,
  t,
  detailLabel,
  onOpen,
}: {
  intern: Intern;
  index: number;
  t: (typeof translations)['uz'];
  detailLabel: string;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onOpen}
      className="glass-card flex flex-col overflow-hidden text-left w-full cursor-pointer hover:border-purple-500/50 transition-colors group"
    >
      <div className="p-5 flex flex-col items-center text-center space-y-3 border-b border-white/5">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-400 bg-black shrink-0 transition-colors">
          <img
            src={intern.avatar}
            alt={intern.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white leading-snug group-hover:text-purple-300 transition-colors">
            {intern.name}
          </h3>
          <p className="text-[10px] font-mono text-purple-400/90 uppercase tracking-wide mt-1.5">
            {t.internsDirection}
          </p>
          <span className="inline-block mt-1 text-[10px] font-semibold text-gray-300 bg-purple-500/10 border border-purple-500/25 px-2.5 py-1 rounded-lg">
            {intern.direction}
          </span>
          {intern.overallGrade != null && (
            <p className={`mt-2 text-xs font-bold flex items-center justify-center gap-1 ${intern.overallGrade > 0 ? 'text-amber-400' : 'text-gray-500'}`}>
              <Star className={`w-3.5 h-3.5 ${intern.overallGrade > 0 ? 'fill-amber-400 text-amber-400' : 'text-gray-500'}`} />
              {intern.overallGrade}/100
            </p>
          )}
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
        <div className="text-left min-w-0 flex-1">
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

      <div className="px-4 pb-4">
        <span className="block w-full py-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-purple-300 border border-white/5 group-hover:border-purple-500/30 rounded-lg transition-colors">
          {detailLabel}
        </span>
      </div>
    </motion.button>
  );
}

function InternModal({
  intern,
  labels,
  t,
  onClose,
}: {
  intern: Intern;
  labels: ReturnType<typeof modalLabels>;
  t: (typeof translations)['uz'];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg rounded-2xl glass-card p-6 sm:p-8 space-y-6 shadow-2xl relative text-left my-4"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all"
          aria-label={labels.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/40 shrink-0">
            <img src={intern.avatar} alt={intern.name} className="w-full h-full object-cover object-top" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white">{intern.name}</h3>
            <p className="text-xs font-mono text-purple-300 uppercase tracking-widest mt-1">
              {intern.direction}
            </p>
            {intern.startedAt && (
              <p className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {labels.since}: {intern.startedAt}
              </p>
            )}
            {intern.overallGrade != null && (
              <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border ${
                intern.overallGrade > 0
                  ? 'bg-amber-500/10 border-amber-500/30'
                  : 'bg-gray-500/10 border-gray-500/30'
              }`}>
                <Star className={`w-4 h-4 ${intern.overallGrade > 0 ? 'text-amber-400 fill-amber-400' : 'text-gray-500'}`} />
                <span className={`text-sm font-black ${intern.overallGrade > 0 ? 'text-amber-300' : 'text-gray-400'}`}>
                  {labels.overall}: {intern.overallGrade}/100
                </span>
              </div>
            )}
          </div>
        </div>

        {intern.bio && (
          <p className="text-sm text-gray-300 font-light leading-relaxed border-l-2 border-purple-500/40 pl-4">
            {intern.bio}
          </p>
        )}

        <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-white/5">
          <img
            src={intern.curator.avatar}
            alt={intern.curator.name}
            className="w-12 h-12 rounded-full object-cover border border-blue-500/30"
          />
          <div>
            <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              {t.internsCurator}
            </p>
            <p className="text-sm font-bold text-white">{intern.curator.name}</p>
            {intern.curator.role && (
              <p className="text-xs text-gray-400">{intern.curator.role}</p>
            )}
          </div>
        </div>

        {intern.activeProjects.length > 0 ? (
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
              <FolderKanban className="w-3.5 h-3.5" />
              {labels.active}
            </h4>
            <ul className="space-y-2">
              {intern.activeProjects.map((p) => (
                <li
                  key={p.title}
                  className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/20 text-sm"
                >
                  <p className="font-semibold text-white">{p.title}</p>
                  {p.role && <p className="text-xs text-gray-400 mt-1">{p.role}</p>}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xs text-gray-500 italic py-2 px-3 rounded-lg bg-black/20 border border-white/5">
            {labels.noProjects}
          </p>
        )}

        {intern.completedProjects.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-emerald-400/90 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {labels.completed}
            </h4>
            <ul className="space-y-2">
              {intern.completedProjects.map((p) => (
                <li
                  key={p.title}
                  className="flex items-start justify-between gap-2 p-3 rounded-lg bg-black/30 border border-white/5 text-sm"
                >
                  <span className="font-medium text-gray-200">{p.title}</span>
                  {p.period && (
                    <span className="text-[10px] font-mono text-gray-500 shrink-0">{p.period}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {intern.curatorGrades.length > 0 ? (
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
              {labels.grades}
            </h4>
            <div className="space-y-3">
              {intern.curatorGrades.map((g, idx) => (
                <div key={g.category} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">{g.category}</span>
                    <span className="text-purple-400 font-mono font-bold">{g.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${g.score}%` }}
                      transition={{ duration: 0.7, delay: idx * 0.08 }}
                      className="h-full bg-brand-gradient rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-xs text-gray-500 italic py-2 px-3 rounded-lg bg-black/20 border border-white/5">
            {labels.noGrades}
          </p>
        )}

        {intern.curatorComment && (
          <div className="space-y-2 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <p className="text-[10px] font-mono text-blue-400/80 uppercase tracking-widest">
              {labels.comment}
            </p>
            <p className="text-sm text-gray-300 italic leading-relaxed">"{intern.curatorComment}"</p>
            <p className="text-xs text-gray-500 text-right">— {intern.curator.name}</p>
          </div>
        )}

        <div className="flex justify-end pt-2 border-t border-white/5">
          <button type="button" onClick={onClose} className="btn-primary px-6 py-2.5 text-xs uppercase tracking-widest">
            {labels.close}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

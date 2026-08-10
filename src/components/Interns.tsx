import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, UserCheck, FolderKanban, CheckCircle2, Star, Calendar } from 'lucide-react';
import { internsData } from '../data';
import { Intern } from '../types';
import { Language, translations } from '../translations';
import { SectionHeading, Modal } from './effects';

interface InternsProps {
  lang: Language;
}

function modalLabels(lang: Language) {
  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';
  const dict = {
    uz: {
      detail: "Batafsil ma'lumot",
      active: 'Hozirgi loyihalar',
      completed: 'Ishlagan loyihalar',
      grades: 'Kurator ballari',
      comment: 'Kurator izohi',
      overall: 'Umumiy ball',
      since: 'Amaliyot boshlangan',
      close: 'Yopish',
      noProjects: 'Hali loyihalarda ishtirok etilmagan',
      noGrades: "Kurator ballari hali qo'yilmagan",
      all: 'Barchasi',
    },
    en: {
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
      all: 'All',
    },
    ru: {
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
      all: 'Все',
    },
  };
  return dict[key];
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

  return (
    <section id="interns" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          command="git branch --list 'intern/*'"
          title={t.internsTitle}
          subtitle={t.internsSub}
          icon={<GraduationCap className="w-3.5 h-3.5" />}
          className="mb-12"
        />

        {internsData.length > 0 && directions.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {directions.map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => setFilter(dir)}
                data-active={filter === dir}
                className="btn-term"
              >
                {dir === 'all' ? labels.all : dir}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="term-window max-w-xl mx-auto">
            <div className="term-bar">
              <span className="term-dot term-dot-r" />
              <span className="term-dot term-dot-y" />
              <span className="term-dot term-dot-g" />
              <span className="term-title flex-1">interns.log</span>
            </div>
            <div className="p-10 text-center space-y-4">
              <GraduationCap className="w-12 h-12 text-purple-400/40 mx-auto" />
              <p className="text-sm text-gray-400 leading-relaxed">{t.internsEmpty}</p>
            </div>
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
  const hasGrade = intern.overallGrade != null && intern.overallGrade > 0;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      className="code-card trace-border group flex flex-col overflow-hidden text-left w-full cursor-pointer"
      style={{ ['--scan-h' as string]: '360px' }}
    >
      {/* Branch sarlavhasi */}
      <div className="flex items-center gap-2 px-3.5 py-2 border-b border-white/5 bg-white/[0.015]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
        <span className="font-mono text-[0.58rem] text-gray-600 truncate">
          intern/{intern.id}
        </span>
      </div>

      <div className="p-5 flex flex-col items-center text-center space-y-3 border-b border-white/5">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-purple-500/25 group-hover:border-purple-400/70 bg-black shrink-0 transition-colors">
          <img
            src={intern.avatar}
            alt={intern.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div>
          <h3 className="text-[0.85rem] font-bold text-white leading-snug group-hover:text-purple-200 transition-colors">
            {intern.name}
          </h3>
          <p className="font-mono text-[0.58rem] text-gray-600 uppercase tracking-widest mt-1.5">
            {t.internsDirection}
          </p>
          <span className="inline-block mt-1.5 font-mono text-[0.62rem] font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/25 px-2.5 py-1 rounded-md">
            {intern.direction}
          </span>

          {intern.overallGrade != null && (
            <p
              className={`mt-2.5 font-mono text-[0.7rem] font-bold flex items-center justify-center gap-1.5 ${
                hasGrade ? 'text-amber-400' : 'text-gray-600'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${hasGrade ? 'fill-amber-400' : ''}`} />
              {intern.overallGrade}/100
            </p>
          )}
        </div>
      </div>

      {/* Kurator */}
      <div className="p-4 flex items-center gap-3 bg-black/25">
        <div className="w-10 h-10 rounded-lg overflow-hidden border border-blue-500/25 bg-black shrink-0">
          <img
            src={intern.curator.avatar}
            alt={intern.curator.name}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.55rem] text-gray-600 uppercase tracking-widest flex items-center gap-1">
            <UserCheck className="w-3 h-3 text-blue-400" />
            {t.internsCurator}
          </p>
          <p className="text-[0.72rem] font-bold text-white truncate mt-0.5">{intern.curator.name}</p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <span className="btn-term w-full flex justify-center !text-[0.62rem] group-hover:!border-purple-500/50 group-hover:!text-white group-hover:!bg-purple-500/10">
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
  const hasGrade = intern.overallGrade != null && intern.overallGrade > 0;

  return (
    <Modal
      open
      onClose={onClose}
      title={`~/interns/${intern.id}.json`}
      closeLabel={labels.close}
      footerLabel={labels.close}
      maxWidth="max-w-lg"
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden border border-purple-500/35 shrink-0">
          <img src={intern.avatar} alt={intern.name} className="w-full h-full object-cover object-top" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white">{intern.name}</h3>
          <p className="font-mono text-[0.68rem] text-purple-300 uppercase tracking-widest mt-1">
            {intern.direction}
          </p>
          {intern.startedAt && (
            <p className="font-mono text-[0.62rem] text-gray-600 mt-2 flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {labels.since}: {intern.startedAt}
            </p>
          )}
          {intern.overallGrade != null && (
            <div
              className={`mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border ${
                hasGrade ? 'bg-amber-500/10 border-amber-500/30' : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${hasGrade ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} />
              <span className={`font-mono text-[0.72rem] font-black ${hasGrade ? 'text-amber-300' : 'text-gray-500'}`}>
                {labels.overall}: {intern.overallGrade}/100
              </span>
            </div>
          )}
        </div>
      </div>

      {intern.bio && (
        <p className="text-[0.8rem] text-gray-300 font-light leading-relaxed border-l-2 border-purple-500/40 pl-4">
          {intern.bio}
        </p>
      )}

      {/* Kurator */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/[0.07]">
        <img
          src={intern.curator.avatar}
          alt={intern.curator.name}
          className="w-11 h-11 rounded-lg object-cover object-top border border-blue-500/25"
        />
        <div className="min-w-0">
          <p className="font-mono text-[0.55rem] text-gray-600 uppercase tracking-widest">
            {t.internsCurator}
          </p>
          <p className="text-[0.8rem] font-bold text-white truncate">{intern.curator.name}</p>
          {intern.curator.role && (
            <p className="text-[0.68rem] text-gray-500 truncate">{intern.curator.role}</p>
          )}
        </div>
      </div>

      {/* Loyihalar */}
      {intern.activeProjects.length > 0 ? (
        <div className="space-y-3">
          <p className="font-mono text-[0.6rem] font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
            <FolderKanban className="w-3.5 h-3.5" />
            {labels.active}
          </p>
          <ul className="space-y-2">
            {intern.activeProjects.map((p) => (
              <li key={p.title} className="p-3 rounded-lg bg-purple-500/[0.06] border border-purple-500/20">
                <p className="text-[0.8rem] font-semibold text-white">{p.title}</p>
                {p.role && <p className="font-mono text-[0.65rem] text-gray-500 mt-1">{p.role}</p>}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="font-mono text-[0.68rem] text-gray-600 py-2.5 px-3 rounded-lg bg-black/30 border border-white/[0.06]">
          <span className="text-gray-700 select-none">// </span>
          {labels.noProjects}
        </p>
      )}

      {intern.completedProjects.length > 0 && (
        <div className="space-y-3">
          <p className="font-mono text-[0.6rem] font-bold text-emerald-400/90 uppercase tracking-widest flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {labels.completed}
          </p>
          <ul className="space-y-2">
            {intern.completedProjects.map((p) => (
              <li
                key={p.title}
                className="flex items-start justify-between gap-2 p-3 rounded-lg bg-black/35 border border-white/[0.06]"
              >
                <span className="text-[0.78rem] font-medium text-gray-200">{p.title}</span>
                {p.period && (
                  <span className="font-mono text-[0.62rem] text-gray-600 shrink-0">{p.period}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Ballar — terminal progress */}
      {intern.curatorGrades.length > 0 ? (
        <div className="space-y-3">
          <p className="font-mono text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">
            {labels.grades}
          </p>
          <div className="space-y-3">
            {intern.curatorGrades.map((g, idx) => (
              <div key={g.category} className="space-y-1.5">
                <div className="flex justify-between font-mono text-[0.7rem]">
                  <span className="text-gray-300">{g.category}</span>
                  <span className="text-purple-400 font-bold">{g.score}%</span>
                </div>
                <div className="term-track">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${g.score}%` }}
                    transition={{ duration: 0.8, delay: 0.12 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="term-fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="font-mono text-[0.68rem] text-gray-600 py-2.5 px-3 rounded-lg bg-black/30 border border-white/[0.06]">
          <span className="text-gray-700 select-none">// </span>
          {labels.noGrades}
        </p>
      )}

      {intern.curatorComment && (
        <div className="space-y-2 p-4 rounded-xl bg-blue-500/[0.05] border border-blue-500/20">
          <p className="font-mono text-[0.58rem] text-blue-400/80 uppercase tracking-widest">
            {labels.comment}
          </p>
          <p className="text-[0.78rem] text-gray-300 italic leading-relaxed">
            {intern.curatorComment}
          </p>
          <p className="font-mono text-[0.62rem] text-gray-600 text-right">— {intern.curator.name}</p>
        </div>
      )}
    </Modal>
  );
}

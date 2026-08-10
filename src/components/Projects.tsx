import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Trophy, Check, Sparkles, MessageSquareCode, Layers } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';
import { Language, translations } from '../translations';
import { SectionHeading, Modal } from './effects';

interface ProjectsProps {
  lang: Language;
}

const isProjectPoster = (src: string) => src.startsWith('/projects/');

/** Loyiha id'sidan barqaror repo nomi */
const repoName = (id: string) => `404-team/${id}`;

export default function Projects({ lang }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const t = translations[lang] || translations.uz;

  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';

  const categories = [
    { id: 'all', label: { uz: 'Barchasi', en: 'All', ru: 'Все' }[key] },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI' },
    { id: 'system', label: 'IoT' },
    { id: 'bot', label: 'Bot' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : selectedCategory === 'ai'
        ? projectsData.filter((p) => p.technologies.some((tech) => /AI|OpenCV|TensorFlow|ML/i.test(tech)))
        : projectsData.filter((p) => p.category === selectedCategory);

  const term = {
    duration: { uz: 'Muddati', en: 'Duration', ru: 'Срок' }[key],
    outcome: { uz: 'Erishilgan natija', en: 'Result', ru: 'Результат' }[key],
    close: { uz: 'Yopish', en: 'Close', ru: 'Закрыть' }[key],
    details: { uz: 'Batafsil', en: 'View details', ru: 'Подробнее' }[key],
    testimonial: { uz: 'Mijoz sharhi', en: 'Client review', ru: 'Отзыв клиента' }[key],
    stack: { uz: 'Texnologik stack', en: 'Tech stack', ru: 'Технологический стек' }[key],
    more: { uz: 'yana', en: 'more', ru: 'ещё' }[key],
  };

  const title =
    lang === 'uz' ? 'BIZNING ELITE LOYIHALARIMIZ'
    : lang === 'ru' ? 'НАШИ ЭЛИТНЫЕ ПРОЕКТЫ'
    : t.projectsTitle.toUpperCase();

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <SectionHeading
            command="git log --oneline --all"
            title={title}
            subtitle={t.projectsSub}
            icon={<Sparkles className="w-3.5 h-3.5" />}
            align="left"
          />

          {/* Filtrlar — CLI bayroqlari uslubida */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                data-active={selectedCategory === cat.id}
                className="btn-term"
              >
                --{cat.id}
              </button>
            ))}
          </div>
        </div>

        {/* Loyihalar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="code-card trace-border group overflow-hidden flex flex-col"
                style={{ ['--scan-h' as string]: '520px' }}
              >
                {/* Repo sarlavhasi */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.015]">
                  <span className="term-dot term-dot-r opacity-60" />
                  <span className="term-dot term-dot-y opacity-60" />
                  <span className="term-dot term-dot-g opacity-60" />
                  <span className="font-mono text-[0.62rem] text-gray-600 truncate ml-1.5 flex-1">
                    {repoName(project.id)}
                  </span>
                  <span className="font-mono text-[0.58rem] px-2 py-0.5 rounded border border-purple-500/25 bg-purple-500/10 text-purple-300 shrink-0">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Rasm */}
                <div
                  className={`relative w-full overflow-hidden border-b border-white/5 ${
                    isProjectPoster(project.image)
                      ? 'bg-[#080d16] min-h-[240px] sm:min-h-[300px] flex items-center justify-center'
                      : 'aspect-video bg-black'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className={
                      isProjectPoster(project.image)
                        ? 'w-full h-auto max-h-[400px] object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out'
                        : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04040c] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-crt opacity-40 pointer-events-none" />

                  {/* Metrika overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-[0.66rem] font-bold text-white bg-brand-gradient px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg">
                      <Trophy className="w-3 h-3" />
                      {project.stats.value}
                    </span>
                    <span className="font-mono text-[0.6rem] text-gray-300 bg-black/85 border border-white/10 px-2 py-1 rounded-md flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-purple-400" />
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Tavsif */}
                <div className="p-5 space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white group-hover:text-purple-200 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[0.76rem] text-gray-400 leading-relaxed font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-3 pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[0.6rem] bg-black/60 text-gray-500 border border-white/[0.07] px-2 py-1 rounded group-hover:border-purple-500/25 group-hover:text-gray-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-[0.6rem] text-purple-400 px-2 py-1">
                          +{project.technologies.length - 4} {term.more}
                        </span>
                      )}
                    </div>

                    <button
                      id={`view-project-details-btn-${project.id}`}
                      onClick={() => setActiveProject(project)}
                      className="btn-term w-full justify-center !text-[0.66rem]"
                    >
                      cat README.md — {term.details}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Loyiha modali */}
      <AnimatePresence>
        {activeProject && (
          <Modal
            open
            onClose={() => setActiveProject(null)}
            title={`${repoName(activeProject.id)} — README.md`}
            closeLabel={term.close}
            footerLabel={term.close}
            maxWidth="max-w-3xl"
            id="project-modal-card"
          >
            {/* Poster */}
            <div className="relative -mx-5 sm:-mx-7 -mt-5 sm:-mt-7 mb-2 overflow-hidden border-b border-white/5 bg-[#080d16]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className={
                  isProjectPoster(activeProject.image)
                    ? 'w-full h-auto max-h-[42vh] object-contain mx-auto'
                    : 'w-full h-56 object-cover'
                }
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b1a] via-[#0b0b1a]/25 to-transparent" />
              <div className="absolute inset-0 bg-crt opacity-40" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="font-mono text-[0.6rem] font-bold bg-brand-gradient text-white px-2.5 py-1 rounded-md uppercase tracking-widest">
                  {activeProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white mt-2 leading-tight">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            <p className="text-[0.82rem] text-gray-300 font-light leading-relaxed">
              {activeProject.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Metrikalar */}
              <div className="space-y-3 md:col-span-1">
                <div className="p-4 rounded-xl bg-black/50 border border-white/[0.07] space-y-1.5">
                  <p className="font-mono text-[0.58rem] text-gray-600 uppercase tracking-widest">
                    {term.outcome}
                  </p>
                  <p className="text-xl font-black text-purple-400 font-mono">
                    {activeProject.stats.value}
                  </p>
                  <p className="text-[0.7rem] text-gray-500 font-light">{activeProject.stats.label}</p>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/[0.07] space-y-1.5">
                  <p className="font-mono text-[0.58rem] text-gray-600 uppercase tracking-widest flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-purple-400" />
                    {term.duration}
                  </p>
                  <p className="font-mono text-sm font-bold text-white uppercase">
                    {activeProject.duration}
                  </p>
                </div>
              </div>

              {/* Xususiyatlar — commit ro'yxati */}
              <div className="md:col-span-2 space-y-3 pl-0 md:pl-5 md:border-l border-purple-500/25">
                <p className="font-mono text-[0.6rem] text-purple-400 uppercase tracking-widest font-bold">
                  {t.projectsFeatures}
                </p>
                <ul className="space-y-2">
                  {activeProject.features.map((feat, i) => (
                    <motion.li
                      key={feat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      className="flex items-start gap-2 text-[0.76rem] text-gray-300 font-light"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack */}
            <div className="space-y-2">
              <p className="font-mono text-[0.6rem] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Layers className="w-3 h-3" />
                {term.stack}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.68rem] bg-black/60 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Mijoz sharhi */}
            {activeProject.clientFeedback && (
              <div className="p-4 rounded-xl bg-purple-500/[0.05] border border-purple-500/20 border-l-2 border-l-purple-500 space-y-3">
                <p className="font-mono text-[0.6rem] text-purple-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <MessageSquareCode className="w-3.5 h-3.5" />
                  {term.testimonial}
                </p>
                <p className="text-[0.78rem] text-gray-300 italic font-light leading-relaxed">
                  {activeProject.clientFeedback.text}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[0.62rem] pt-2 border-t border-white/5">
                  <span className="text-purple-400 font-bold">{activeProject.clientFeedback.author}</span>
                  <span className="text-gray-600">{activeProject.clientFeedback.position}</span>
                </div>
              </div>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Calendar, Clock, Trophy, Check, X, Sparkles, MessageSquare } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';
import { Language, translations } from '../translations';

interface ProjectsProps {
  lang: Language;
}

const isProjectPoster = (src: string) => src.startsWith('/projects/');

export default function Projects({ lang }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const t = translations[lang] || translations.uz;

  const categories = [
    { id: 'all', label: lang === 'uz' ? 'Barchasi' : lang === 'en' ? 'All' : 'Все' },
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
        ? projectsData.filter((p) => p.technologies.some((t) => /AI|OpenCV|TensorFlow|ML/i.test(t)))
        : projectsData.filter((p) => p.category === selectedCategory);

  // Localized terms inside
  const termDuration = lang === 'uz' ? 'Muddati' : lang === 'en' ? 'Duration' : lang === 'ru' ? 'Срок' : 'Süre';
  const termOutcome = lang === 'uz' ? 'Erishilgan natija' : lang === 'en' ? 'Result' : lang === 'ru' ? 'Результат' : 'Sonuç';
  const termClose = lang === 'uz' ? 'Yopish' : lang === 'en' ? 'Close' : lang === 'ru' ? 'Закрыть' : 'Kapat';
  const termDetailsBtn = lang === 'uz' ? "Batafsil ma'lumot va sharh" : lang === 'en' ? "Full Details & Testimonial" : lang === 'ru' ? "Подробности и отзыв" : "Detaylar ve Yorum";
  const termTestimonial = lang === 'uz' ? "Mijozning Fikri" : lang === 'en' ? "Client Testimonial" : lang === 'ru' ? "Отзыв клиента" : "Müşteri Yorumu";

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-white/5 text-left">
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-center md:text-left max-w-2xl space-y-4">
            <span className="section-badge">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.projectsBadge}</span>
            </span>
            <h2 className="section-title">{t.projectsTitle}</h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed">{t.projectsSub}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-gradient text-white border border-purple-500/40'
                    : 'bg-black/50 text-gray-400 hover:text-white border border-white/10 hover:border-purple-500/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card overflow-hidden rounded-2xl group flex flex-col justify-between transition-all duration-300"
              >
                
                {/* Thumbnail */}
                <div
                  className={`relative w-full overflow-hidden border-b border-white/5 ${
                    isProjectPoster(project.image)
                      ? 'bg-[#0a0f1a] min-h-[280px] sm:min-h-[340px] flex items-center justify-center'
                      : 'aspect-video bg-black'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      isProjectPoster(project.image)
                        ? 'w-full h-auto max-h-[420px] object-contain group-hover:scale-[1.02] transition-transform duration-500'
                        : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                    }
                  />
                  {!isProjectPoster(project.image) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  )}
                  {isProjectPoster(project.image) && (
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
                  )}
                  
                  {/* Category Pill Over Image */}
                  <span className="absolute top-4 left-4 text-[9px] font-mono font-bold bg-black border border-purple-500/40 text-purple-400 px-3 py-1 rounded-none uppercase tracking-widest">
                    {project.categoryLabel}
                  </span>

                  {/* Stat Indicator overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-black bg-brand-gradient px-3 py-1.5 rounded-none flex items-center space-x-1.5">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{project.stats.value}</span>
                    </span>
                    <span className="text-[10px] font-mono text-gray-300 bg-black/95 border border-white/10 px-2.5 py-1 rounded-none">
                      {termDuration}: {project.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-display font-black italic uppercase text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Pills */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono bg-black text-gray-400 border border-white/5 px-2.5 py-1 rounded-none uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] font-mono bg-black text-purple-400 px-2 py-1 rounded-none">
                          +{project.technologies.length - 4} {lang === 'uz' ? 'yana' : 'more'}
                        </span>
                      )}
                    </div>

                    {/* Button trigger */}
                    <div className="pt-2">
                      <button
                        id={`view-project-details-btn-${project.id}`}
                        onClick={() => setActiveProject(project)}
                        className="w-full py-3 rounded-none bg-black hover:bg-brand-gradient hover:text-black text-xs font-bold uppercase tracking-widest transition-colors duration-300 text-gray-300 border border-white/10 hover:border-purple-500/40 cursor-pointer"
                      >
                        {termDetailsBtn}
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <div
              id="project-modal-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div
                id="project-modal-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#0e0e0e] w-full max-w-3xl rounded-none overflow-hidden border border-white/10 my-8 shadow-2xl relative text-left max-h-[92vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  id="close-project-modal-btn"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-none bg-black border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-black transition-all cursor-pointer"
                  aria-label="Modalni yopish"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero / poster inside Modal */}
                {isProjectPoster(activeProject.image) ? (
                  <div className="relative w-full bg-[#0a0f1a] border-b border-white/5">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-16">
                      <span className="text-[10px] font-mono font-bold bg-brand-gradient text-black px-3 py-1 rounded-none uppercase tracking-widest">
                        {activeProject.categoryLabel}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black italic uppercase text-white mt-2">
                        {activeProject.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                <div className="relative h-64 w-full overflow-hidden bg-black border-b border-white/5">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-mono font-bold bg-brand-gradient text-black px-3 py-1 rounded-none uppercase tracking-widest">
                      {activeProject.categoryLabel}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black italic uppercase text-white mt-2">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>
                )}

                {/* Details grid */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Left-Right grid details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Left stats block */}
                    <div className="space-y-4 md:col-span-1">
                      <div className="p-4 rounded-none bg-black border border-white/5 space-y-3">
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                          {termOutcome}
                        </span>
                        <div className="text-xl font-display font-black text-purple-400 italic">
                          {activeProject.stats.value}
                        </div>
                        <span className="text-xs text-gray-400 block font-light">
                          {activeProject.stats.label}
                        </span>
                      </div>

                      <div className="p-4 rounded-none bg-black border border-white/5 space-y-2 text-xs font-mono">
                        <div className="flex items-center space-x-1.5 text-gray-400">
                          <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>{t.projectsDuration}:</span>
                        </div>
                        <div className="text-white font-bold uppercase">{activeProject.duration}</div>
                      </div>
                    </div>

                    {/* Right features/technologies block */}
                    <div className="space-y-4 md:col-span-2 text-left visual-flare-line pl-6 border-l border-purple-500/40">
                      <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
                        {t.projectsFeatures}
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.features.map((feat, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-gray-300 font-light">
                            <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Technologies row */}
                  <div className="space-y-2 text-left">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">
                      Texnologik Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono bg-black text-purple-400 border border-white/5 px-3 py-1.5 rounded-none uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client testimonial feedback */}
                  {activeProject.clientFeedback && (
                    <div className="p-5 rounded-none bg-white/5 border border-white/5 space-y-3 text-left border-l-2 border-purple-500/40">
                      <div className="flex items-center space-x-1.5 text-purple-400 font-bold text-xs font-mono uppercase tracking-widest">
                        <MessageSquare className="w-4 h-4" />
                        <span>{termTestimonial}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 italic font-light leading-relaxed">
                        "{activeProject.clientFeedback.text}"
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/5">
                        <span className="text-purple-400 font-bold">{activeProject.clientFeedback.author}</span>
                        <span className="text-gray-500 uppercase">{activeProject.clientFeedback.position}</span>
                      </div>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                    <button
                      id="close-project-modal-bottom-btn"
                      onClick={() => setActiveProject(null)}
                      className="px-6 py-3 rounded-none bg-brand-gradient hover:bg-white text-black text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                    >
                      {termClose}
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Send, X } from 'lucide-react';
import { teamMembersData, teamGroups } from '../data';
import { TeamMember } from '../types';
import { Language, translations } from '../translations';

interface TeamProps {
  lang: Language;
}

function localizeMember(member: TeamMember, lang: Language) {
  let bio = member.bio;
  let role = member.role;

  if (lang !== 'uz') {
    if (member.id === 'nodirbek') {
      role = lang === 'en' ? 'Founder & CEO' : 'Основатель и CEO';
      bio =
        lang === 'en'
          ? 'Architect of high-performance systems and company operations with 7 years of experience. Pioneer of clean code.'
          : 'Архитектор высокопроизводительных систем и руководитель компании с 7-летним опытом. Ценитель чистого кода.';
    } else if (member.id === 'dilshod') {
      role =
        lang === 'en'
          ? 'Co-Founder · Head of Cybersecurity'
          : 'Сооснователь · Руководитель кибербезопасности';
      bio =
        lang === 'en'
          ? 'Leads cybersecurity operations. Fights cyber attacks and ensures every line of code and every project stays under reliable protection.'
          : 'Руководит кибербезопасностью. Борется с кибератаками и обеспечивает надёжную защиту каждой строки кода и каждого проекта.';
    } else if (member.id === 'umar') {
      role =
        lang === 'en'
          ? 'Co-Founder · Head of Full-Stack Development'
          : 'Сооснователь · Руководитель Full-Stack разработки';
      bio =
        lang === 'en'
          ? 'Leads the full-stack development department. Builds fast, stable, and scalable software by uniting frontend and backend architecture.'
          : 'Руководит отделом full-stack разработки. Создаёт быстрые, стабильные и масштабируемые решения, объединяя frontend и backend архитектуру.';
    } else if (member.id === 'shaxlo') {
      role =
        lang === 'en'
          ? 'Head of Design · Chief Assistant to CEO'
          : 'Руководитель отдела дизайна · Главный помощник CEO';
      bio =
        lang === 'en'
          ? 'Leads the design department, shapes brand identity, and supports the CEO in daily operations. Expert at blending UX with visual aesthetics.'
          : 'Руководит отделом дизайна, формирует бренд-идентичность и помогает CEO в операционной работе. Мастер сочетания UX и визуальной эстетики.';
    } else if (member.id === 'munisa') {
      role =
        lang === 'en'
          ? 'Head of AI Department · AI Specialist'
          : 'Руководитель отдела ИИ · Специалист по ИИ';
      bio =
        lang === 'en'
          ? 'Leads the AI department, develops ML models and computer vision solutions. Active in scientific research and AI for Social Impact projects.'
          : 'Руководит отделом ИИ, разрабатывает ML-модели и решения computer vision. Активно участвует в научных исследованиях и проектах AI for Social Impact.';
    } else if (member.id === 'ulzada') {
      role =
        lang === 'en'
          ? 'Head of SMM Department'
          : 'Руководитель отдела SMM';
      bio =
        lang === 'en'
          ? 'Leads the SMM department. Crafts effective, creative ad campaigns tailored to every project, partner, and client — engaging audiences, building trust, and driving measurable business growth.'
          : 'Руководит отделом SMM. Разрабатывает эффективные и креативные рекламные кампании для каждого проекта, партнёра и клиента — привлекает аудиторию, укрепляет доверие и повышает бизнес-результаты.';
    } else if (member.id === 'aynur') {
      role = lang === 'en' ? 'SMM Targeting Specialist' : 'Специалист по SMM таргетингу';
      bio =
        lang === 'en'
          ? 'Manages targeted ad campaigns on social media. Expert in audience targeting, content strategy, and conversion optimization.'
          : 'Управляет таргетированными рекламными кампаниями в соцсетях. Эксперт по таргетингу аудитории, контент-стратегии и оптимизации конверсии.';
    } else if (member.id === 'behruz') {
      role = lang === 'en' ? 'Frontend Developer' : 'Frontend разработчик';
      bio =
        lang === 'en'
          ? 'Builds modern, fast user interfaces. Experienced frontend developer in React, animations, and responsive design.'
          : 'Создаёт современные и быстрые пользовательские интерфейсы. Опытный frontend-разработчик в React, анимациях и адаптивном дизайне.';
    } else if (member.id === 'jamshed') {
      role = lang === 'en' ? 'Backend Developer' : 'Backend разработчик';
      bio =
        lang === 'en'
          ? 'Specialist in server architecture, databases, and API development. Builds fast, secure, and reliable backend systems.'
          : 'Специалист по серверной архитектуре, базам данных и API. Разрабатывает быстрые, безопасные и надёжные backend-системы.';
    }
  }

  return { bio, role };
}

function groupLabel(group: (typeof teamGroups)[0], lang: Language) {
  if (lang === 'en') return group.labelEn;
  if (lang === 'ru') return group.labelRu;
  return group.labelUz;
}

function groupGridClass(count: number) {
  if (count === 1) return 'grid-cols-1 max-w-[220px]';
  if (count === 2) return 'grid-cols-2 max-w-md sm:max-w-lg';
  return 'grid-cols-1 sm:grid-cols-3 max-w-3xl';
}

export default function Team({ lang }: TeamProps) {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const t = translations[lang] || translations.uz;

  const termSkillsBtn =
    lang === 'uz'
      ? "Ko'nikmalar va Aloqa"
      : lang === 'en'
        ? 'Skills & Contact'
        : lang === 'ru'
          ? 'Навыки и Контакты'
          : 'Yetenekler & İletişim';
  const termBioHeading =
    lang === 'uz'
      ? 'TARJIMAI HOL & FAOLIYAT'
      : lang === 'en'
        ? 'BIO & ACTIVITIES'
        : lang === 'ru'
          ? 'БИОГРАФИЯ И ДЕЯТЕЛЬНОСТЬ'
          : 'BİYOGRAFİ & FAALİYETLER';

  const membersById = Object.fromEntries(teamMembersData.map((m) => [m.id, m]));

  const renderCard = (member: TeamMember, index: number, highlight?: boolean) => {
    const { bio, role } = localizeMember(member, lang);

    return (
      <motion.div
        key={member.id}
        id={`team-card-${member.id}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className={`group glass-card flex flex-col items-center p-4 text-center w-full transition-all duration-300 ${
          highlight ? 'ring-1 ring-purple-500/30' : ''
        }`}
      >
        <div className="relative w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full overflow-hidden bg-black border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors shrink-0">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mt-3 space-y-1 w-full">
          <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors leading-snug line-clamp-2">
            {member.name}
          </h3>
          <span className="text-[9px] sm:text-[10px] font-mono text-purple-400/80 uppercase tracking-wide block leading-tight line-clamp-2">
            {role}
          </span>
        </div>

        <p className="mt-2 text-[10px] sm:text-xs text-gray-400 leading-relaxed font-light line-clamp-2 min-h-[2.5rem]">
          {bio}
        </p>

        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {member.skills.slice(0, 2).map((sk, idx) => (
            <span
              key={idx}
              className="text-[8px] font-mono bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-md text-gray-400 uppercase tracking-wider"
            >
              {sk.name}
            </span>
          ))}
        </div>

        <div className="w-full pt-3 mt-2 border-t border-white/5">
          <button
            id={`view-member-skills-btn-${member.id}`}
            onClick={() => setActiveMember(member)}
            className="w-full py-2 bg-purple-500/10 hover:bg-brand-gradient hover:text-white text-[10px] font-bold text-gray-300 rounded-lg transition-all uppercase tracking-wider border border-purple-500/20 cursor-pointer"
          >
            {termSkillsBtn}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="team" className="py-24 relative overflow-hidden border-t border-white/5 text-left">
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="section-badge">
            <Users className="w-3.5 h-3.5" />
            <span>{t.teamBadge}</span>
          </span>
          <h2 className="section-title">{t.teamTitle}</h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">{t.teamSub}</p>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-2xl font-black text-white">50+</span>
            <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider">
              {lang === 'uz' ? "Jamoa a'zosi" : lang === 'en' ? 'Team Members' : 'Сотрудников'}
            </span>
          </div>
        </div>

        <div className="space-y-12">
          {teamGroups.map((group) => {
            const members = group.memberIds
              .map((id) => membersById[id])
              .filter(Boolean) as TeamMember[];

            if (members.length === 0) return null;

            const isLeadership = group.id === 'leadership';

            return (
              <div key={group.id} className="space-y-5">
                <p className="text-center text-[10px] font-mono font-bold text-purple-400/70 uppercase tracking-[0.2em]">
                  {groupLabel(group, lang)}
                </p>
                <div className={`grid gap-4 sm:gap-5 mx-auto justify-items-center ${groupGridClass(members.length)}`}>
                  {members.map((member, index) => renderCard(member, index, isLeadership))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Kengaytirilgan jamoa — 50+ vizual */}
        <div className="mt-16 pt-12 border-t border-white/5 text-center space-y-6">
          <p className="text-[10px] font-mono font-bold text-purple-400/70 uppercase tracking-[0.2em]">
            {lang === 'uz' ? 'Kengaytirilgan jamoa' : lang === 'en' ? 'Extended Team' : 'Расширенная команда'}
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            {lang === 'uz'
              ? "Rahbariyat va bo'lim boshliqlaridan tashqari yana 40+ dasturchi, dizayner, AI va SMM mutaxassislari loyihalarda faol ishlaydi."
              : lang === 'en'
                ? 'Beyond leadership, 40+ more developers, designers, AI and SMM specialists actively work on projects.'
                : 'Помимо руководства, ещё 40+ разработчиков, дизайнеров и специалистов по AI и SMM работают над проектами.'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto px-4">
            {Array.from({ length: 42 }).map((_, i) => (
              <div
                key={i}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500/15 to-blue-500/10 border border-purple-500/20 flex items-center justify-center"
                aria-hidden
              >
                <Users className="w-3.5 h-3.5 text-purple-400/50" />
              </div>
            ))}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-gradient flex items-center justify-center text-[9px] sm:text-[10px] font-black text-white shadow-lg shadow-purple-500/30">
              50+
            </div>
          </div>
        </div>

        <AnimatePresence>
          {activeMember && (
            <div
              id="team-modal-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            >
              <motion.div
                id="team-modal-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg rounded-2xl overflow-hidden glass-card p-6 sm:p-8 space-y-6 shadow-2xl relative text-left"
              >
                <button
                  id="close-team-modal-btn"
                  onClick={() => setActiveMember(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all cursor-pointer"
                  aria-label="Yopish"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-4 pb-4 border-b border-white/5 text-left">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-black border-2 border-purple-500/30 shrink-0">
                    <img
                      src={activeMember.modalAvatar || activeMember.avatar}
                      alt={activeMember.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{activeMember.name}</h3>
                    <p className="text-xs font-mono text-purple-300 uppercase tracking-widest">
                      {localizeMember(activeMember, lang).role}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    {termBioHeading}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {localizeMember(activeMember, lang).bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    {t.teamSkills}
                  </span>
                  <div className="space-y-3">
                    {activeMember.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300 font-medium uppercase tracking-wider text-[11px]">
                            {skill.name}
                          </span>
                          <span className="text-purple-400 font-mono font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="h-full bg-brand-gradient rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {activeMember.id === 'nodirbek' && activeMember.socials.telegram && (
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                      {t.teamSocials}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={activeMember.socials.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs text-gray-300 hover:bg-brand-gradient hover:text-white transition-all flex items-center space-x-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Telegram — @evanshar03</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                  <button
                    id="close-team-modal-bottom-btn"
                    onClick={() => setActiveMember(null)}
                    className="px-6 py-2.5 rounded-xl bg-brand-gradient text-white hover:opacity-90 text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    {t.teamClose}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

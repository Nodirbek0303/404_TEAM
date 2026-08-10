import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Send, Terminal } from 'lucide-react';
import { teamMembersData, teamGroups } from '../data';
import { TeamMember } from '../types';
import { Language, translations } from '../translations';
import { SectionHeading, Modal, CountUp } from './effects';

interface TeamProps {
  lang: Language;
}

/** uz/en/ru tarjimalar. Boshqa tillar ingliz tiliga tushadi (rus emas). */
const memberI18n: Record<string, { role: Record<'uz' | 'en' | 'ru', string>; bio: Record<'uz' | 'en' | 'ru', string> }> = {
  nodirbek: {
    role: { uz: 'Asoschi & CEO', en: 'Founder & CEO', ru: 'Основатель и CEO' },
    bio: {
      uz: "7 yillik tajribaga ega arxitektor. Yuqori yuklamali tizimlar, xavfsizlik va kompaniya faoliyatini boshqarish bo'yicha yetakchi.",
      en: 'Architect of high-performance systems and company operations with 7 years of experience. Pioneer of clean code.',
      ru: 'Архитектор высокопроизводительных систем и руководитель компании с 7-летним опытом. Ценитель чистого кода.',
    },
  },
  dilshod: {
    role: {
      uz: "Kompaniya asoschilaridan biri · Kiberxavfsizlik bo'limi Boshlig'i",
      en: 'Co-Founder · Head of Cybersecurity',
      ru: 'Сооснователь · Руководитель кибербезопасности',
    },
    bio: {
      uz: "Kiberxavfsizlik bo'limini boshqaradi. Kiber hujumlarga qarshi kurashadi va har bir kod himoya ostida bo'lishini ta'minlaydi.",
      en: 'Leads cybersecurity operations. Fights cyber attacks and ensures every line of code stays under reliable protection.',
      ru: 'Руководит кибербезопасностью. Борется с кибератаками и обеспечивает надёжную защиту каждой строки кода.',
    },
  },
  umar: {
    role: {
      uz: "Kompaniya asoschilaridan biri · Full-Stack bo'limi Boshlig'i",
      en: 'Co-Founder · Head of Full-Stack Development',
      ru: 'Сооснователь · Руководитель Full-Stack разработки',
    },
    bio: {
      uz: 'Full-stack koding bo\'limini boshqaradi. Frontend va backend arxitekturasini birlashtirib, masshtablanuvchan yechimlar yaratadi.',
      en: 'Leads full-stack development. Builds fast, stable, scalable software by uniting frontend and backend architecture.',
      ru: 'Руководит full-stack разработкой. Создаёт быстрые и масштабируемые решения, объединяя frontend и backend.',
    },
  },
  shaxlo: {
    role: {
      uz: "Dizayn bo'limi Boshlig'i · CEO bosh yordamchisi",
      en: 'Head of Design · Chief Assistant to CEO',
      ru: 'Руководитель дизайна · Главный помощник CEO',
    },
    bio: {
      uz: 'Dizayn bo\'limini boshqaradi, brend identitetini shakllantiradi va CEO operatsion ishlariga yordam beradi.',
      en: 'Leads design, shapes brand identity, and supports the CEO in daily operations. Expert at blending UX with visual aesthetics.',
      ru: 'Руководит дизайном, формирует бренд-идентичность и помогает CEO в операционной работе.',
    },
  },
  munisa: {
    role: {
      uz: "Sun'iy intellekt bo'limi Boshlig'i · AI mutaxassisi",
      en: 'Head of AI Department · AI Specialist',
      ru: 'Руководитель отдела ИИ · Специалист по ИИ',
    },
    bio: {
      uz: "Sun'iy intellekt bo'limini boshqaradi, ML modellari va computer vision yechimlarini ishlab chiqadi.",
      en: 'Leads the AI department, develops ML models and computer vision solutions. Active in AI for Social Impact projects.',
      ru: 'Руководит отделом ИИ, разрабатывает ML-модели и решения computer vision.',
    },
  },
  ulzada: {
    role: { uz: "SMM bo'limi Boshlig'i", en: 'Head of SMM Department', ru: 'Руководитель отдела SMM' },
    bio: {
      uz: 'SMM bo\'limini boshqaradi. Brendga mos, samarali va ijodiy reklama kampaniyalarini ishlab chiqadi.',
      en: 'Leads the SMM department. Crafts effective, creative campaigns that engage audiences and drive business growth.',
      ru: 'Руководит отделом SMM. Разрабатывает эффективные и креативные рекламные кампании.',
    },
  },
  aynur: {
    role: { uz: 'SMM target mutaxassisi', en: 'SMM Targeting Specialist', ru: 'Специалист по SMM таргетингу' },
    bio: {
      uz: 'Ijtimoiy tarmoqlarda maqsadli reklama kampaniyalarini boshqaradi. Targeting va konversiya bo\'yicha mutaxassis.',
      en: 'Manages targeted ad campaigns on social media. Expert in audience targeting and conversion optimization.',
      ru: 'Управляет таргетированной рекламой в соцсетях. Эксперт по таргетингу и оптимизации конверсии.',
    },
  },
  behruz: {
    role: { uz: 'Frontend mutaxassisi', en: 'Frontend Developer', ru: 'Frontend разработчик' },
    bio: {
      uz: 'Zamonaviy va tezkor foydalanuvchi interfeyslarini yaratadi. React va responsive dizayn bo\'yicha tajribali.',
      en: 'Builds modern, fast user interfaces. Experienced in React, animations, and responsive design.',
      ru: 'Создаёт современные и быстрые интерфейсы. Опытен в React, анимациях и адаптивном дизайне.',
    },
  },
  jamshed: {
    role: { uz: 'Backend mutaxassisi', en: 'Backend Developer', ru: 'Backend разработчик' },
    bio: {
      uz: "Server arxitekturasi, ma'lumotlar bazasi va API yaratish bo'yicha mutaxassis.",
      en: 'Specialist in server architecture, databases, and API development. Builds secure, reliable backend systems.',
      ru: 'Специалист по серверной архитектуре, базам данных и API.',
    },
  },
};

/** Har bir a'zoga barqaror "commit hash" — id'dan hosil qilinadi */
function shortHash(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h.toString(16).padStart(7, '0').slice(0, 7);
}

function localizeMember(member: TeamMember, lang: Language) {
  const entry = memberI18n[member.id];
  if (!entry) return { role: member.role, bio: member.bio };
  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';
  return { role: entry.role[key], bio: entry.bio[key] };
}

function groupLabel(group: (typeof teamGroups)[0], lang: Language) {
  if (lang === 'ru') return group.labelRu;
  if (lang === 'uz') return group.labelUz;
  return group.labelEn;
}

function groupGridClass(count: number) {
  if (count === 1) return 'grid-cols-1 max-w-[240px]';
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2 max-w-md sm:max-w-xl';
  return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl';
}

export default function Team({ lang }: TeamProps) {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const t = translations[lang] || translations.uz;

  const membersById = useMemo(
    () => Object.fromEntries(teamMembersData.map((m) => [m.id, m])),
    []
  );

  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';

  const labels = {
    openProfile: { uz: 'Profilni ochish', en: 'Open profile', ru: 'Открыть профиль' }[key],
    bio: { uz: 'README.md', en: 'README.md', ru: 'README.md' }[key],
    close: { uz: 'Yopish', en: 'Close', ru: 'Закрыть' }[key],
    extended: { uz: 'Kengaytirilgan jamoa', en: 'Extended team', ru: 'Расширенная команда' }[key],
    extendedDesc: {
      uz: "Rahbariyat va bo'lim boshliqlaridan tashqari yana 40+ dasturchi, dizayner, AI va SMM mutaxassislari loyihalarda faol ishlaydi.",
      en: 'Beyond leadership, 40+ more developers, designers, AI and SMM specialists actively work on projects.',
      ru: 'Помимо руководства, ещё 40+ разработчиков, дизайнеров и специалистов по AI и SMM работают над проектами.',
    }[key],
    members: { uz: "Jamoa a'zosi", en: 'Team members', ru: 'Сотрудников' }[key],
  };

  const title =
    lang === 'uz' ? 'BIZNING ELITE JAMOAMIZ'
    : lang === 'ru' ? 'НАША ЭЛИТНАЯ КОМАНДА'
    : t.teamTitle.toUpperCase();

  const renderCard = (member: TeamMember, index: number, highlight?: boolean) => {
    const { bio, role } = localizeMember(member, lang);

    return (
      <motion.div
        key={member.id}
        id={`team-card-${member.id}`}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        className={`code-card trace-border group flex flex-col p-5 pt-7 text-center w-full cursor-default relative ${
          highlight ? 'ring-1 ring-purple-500/25' : ''
        }`}
        style={{ ['--scan-h' as string]: '330px' }}
      >
        {/* Commit hash — hover'da ko'rinadi */}
        <span className="file-tag">@{member.id} · {shortHash(member.id)}</span>

        {/* Avatar */}
        <div className="relative mx-auto w-20 h-20 sm:w-[5.5rem] sm:h-[5.5rem] rounded-2xl overflow-hidden bg-black border border-purple-500/25 group-hover:border-purple-400/70 transition-colors shrink-0">
          <img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          {/* Onlayn LED */}
          <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0b0b1a]" />
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-[0.82rem] font-bold text-white group-hover:text-purple-200 transition-colors leading-snug line-clamp-2">
            {member.name}
          </h3>
          <p className="font-mono text-[0.6rem] text-purple-400/85 uppercase tracking-wide leading-tight line-clamp-2">
            {role}
          </p>
        </div>

        <p className="mt-2.5 text-[0.7rem] text-gray-500 leading-relaxed font-light line-clamp-2 min-h-[2.4rem]">
          {bio}
        </p>

        {/* Skill teglari */}
        <div className="flex flex-wrap gap-1 justify-center mt-3">
          {member.skills.slice(0, 2).map((sk) => (
            <span
              key={sk.name}
              className="font-mono text-[0.55rem] bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded text-gray-500 group-hover:text-purple-300 group-hover:border-purple-500/40 transition-colors"
            >
              {sk.name}
            </span>
          ))}
        </div>

        <div className="w-full pt-3.5 mt-auto">
          <button
            id={`view-member-skills-btn-${member.id}`}
            onClick={() => setActiveMember(member)}
            className="btn-term w-full !text-[0.62rem] justify-center"
          >
            {labels.openProfile}
          </button>
        </div>
      </motion.div>
    );
  };

  const active = activeMember;
  const activeLocalized = active ? localizeMember(active, lang) : null;

  return (
    <section id="team" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          command="git shortlog -sn --all"
          title={title}
          subtitle={t.teamSub}
          icon={<Users className="w-3.5 h-3.5" />}
          className="mb-6"
        />

        {/* Jamoa hisoblagichi */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-purple-500/25 bg-purple-500/[0.07] font-mono">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-2xl font-black text-white">
              <CountUp value="50+" duration={1800} />
            </span>
            <span className="text-[0.68rem] text-purple-300 uppercase tracking-wider">
              {labels.members}
            </span>
          </div>
        </div>

        {/* Guruhlar */}
        <div className="space-y-12">
          {teamGroups.map((group) => {
            const members = group.memberIds
              .map((id) => membersById[id])
              .filter(Boolean) as TeamMember[];

            if (members.length === 0) return null;
            const isLeadership = group.id === 'leadership';

            return (
              <div key={group.id} className="space-y-5">
                <div className="flex items-center gap-3 max-w-4xl mx-auto">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/25" />
                  <p className="font-mono text-[0.62rem] font-bold text-purple-400/80 uppercase tracking-[0.22em] whitespace-nowrap">
                    <span className="text-gray-700 select-none">// </span>
                    {groupLabel(group, lang)}
                  </p>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/25" />
                </div>

                <div className={`grid gap-4 sm:gap-5 mx-auto justify-items-center ${groupGridClass(members.length)}`}>
                  {members.map((member, index) => renderCard(member, index, isLeadership))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Kengaytirilgan jamoa */}
        <div className="mt-16 pt-12 border-t border-white/5 text-center space-y-5">
          <p className="font-mono text-[0.62rem] font-bold text-purple-400/70 uppercase tracking-[0.22em]">
            <span className="text-gray-700 select-none">// </span>
            {labels.extended}
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            {labels.extendedDesc}
          </p>

          {/* 40+ contributor — GitHub hissa grafigi uslubida */}
          <div className="inline-grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1.5 mx-auto px-4 pt-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 20) * 0.025, duration: 0.3 }}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[3px] border border-purple-500/20 hover:bg-purple-400/70 transition-colors duration-200 ${
                  i % 3 === 0 ? 'bg-purple-500/45' : i % 3 === 1 ? 'bg-purple-500/25' : 'bg-purple-500/12'
                }`}
                aria-hidden
              />
            ))}
          </div>
          <p className="font-mono text-[0.6rem] text-gray-700">
            <span className="text-purple-400/80">+10</span> more contributors · contributions in the last 12 months
          </p>
        </div>
      </div>

      {/* Profil modali */}
      <AnimatePresence>
        {active && activeLocalized && (
          <Modal
            open
            onClose={() => setActiveMember(null)}
            title={`~/team/${active.id}.profile.json`}
            closeLabel={labels.close}
            footerLabel={labels.close}
            maxWidth="max-w-lg"
            id="team-modal-card"
          >
            <div className="flex items-center gap-4 pb-4 border-b border-white/5">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-black border border-purple-500/30 shrink-0">
                <img
                  src={active.modalAvatar || active.avatar}
                  alt={active.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-white">{active.name}</h3>
                <p className="font-mono text-[0.68rem] text-purple-300 uppercase tracking-widest mt-0.5">
                  {activeLocalized.role}
                </p>
                <p className="font-mono text-[0.6rem] text-gray-600 mt-1">
                  @{active.id} · {shortHash(active.id)}
                </p>
              </div>
            </div>

            {/* Bio — README ko'rinishida */}
            <div className="space-y-2">
              <p className="font-mono text-[0.6rem] text-gray-600 uppercase tracking-widest">
                {labels.bio}
              </p>
              <p className="text-[0.82rem] text-gray-300 font-light leading-relaxed border-l-2 border-purple-500/40 pl-4">
                {activeLocalized.bio}
              </p>
            </div>

            {/* Skill'lar — terminal progress barlar */}
            <div className="space-y-4">
              <p className="font-mono text-[0.6rem] text-gray-600 uppercase tracking-widest">
                {t.teamSkills}
              </p>
              <div className="space-y-3">
                {active.skills.map((skill, idx) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-baseline gap-3 font-mono text-[0.7rem]">
                      <span className="text-gray-300 truncate">{skill.name}</span>
                      <span className="text-purple-400 font-bold shrink-0">{skill.level}%</span>
                    </div>
                    <div className="term-track">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: 0.15 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="term-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aloqa */}
            {active.socials.telegram && (
              <div className="space-y-3 pt-4 border-t border-white/5">
                <p className="font-mono text-[0.6rem] text-gray-600 uppercase tracking-widest">
                  {t.teamSocials}
                </p>
                <a
                  href={active.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-term inline-flex items-center gap-2 !text-[0.66rem]"
                >
                  <Send className="w-3.5 h-3.5" />
                  telegram --open @evanshar03
                </a>
              </div>
            )}

            <p className="font-mono text-[0.6rem] text-gray-700 flex items-center gap-1.5">
              <Terminal className="w-3 h-3" />
              process exited with code 0
            </p>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}

import { Package } from 'lucide-react';
import { Language } from '../translations';
import { SectionHeading } from './effects';

/** Har bir texnologiya — real paket nomi bilan */
const stack = [
  { name: 'React', pkg: 'react' },
  { name: 'TypeScript', pkg: 'typescript' },
  { name: 'Next.js', pkg: 'next' },
  { name: 'Node.js', pkg: 'node' },
  { name: 'Python', pkg: 'python' },
  { name: 'Flutter', pkg: 'flutter' },
  { name: 'Django', pkg: 'django' },
  { name: 'PostgreSQL', pkg: 'pg' },
  { name: 'MongoDB', pkg: 'mongodb' },
  { name: 'Docker', pkg: 'docker' },
  { name: 'AWS', pkg: 'aws-sdk' },
  { name: 'Firebase', pkg: 'firebase' },
  { name: 'TensorFlow', pkg: 'tensorflow' },
  { name: 'OpenCV', pkg: 'opencv-python' },
  { name: 'YOLO', pkg: 'ultralytics' },
  { name: 'Redis', pkg: 'redis' },
  { name: 'Linux', pkg: 'linux' },
];

interface TechStackProps {
  lang: Language;
}

export default function TechStack({ lang }: TechStackProps) {
  const title =
    lang === 'uz' ? 'TEXNOLOGIYALAR'
    : lang === 'ru' ? 'ТЕХНОЛОГИИ'
    : lang === 'tr' ? 'TEKNOLOJİLER'
    : lang === 'de' ? 'TECHNOLOGIEN'
    : lang === 'fr' ? 'TECHNOLOGIES'
    : lang === 'zh' ? '技术栈'
    : lang === 'ja' ? '技術スタック'
    : lang === 'ko' ? '기술 스택'
    : 'TECHNOLOGIES';

  const sub =
    lang === 'uz' ? "Kundalik ishimizda foydalanadigan asosiy paketlar"
    : lang === 'ru' ? 'Основные пакеты, которые мы используем каждый день'
    : 'The core packages we import every day';

  // Marquee uzluksiz bo'lishi uchun ro'yxat ikki marta takrorlanadi
  const rowA = [...stack, ...stack];
  const rowB = [...stack.slice().reverse(), ...stack.slice().reverse()];

  return (
    <section className="py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          command="cat package.json"
          title={title}
          subtitle={sub}
          icon={<Package className="w-3.5 h-3.5" />}
        />
      </div>

      <div className="marquee-host marquee-mask space-y-3">
        {/* Birinchi qator — chapga */}
        <div className="flex tech-marquee gap-3 w-max">
          {rowA.map((tech, i) => (
            <div
              key={`a-${tech.pkg}-${i}`}
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.07] bg-[#0b0b1a]/70 whitespace-nowrap shrink-0 hover:border-purple-500/45 hover:bg-purple-500/[0.07] transition-colors duration-300 cursor-default"
            >
              <span className="font-mono text-[0.66rem] text-[var(--tok-key)]">import</span>
              <span className="font-mono text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="font-mono text-[0.66rem] text-[var(--tok-key)]">from</span>
              <span className="font-mono text-[0.7rem] text-[var(--tok-str)]">'{tech.pkg}'</span>
            </div>
          ))}
        </div>

        {/* Ikkinchi qator — o'ngga (qarama-qarshi oqim) */}
        <div className="flex tech-marquee-rev gap-3 w-max">
          {rowB.map((tech, i) => (
            <div
              key={`b-${tech.pkg}-${i}`}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.05] bg-black/40 whitespace-nowrap shrink-0 hover:border-cyan-400/40 transition-colors duration-300 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 shrink-0" />
              <span className="font-mono text-[0.72rem] text-gray-500 group-hover:text-cyan-300 transition-colors">
                {tech.pkg}
              </span>
              <span className="font-mono text-[0.6rem] text-gray-700">✓</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center font-mono text-[0.68rem] text-gray-600 mt-8">
        <span className="text-emerald-400">✔</span> {stack.length} packages installed · 0 vulnerabilities
      </p>
    </section>
  );
}

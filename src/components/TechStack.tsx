import React from 'react';
import { Language } from '../translations';

const technologies = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Flutter', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
  'Firebase', 'OpenCV', 'TensorFlow', 'YOLO', 'Linux',
];

interface TechStackProps {
  lang: Language;
}

export default function TechStack({ lang }: TechStackProps) {
  const title = lang === 'uz' ? 'TEXNOLOGIYALAR' : lang === 'en' ? 'TECHNOLOGIES' : 'ТЕХНОЛОГИИ';
  const row = [...technologies, ...technologies];

  return (
    <section className="py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="section-badge">Stack</span>
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-4">{title}</h2>
      </div>
      <div className="relative">
        <div className="flex tech-marquee gap-4 w-max">
          {row.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="glass-card px-6 py-3 text-sm font-semibold text-gray-300 whitespace-nowrap shrink-0 hover:text-purple-300 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

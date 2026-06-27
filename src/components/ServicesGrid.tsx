import React from 'react';
import { motion } from 'motion/react';
import {
  Globe, Smartphone, MessageSquare, Brain, Eye, Wrench, ShieldAlert, Palette,
} from 'lucide-react';
import { servicesByLang } from '../servicesData';
import { Language, translations } from '../translations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Smartphone, MessageSquare, BrainCircuit: Brain, Eye, Wrench, ShieldAlert, Palette,
};

const showcaseIds = ['web', 'mobile', 'ai', 'bot', 'cv', 'robot', 'cyber', 'design'];

interface ServicesGridProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

export default function ServicesGrid({ onNavigate, lang }: ServicesGridProps) {
  const t = translations[lang] || translations.uz;
  const all = servicesByLang[lang] || servicesByLang.uz;
  const services = showcaseIds.map((id) => all.find((s) => s.id === id)).filter(Boolean);

  const title =
    lang === 'uz' ? "NIMALAR BILAN SHUG'ULLANAMIZ?" : lang === 'en' ? 'WHAT WE DO' : 'ЧЕМ ЗАНИМАЕМСЯ';
  const sub =
    lang === 'uz'
      ? 'Zamonaviy texnologiyalar yordamida biznesingizni raqamlashtiramiz'
      : lang === 'en'
        ? 'We digitize your business with cutting-edge technology'
        : 'Цифровизируем ваш бизнес с помощью современных технологий';

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="section-badge">{t.navServices}</span>
          <h2 className="section-title">{title}</h2>
          <p className="text-sm text-gray-400">{sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            if (!service) return null;
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-card p-6 space-y-4 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <button onClick={() => onNavigate('contact')} className="btn-primary px-10 py-4 text-sm uppercase tracking-wider">
            {lang === 'uz' ? 'Bepul konsultatsiya' : lang === 'en' ? 'Free Consultation' : 'Консультация'}
          </button>
        </div>
      </div>
    </section>
  );
}

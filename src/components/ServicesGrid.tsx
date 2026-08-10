import type { ComponentType } from 'react';
import { motion } from 'motion/react';
import {
  Globe, Smartphone, MessageSquare, Brain, Eye, Wrench, ShieldAlert, Palette, Terminal, ArrowRight,
} from 'lucide-react';
import { servicesByLang } from '../servicesData';
import { Language } from '../translations';
import { SectionHeading, MagneticButton } from './effects';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Globe, Smartphone, MessageSquare, BrainCircuit: Brain, Eye, Wrench, ShieldAlert, Palette,
};

/** Har bir xizmat uchun "fayl nomi" — kod metaforasi */
const fileNames: Record<string, string> = {
  web: 'web.tsx',
  mobile: 'mobile.dart',
  ai: 'model.py',
  bot: 'bot.ts',
  cv: 'vision.py',
  robot: 'robot.cpp',
  cyber: 'firewall.rs',
  design: 'design.fig',
};

const showcaseIds = ['web', 'mobile', 'ai', 'bot', 'cv', 'robot', 'cyber', 'design'];

interface ServicesGridProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

export default function ServicesGrid({ onNavigate, lang }: ServicesGridProps) {
  const all = servicesByLang[lang] || servicesByLang.uz;
  const services = showcaseIds.map((id) => all.find((s) => s.id === id)).filter(Boolean);

  const title =
    lang === 'uz' ? "NIMALAR BILAN SHUG'ULLANAMIZ?"
    : lang === 'en' ? 'WHAT WE DO'
    : lang === 'ru' ? 'ЧЕМ ЗАНИМАЕМСЯ'
    : lang === 'tr' ? 'NE YAPIYORUZ'
    : lang === 'de' ? 'WAS WIR TUN'
    : lang === 'fr' ? 'CE QUE NOUS FAISONS'
    : lang === 'zh' ? '我们的业务'
    : lang === 'ja' ? '事業内容'
    : '우리의 서비스';

  const sub =
    lang === 'uz' ? 'Zamonaviy texnologiyalar yordamida biznesingizni raqamlashtiramiz'
    : lang === 'en' ? 'We digitize your business with cutting-edge technology'
    : lang === 'ru' ? 'Цифровизируем ваш бизнес с помощью современных технологий'
    : lang === 'tr' ? 'İşinizi en son teknolojiyle dijitalleştiriyoruz'
    : lang === 'de' ? 'Wir digitalisieren Ihr Geschäft mit modernster Technologie'
    : lang === 'fr' ? 'Nous digitalisons votre entreprise avec des technologies de pointe'
    : lang === 'zh' ? '用前沿技术实现您的业务数字化'
    : lang === 'ja' ? '最先端技術でビジネスをデジタル化します'
    : '최첨단 기술로 비즈니스를 디지털화합니다';

  const ctaLabel =
    lang === 'uz' ? 'Bepul konsultatsiya'
    : lang === 'en' ? 'Free Consultation'
    : lang === 'ru' ? 'Бесплатная консультация'
    : lang === 'tr' ? 'Ücretsiz Danışmanlık'
    : lang === 'de' ? 'Kostenlose Beratung'
    : lang === 'fr' ? 'Consultation gratuite'
    : lang === 'zh' ? '免费咨询'
    : lang === 'ja' ? '無料相談'
    : '무료 상담';

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          command="ls ./services"
          title={title}
          subtitle={sub}
          icon={<Terminal className="w-3.5 h-3.5" />}
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            if (!service) return null;
            const Icon = iconMap[service.iconName] || Globe;
            const file = fileNames[service.id] || `${service.id}.ts`;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="code-card trace-border group p-6 pt-8 space-y-4 cursor-default relative"
                style={{ ['--scan-h' as string]: '280px' }}
              >
                {/* Fayl nomi — hover'da paydo bo'ladi */}
                <span className="file-tag">./services/{file}</span>

                {/* Ikonka */}
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-400 ease-out">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Sarlavha — export const ... uslubida */}
                <div>
                  <p className="font-mono text-[0.6rem] text-gray-600 mb-1.5 group-hover:text-purple-400/70 transition-colors">
                    <span className="text-[var(--tok-key)]">export const</span>{' '}
                    <span className="text-[var(--tok-fn)]">{service.id}</span> = {'{'}
                  </p>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Xususiyatlar — hover'da ochiladi */}
                <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-[max-height] duration-500 ease-out">
                  <ul className="pt-3 mt-1 border-t border-white/5 space-y-1.5">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 font-mono text-[0.62rem] text-gray-500">
                        <span className="text-emerald-500 shrink-0">✓</span>
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-mono text-[0.6rem] text-gray-700 group-hover:text-purple-400/60 transition-colors">
                  {'}'};
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <MagneticButton
            onClick={() => onNavigate('contact')}
            className="btn-primary px-10 py-4 text-sm font-mono uppercase tracking-wider inline-flex items-center gap-2.5"
            strength={0.2}
          >
            <Terminal className="w-4 h-4" />
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';
import { Language } from '../translations';
import { SectionHeading } from './effects';

const partners = [
  { name: 'IT Park', scope: '@uz/it-park' },
  { name: 'Uzinfocom', scope: '@uz/uzinfocom' },
  { name: 'MITC', scope: '@uz/mitc' },
  { name: '21 School', scope: '@edu/21-school' },
  { name: 'Alfraganus University', scope: '@edu/alfraganus' },
];

interface PartnersProps {
  lang: Language;
}

export default function Partners({ lang }: PartnersProps) {
  const title =
    lang === 'uz' ? 'HAMKORLARIMIZ'
    : lang === 'ru' ? 'ПАРТНЁРЫ'
    : lang === 'tr' ? 'İŞ ORTAKLARIMIZ'
    : lang === 'de' ? 'UNSERE PARTNER'
    : lang === 'fr' ? 'NOS PARTENAIRES'
    : lang === 'zh' ? '合作伙伴'
    : lang === 'ja' ? 'パートナー'
    : lang === 'ko' ? '파트너'
    : 'OUR PARTNERS';

  const sub =
    lang === 'uz' ? "Biz bilan birga ishlayotgan tashkilot va muassasalar"
    : lang === 'ru' ? 'Организации и учреждения, работающие вместе с нами'
    : 'Organisations and institutions we build alongside';

  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          command="npm ls --depth=0 --partners"
          title={title}
          subtitle={sub}
          icon={<Handshake className="w-3.5 h-3.5" />}
          className="mb-12"
        />

        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="code-card group px-6 py-4 min-w-[170px] text-center cursor-default"
              style={{ ['--scan-h' as string]: '90px' }}
            >
              <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                {p.name}
              </p>
              <p className="font-mono text-[0.6rem] text-gray-700 group-hover:text-purple-400/80 transition-colors mt-1">
                {p.scope}
              </p>
              <span className="inline-flex items-center gap-1 mt-2 font-mono text-[0.55rem] text-emerald-500/70">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                linked
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

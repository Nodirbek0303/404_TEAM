import { motion } from 'motion/react';
import { Star, MessageSquareCode, CheckCircle2 } from 'lucide-react';
import { Language } from '../translations';
import { SectionHeading } from './effects';

interface TestimonialsProps {
  lang: Language;
}

const items: {
  name: string;
  role: Record<'uz' | 'en' | 'ru', string>;
  text: Record<'uz' | 'en' | 'ru', string>;
  pr: string;
  repo: string;
}[] = [
  {
    name: 'Aziz Karimov',
    pr: '#128',
    repo: 'techstart-uz/ecommerce',
    role: { uz: 'CEO, TechStart UZ', en: 'CEO, TechStart UZ', ru: 'CEO, TechStart UZ' },
    text: {
      uz: "404-TEAM bizning e-commerce platformamizni 3 oy ichida mukammal ishga tushirdi. Professional yondashuv va sifatli kod — aynan shu jamoani tanlashimiz sababi.",
      en: '404-TEAM shipped our e-commerce platform flawlessly in three months. Professional approach and clean code — exactly why we chose this team.',
      ru: '404-TEAM безупречно запустила нашу e-commerce платформу за три месяца. Профессиональный подход и чистый код — именно поэтому мы выбрали эту команду.',
    },
  },
  {
    name: 'Dilnoza Rahimova',
    pr: '#94',
    repo: 'brandlab/ai-chatbot',
    role: { uz: 'Marketing direktori', en: 'Marketing Director', ru: 'Директор по маркетингу' },
    text: {
      uz: "AI chatbot va SMM integratsiyasi natijasida mijozlar bilan aloqa 40% yaxshilandi. Jamoa har doim aloqada va tez javob beradi.",
      en: 'The AI chatbot and SMM integration improved customer engagement by 40%. The team is always reachable and responds fast.',
      ru: 'Интеграция AI-чатбота и SMM повысила вовлечённость клиентов на 40%. Команда всегда на связи и отвечает быстро.',
    },
  },
  {
    name: 'Jasur Toshmatov',
    pr: '#212',
    repo: 'smarthome-uz/iot-core',
    role: { uz: 'Asoschi, SmartHome UZ', en: 'Founder, SmartHome UZ', ru: 'Основатель, SmartHome UZ' },
    text: {
      uz: "IoT loyihamiz murakkab edi, lekin 404-TEAM barcha texnik qiyinchiliklarni hal qildi. Natija — barqaror va zamonaviy tizim.",
      en: 'Our IoT project was complex, but 404-TEAM solved every technical challenge. The result is a stable, modern system.',
      ru: 'Наш IoT-проект был сложным, но 404-TEAM решила все технические задачи. Результат — стабильная современная система.',
    },
  },
];

export default function Testimonials({ lang }: TestimonialsProps) {
  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';

  const title =
    lang === 'uz' ? 'MIJOZLARIMIZ FIKRI'
    : lang === 'ru' ? 'ОТЗЫВЫ КЛИЕНТОВ'
    : lang === 'tr' ? 'MÜŞTERİ YORUMLARI'
    : lang === 'de' ? 'KUNDENSTIMMEN'
    : lang === 'fr' ? 'TÉMOIGNAGES'
    : lang === 'zh' ? '客户评价'
    : lang === 'ja' ? 'お客様の声'
    : lang === 'ko' ? '고객 후기'
    : 'CLIENT TESTIMONIALS';

  const sub =
    lang === 'uz' ? "Yopilgan pull request'lar bo'yicha mijozlarning sharhlari"
    : lang === 'ru' ? 'Отзывы клиентов по закрытым pull request'
    : 'Client reviews left on merged pull requests';

  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          command="gh pr list --state merged --reviews"
          title={title}
          subtitle={sub}
          icon={<MessageSquareCode className="w-3.5 h-3.5" />}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="code-card trace-border group flex flex-col overflow-hidden"
              style={{ ['--scan-h' as string]: '300px' }}
            >
              {/* PR sarlavhasi */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.015]">
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30">
                  <CheckCircle2 className="w-3 h-3 text-purple-300" />
                  <span className="font-mono text-[0.58rem] font-bold text-purple-300 uppercase tracking-wider">
                    merged
                  </span>
                </span>
                <span className="font-mono text-[0.62rem] text-gray-600 truncate">{item.repo}</span>
                <span className="font-mono text-[0.62rem] text-gray-500 ml-auto shrink-0">{item.pr}</span>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-4">
                <blockquote className="text-[0.82rem] text-gray-300 leading-relaxed font-light flex-1">
                  <span className="font-mono text-purple-500/50 select-none mr-1">"""</span>
                  {item.text[key]}
                  <span className="font-mono text-purple-500/50 select-none ml-1">"""</span>
                </blockquote>

                {/* Reyting */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.1 + j * 0.07, duration: 0.3 }}
                    >
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </motion.span>
                  ))}
                </div>

                <figcaption className="pt-3 border-t border-white/5 flex items-center gap-3">
                  {/* Avatar o'rniga initsial — commit author uslubi */}
                  <span className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center font-mono text-xs font-black text-white shrink-0 group-hover:scale-105 transition-transform">
                    {item.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.8rem] font-bold text-white truncate">{item.name}</span>
                    <span className="block font-mono text-[0.62rem] text-purple-400/80 truncate">
                      {item.role[key]}
                    </span>
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

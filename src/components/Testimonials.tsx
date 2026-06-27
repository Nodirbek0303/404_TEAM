import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Language } from '../translations';

interface TestimonialsProps {
  lang: Language;
}

const itemsUz = [
  {
    name: 'Aziz Karimov',
    role: 'CEO, TechStart UZ',
    text: "404-TEAM bizning e-commerce platformamizni 3 oy ichida mukammal ishga tushirdi. Professional yondashuv va sifatli kod — aynan shu jamoani tanlashimiz sababi.",
  },
  {
    name: 'Dilnoza Rahimova',
    role: 'Marketing Director',
    text: "AI chatbot va SMM integratsiyasi natijasida mijozlar bilan aloqa 40% yaxshilandi. Jamoa har doim aloqada va tez javob beradi.",
  },
  {
    name: 'Jasur Toshmatov',
    role: 'Founder, SmartHome UZ',
    text: "IoT loyihamiz murakkab edi, lekin 404-TEAM barcha texnik qiyinchiliklarni hal qildi. Natija — barqaror va zamonaviy tizim.",
  },
];

export default function Testimonials({ lang }: TestimonialsProps) {
  const title = lang === 'uz' ? 'MIJOZLARIMIZ FIKRI' : lang === 'en' ? 'CLIENT TESTIMONIALS' : 'ОТЗЫВЫ КЛИЕНТОВ';
  const badge = lang === 'uz' ? 'Sharhlar' : lang === 'en' ? 'Reviews' : 'Отзывы';
  const items = itemsUz;

  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="section-badge">
            <Star className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-purple-500/40" />
              <p className="text-sm text-gray-300 leading-relaxed font-light">{item.text}</p>
              <div className="pt-2 border-t border-white/5">
                <p className="text-sm font-bold text-white">{item.name}</p>
                <p className="text-xs text-purple-400">{item.role}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

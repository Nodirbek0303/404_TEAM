import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const t = translations[lang] || translations.uz;

  const CEO_TELEGRAM = 'evanshar03';
  const COMPANY_TELEGRAM = 'https://t.me/uz_team_404';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !telegram.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage(
        lang === 'uz' ? 'Iltimos, barcha maydonlarni to\'ldiring.' : 
        lang === 'en' ? 'Please fill in all fields.' : 'Пожалуйста, заполните все поля.'
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    const inquiryText = [
      "🆕 Konsultatsiya so'rovi — 404-TEAM",
      '',
      `Ism: ${name.trim()}`,
      `Telegram: ${telegram.trim()}`,
      `Telefon: ${phone.trim()}`,
      '',
      'Xabar:',
      message.trim(),
    ].join('\n');

    window.open(
      `https://t.me/${CEO_TELEGRAM}?text=${encodeURIComponent(inquiryText)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setName('');
      setTelegram('');
      setPhone('');
      setMessage('');

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 400);
  };

  // Localized office addresses
  const localizedOffice = {
    uz: "O'zbekiston, Samarqand shahri, Pavarot",
    en: "Pavarot, Samarkand city, Uzbekistan",
    ru: "Узбекистан, город Самарканд, Паварот",
    tr: "Özbekistan, Semerkand şehri, Pavarot",
    de: "Pavarot, Samarkand, Usbekistan",
    ko: "우즈베키스탄 사마르칸트시 파바롯",
    ja: "ウズベキスタン共和国サマルカンド市パヴァロット",
    zh: "乌兹别克斯坦 撒马尔罕市 帕瓦罗特",
    fr: "Pavarot, Samarcande, Ouzbékistan"
  };

  const termOfficeTitle = lang === 'uz' ? "Shtab-kvartiramiz" : lang === 'en' ? "Our Headquarters" : lang === 'ru' ? "Наша штаб-квартира" : "Merkezimiz";
  const termPhoneTitle = lang === 'uz' ? "Aloqa Telefonlari" : lang === 'en' ? "Hotlines" : lang === 'ru' ? "Телефоны связи" : "Destek Hattı";
  const termSocialsTitle = lang === 'uz' ? "Ijtimoiy Tarmoqlarimiz" : lang === 'en' ? "Social Channels" : lang === 'ru' ? "Мы в соцсетях" : "Sosyal Medya";
  const termSocialsSub = lang === 'uz' ? "Eng tezkor javobni Telegram kanalimiz orqali olishingiz mumkin." : lang === 'en' ? "Get the fastest response through our Telegram channel." : "Самый быстрый ответ — через наш Telegram-канал.";
  const termFormHeading = lang === 'uz' ? "Konsultatsiya uchun so'rov qoldiring" : lang === 'en' ? "Request a Free Consultation" : lang === 'ru' ? "Оставить заявку на консультацию" : "Danışmanlık Talebi Gönderin";
  const termPlaceholderName = lang === 'uz' ? "Masalan: Nodirbek" : lang === 'en' ? "e.g. Alex" : "Например: Александр";
  const termPlaceholderTelegram = lang === 'uz' ? "Masalan: @nodir_dev" : lang === 'en' ? "e.g. @alex_dev" : "Например: @alex_dev";
  const termPlaceholderPhone = lang === 'uz' ? "Masalan: +998 (90) 123-45-67" : lang === 'en' ? "e.g. +1 (555) 019-2834" : "Например: +998 (90) 123-45-67";
  const termPlaceholderMsg = lang === 'uz' ? "Loyiha nima haqida, qanday xizmat turi kerak va qanday talablar borligini qisqacha yozib qoldiring..." : lang === 'en' ? "Briefly describe your project, required services, and custom requirements..." : "Кратко опишите ваш проект, необходимые услуги и требования...";

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/5 text-left">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="section-badge">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contactBadge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            {t.contactTitle}
          </h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            {t.contactSub}
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left panel: Info cards with Artistic Flair straight border aesthetic */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 space-y-2 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
              <h3 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest pl-2">
                {termOfficeTitle}
              </h3>
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300 font-light pt-2 pl-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{localizedOffice[lang] || localizedOffice.uz}</span>
              </div>
            </div>

            <div className="glass-card p-6 space-y-2 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
              <h3 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest pl-2">
                {termPhoneTitle}
              </h3>
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300 font-light pt-2 pl-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+998955997703" className="block hover:text-purple-400 transition-colors">+998 95 599 77 03</a>
                  <a href="tel:+998904150847" className="block hover:text-purple-400 transition-colors">+998 90 415 08 47</a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 space-y-2 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
              <h3 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest pl-2">
                {termSocialsTitle}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light pl-2">
                {termSocialsSub}
              </p>
              <div className="pt-3 pl-2">
                <a
                  href={COMPANY_TELEGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-4 py-2.5 bg-purple-500/10 hover:bg-brand-gradient hover:text-white border border-purple-500/30 rounded-lg text-[10px] font-mono font-bold text-purple-300 transition-all"
                >
                  TELEGRAM — @uz_team_404
                </a>
              </div>
            </div>

          </div>

          {/* Right panel: Fast consultation contact form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-base font-display font-black uppercase italic tracking-wider text-white mb-6">
                {termFormHeading}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Box */}
                {errorMessage && (
                  <div className="p-4 bg-red-950/20 border border-red-500/20 text-red-400 text-xs flex items-center space-x-2 rounded-lg font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Banner */}
                {submitSuccess && (
                  <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-xs flex items-center space-x-2 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{t.contactSuccessSub}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                      {t.contactNameLabel}
                    </label>
                    <input
                      id="contact-input-name"
                      type="text"
                      required
                      placeholder={termPlaceholderName}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                      {t.contactTelegramLabel}
                    </label>
                    <input
                      id="contact-input-telegram"
                      type="text"
                      required
                      placeholder={termPlaceholderTelegram}
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                    {t.contactPhoneLabel}
                  </label>
                  <input
                    id="contact-input-phone"
                    type="tel"
                    required
                    placeholder={termPlaceholderPhone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                    {t.contactMsgLabel}
                  </label>
                  <textarea
                    id="contact-input-message"
                    required
                    rows={4}
                    placeholder={termPlaceholderMsg}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 btn-primary font-bold text-xs tracking-widest uppercase disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer rounded-xl"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">{t.contactSubmitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contactSubmitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

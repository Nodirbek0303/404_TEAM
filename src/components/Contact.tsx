import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';
import { Language, translations } from '../translations';
import { SectionHeading } from './effects';

interface ContactProps {
  lang: Language;
}

const CEO_TELEGRAM = 'evanshar03';
const COMPANY_TELEGRAM = 'https://t.me/uz_team_404';

const PHONES = ['+998 95 599 77 03', '+998 90 415 08 47'];

export default function Contact({ lang }: ContactProps) {
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusText, setStatusText] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const t = translations[lang] || translations.uz;
  const key: 'uz' | 'en' | 'ru' = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';

  const L = {
    office: {
      uz: "O'zbekiston, Samarqand shahri, Pavarot",
      en: 'Pavarot, Samarkand, Uzbekistan',
      ru: 'Узбекистан, Самарканд, Паварот',
    }[key],
    officeTitle: { uz: 'Shtab-kvartira', en: 'Headquarters', ru: 'Штаб-квартира' }[key],
    phoneTitle: { uz: 'Aloqa telefonlari', en: 'Hotlines', ru: 'Телефоны' }[key],
    socialsTitle: { uz: 'Ijtimoiy tarmoqlar', en: 'Social channels', ru: 'Соцсети' }[key],
    socialsSub: {
      uz: 'Eng tezkor javobni Telegram kanalimiz orqali olishingiz mumkin.',
      en: 'Get the fastest response through our Telegram channel.',
      ru: 'Самый быстрый ответ — через наш Telegram-канал.',
    }[key],
    formHeading: {
      uz: "Konsultatsiya uchun so'rov qoldiring",
      en: 'Request a free consultation',
      ru: 'Оставьте заявку на консультацию',
    }[key],
    phName: { uz: 'Nodirbek', en: 'Alex', ru: 'Александр' }[key],
    phTelegram: { uz: '@nodir_dev', en: '@alex_dev', ru: '@alex_dev' }[key],
    phPhone: { uz: '+998 90 123 45 67', en: '+1 555 019 2834', ru: '+998 90 123 45 67' }[key],
    phMsg: {
      uz: "Loyiha nima haqida, qanday xizmat kerak va qanday talablar bor...",
      en: 'Briefly describe your project, required services and requirements...',
      ru: 'Кратко опишите проект, нужные услуги и требования...',
    }[key],
    errRequired: {
      uz: "Iltimos, barcha maydonlarni to'ldiring.",
      en: 'Please fill in all fields.',
      ru: 'Пожалуйста, заполните все поля.',
    }[key],
    errTelegram: {
      uz: "Telegram username noto'g'ri. Masalan: @nodir_dev",
      en: 'Invalid Telegram username. Example: @alex_dev',
      ru: 'Неверный Telegram username. Например: @alex_dev',
    }[key],
    errPhone: {
      uz: "Telefon raqami noto'g'ri. Kamida 9 ta raqam kiriting.",
      en: 'Invalid phone number. Enter at least 9 digits.',
      ru: 'Неверный номер телефона. Введите минимум 9 цифр.',
    }[key],
    errPopup: {
      uz: "Brauzer yangi oynani bloklandi. Iltimos, quyidagi tugma orqali Telegramda yozing.",
      en: 'Your browser blocked the popup. Please use the button below to message us on Telegram.',
      ru: 'Браузер заблокировал всплывающее окно. Напишите нам через кнопку ниже.',
    }[key],
    success: {
      uz: "Telegram ochildi. Xabarni yuborish uchun Telegramda «Send» tugmasini bosing.",
      en: 'Telegram opened. Press “Send” inside Telegram to deliver your message.',
      ru: 'Telegram открыт. Нажмите «Отправить» в Telegram, чтобы доставить сообщение.',
    }[key],
    preview: { uz: 'Yuboriladigan payload', en: 'Outgoing payload', ru: 'Отправляемый payload' }[key],
  };

  /** Jonli JSON preview — foydalanuvchi yozgani zahoti yangilanadi */
  const payload = useMemo(
    () => ({
      name: name.trim() || null,
      telegram: telegram.trim() || null,
      phone: phone.trim() || null,
      message: message.trim() || null,
      source: '404-team.vercel.app',
      locale: lang,
    }),
    [name, telegram, phone, message, lang]
  );

  const validate = () => {
    if (!name.trim() || !telegram.trim() || !phone.trim() || !message.trim()) {
      return L.errRequired;
    }
    // @username yoki username — 4–32 belgi
    if (!/^@?[A-Za-z0-9_]{4,32}$/.test(telegram.trim())) return L.errTelegram;
    // Kamida 9 ta raqam
    if ((phone.replace(/\D/g, '') || '').length < 9) return L.errPhone;
    return null;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus('error');
      setStatusText(error);
      return;
    }

    setStatus('idle');
    setStatusText('');
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

    const win = window.open(
      `https://t.me/${CEO_TELEGRAM}?text=${encodeURIComponent(inquiryText)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setIsSubmitting(false);

    // Popup bloklangan bo'lsa — yolg'on "muvaffaqiyat" ko'rsatmaymiz
    if (!win) {
      setStatus('error');
      setStatusText(L.errPopup);
      return;
    }

    setStatus('success');
    setStatusText(L.success);
  };

  const fields = [
    { id: 'name', label: t.contactNameLabel, value: name, set: setName, ph: L.phName, type: 'text' as const },
    { id: 'telegram', label: t.contactTelegramLabel, value: telegram, set: setTelegram, ph: L.phTelegram, type: 'text' as const },
    { id: 'phone', label: t.contactPhoneLabel, value: phone, set: setPhone, ph: L.phPhone, type: 'tel' as const },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          command="curl -X POST /api/contact"
          title={t.contactTitle}
          subtitle={t.contactSub}
          icon={<Mail className="w-3.5 h-3.5" />}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">

          {/* Chap: aloqa ma'lumotlari + jonli payload */}
          <div className="lg:col-span-5 space-y-5">

            {/* Manzil */}
            <div className="code-card group p-5 relative overflow-hidden" style={{ ['--scan-h' as string]: '110px' }}>
              <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-purple-500 to-blue-500" />
              <p className="font-mono text-[0.6rem] text-purple-400 font-bold uppercase tracking-widest pl-3">
                {L.officeTitle}
              </p>
              <p className="flex items-start gap-2.5 text-[0.78rem] text-gray-300 font-light pt-2.5 pl-3">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                {L.office}
              </p>
            </div>

            {/* Telefonlar */}
            <div className="code-card group p-5 relative overflow-hidden" style={{ ['--scan-h' as string]: '130px' }}>
              <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-purple-500 to-blue-500" />
              <p className="font-mono text-[0.6rem] text-purple-400 font-bold uppercase tracking-widest pl-3">
                {L.phoneTitle}
              </p>
              <div className="flex items-start gap-2.5 pt-2.5 pl-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {PHONES.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="link-underline block font-mono text-[0.78rem] text-gray-300 hover:text-purple-300"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Telegram */}
            <div className="code-card group p-5 relative overflow-hidden" style={{ ['--scan-h' as string]: '150px' }}>
              <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-purple-500 to-blue-500" />
              <p className="font-mono text-[0.6rem] text-purple-400 font-bold uppercase tracking-widest pl-3">
                {L.socialsTitle}
              </p>
              <p className="text-[0.72rem] text-gray-500 leading-relaxed font-light pl-3 pt-2">
                {L.socialsSub}
              </p>
              <div className="pt-3 pl-3">
                <a href={COMPANY_TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn-term inline-flex">
                  telegram --open @uz_team_404
                </a>
              </div>
            </div>

            {/* Jonli payload preview */}
            <div className="term-window hidden lg:block">
              <div className="term-bar">
                <span className="term-dot term-dot-r" />
                <span className="term-dot term-dot-y" />
                <span className="term-dot term-dot-g" />
                <span className="term-title flex-1">{L.preview}</span>
                <span className="led" />
              </div>
              <div className="term-body text-[0.68rem] leading-relaxed">
                <span className="text-[var(--tok-punc)]">{'{'}</span>
                {Object.entries(payload).map(([k, v]) => (
                  <div key={k} className="pl-4">
                    <span className="text-[var(--tok-attr)]">"{k}"</span>
                    <span className="text-[var(--tok-punc)]">: </span>
                    <motion.span
                      key={String(v)}
                      initial={{ opacity: 0.35 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className={v === null ? 'text-[var(--tok-com)]' : 'text-[var(--tok-str)]'}
                    >
                      {v === null ? 'null' : `"${String(v).length > 42 ? `${String(v).slice(0, 42)}…` : v}"`}
                    </motion.span>
                    <span className="text-[var(--tok-punc)]">,</span>
                  </div>
                ))}
                <span className="text-[var(--tok-punc)]">{'}'}</span>
              </div>
            </div>
          </div>

          {/* O'ng: forma — kod muharriri oynasi */}
          <div className="lg:col-span-7">
            <div className="term-window trace-border">
              <div className="term-bar">
                <span className="term-dot term-dot-r" />
                <span className="term-dot term-dot-y" />
                <span className="term-dot term-dot-g" />
                <span className="term-title flex-1">contact-form.tsx</span>
                <span className="font-mono text-[0.58rem] text-gray-600">UTF-8</span>
              </div>

              <div className="p-5 sm:p-7">
                <h3 className="text-base font-black uppercase tracking-wide text-white mb-6 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  {L.formHeading}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* Status xabari */}
                  <AnimatePresence mode="wait">
                    {status !== 'idle' && statusText && (
                      <motion.div
                        key={status}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div
                          role="status"
                          className={`p-3.5 rounded-lg font-mono text-[0.7rem] flex items-start gap-2.5 border ${
                            status === 'error'
                              ? 'bg-red-950/25 border-red-500/25 text-red-300'
                              : 'bg-emerald-950/25 border-emerald-500/25 text-emerald-300'
                          }`}
                        >
                          {status === 'error' ? (
                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                          )}
                          <span className="leading-relaxed">
                            <span className="opacity-60 select-none">
                              {status === 'error' ? '[ERROR] ' : '[OK] '}
                            </span>
                            {statusText}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Matn maydonlari */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fields.slice(0, 2).map((f) => (
                      <Field
                        key={f.id}
                        field={f}
                        focused={focusedField === f.id}
                        onFocus={() => setFocusedField(f.id)}
                        onBlur={() => setFocusedField(null)}
                      />
                    ))}
                  </div>

                  <Field
                    field={fields[2]}
                    focused={focusedField === 'phone'}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />

                  {/* Xabar */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-input-message"
                      className="font-mono text-[0.58rem] font-bold text-gray-600 uppercase tracking-widest flex items-center gap-1.5"
                    >
                      <span className={focusedField === 'message' ? 'text-emerald-400' : 'text-gray-700'}>{'>'}</span>
                      {t.contactMsgLabel}
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={4}
                      placeholder={L.phMsg}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 font-mono text-[0.75rem] bg-black/60 border border-white/[0.08] rounded-lg text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 focus:bg-black/80 transition-colors resize-none"
                    />
                    <p className="font-mono text-[0.58rem] text-gray-700 text-right">
                      {message.length} chars
                    </p>
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 btn-primary font-mono font-bold text-[0.72rem] tracking-widest uppercase disabled:opacity-50 flex items-center justify-center gap-2.5"
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

                  <p className="font-mono text-[0.58rem] text-gray-700 text-center">
                    <span className="text-gray-800 select-none">// </span>
                    POST → t.me/{CEO_TELEGRAM}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bitta input maydoni — fokusda prompt belgisi yashil bo'ladi */
function Field({
  field,
  focused,
  onFocus,
  onBlur,
}: {
  field: { id: string; label: string; value: string; set: (v: string) => void; ph: string; type: 'text' | 'tel' };
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={`contact-input-${field.id}`}
        className="font-mono text-[0.58rem] font-bold text-gray-600 uppercase tracking-widest flex items-center gap-1.5"
      >
        <span className={focused ? 'text-emerald-400' : 'text-gray-700'}>{'>'}</span>
        {field.label}
      </label>
      <input
        id={`contact-input-${field.id}`}
        type={field.type}
        placeholder={field.ph}
        value={field.value}
        onChange={(e) => field.set(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full px-4 py-3 font-mono text-[0.75rem] bg-black/60 border border-white/[0.08] rounded-lg text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 focus:bg-black/80 transition-colors"
      />
    </div>
  );
}

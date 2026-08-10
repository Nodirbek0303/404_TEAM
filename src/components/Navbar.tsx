import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown, Terminal } from 'lucide-react';
import Logo from './Logo';
import { Language, translations } from '../translations';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

/** Har bir bo'lim "marshrut" sifatida ko'rsatiladi */
const ROUTES: Record<string, string> = {
  home: '/',
  services: '/services',
  projects: '/projects',
  team: '/team',
  interns: '/interns',
  blog: '/blog',
  contact: '/contact',
};

export default function Navbar({ onNavigate, activeSection, lang, onLangChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [progress, setProgress] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[lang] || translations.uz;

  // Scroll holati + o'qish progressi (yuqoridagi ingichka chiziq)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown: tashqariga bosish va Escape
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowDropdown(false);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const navItems: { id: string; label: string; external?: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'services', label: t.navServices },
    { id: 'projects', label: t.navProjects },
    { id: 'team', label: t.navTeam },
    { id: 'interns', label: t.navInterns },
    { id: 'blog', label: 'Blog', external: 'https://t.me/uz_team_404' },
    { id: 'contact', label: t.navContact },
  ];

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'uz', label: "O'zbek", short: 'uz-UZ' },
    { code: 'en', label: 'English', short: 'en-US' },
    { code: 'ru', label: 'Русский', short: 'ru-RU' },
    { code: 'tr', label: 'Türkçe', short: 'tr-TR' },
    { code: 'de', label: 'Deutsch', short: 'de-DE' },
    { code: 'fr', label: 'Français', short: 'fr-FR' },
    { code: 'zh', label: '中文', short: 'zh-CN' },
    { code: 'ja', label: '日本語', short: 'ja-JP' },
    { code: 'ko', label: '한국어', short: 'ko-KR' },
  ];

  const handleItemClick = (id: string, external?: string) => {
    if (external) {
      window.open(external, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }
    onNavigate(id);
    setIsOpen(false);
  };

  const ctaLabel = lang === 'uz' ? 'Loyihani boshlash' : t.navCTA;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06060f]/92 backdrop-blur-xl border-b border-purple-500/15 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Kompilyatsiya progressi — sahifani o'qish darajasi */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Logo variant="nav" onClick={() => handleItemClick('home')} />

          {/* Desktop navigatsiya — marshrutlar sifatida */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id, item.external)}
                  data-active={isActive}
                  title={ROUTES[item.id]}
                  className={`nav-link px-3 py-2 text-[0.8rem] font-medium rounded-lg transition-colors ${
                    isActive ? 'text-purple-200' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="nav-caret">{'>'}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Til tanlash + CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                aria-expanded={showDropdown}
                aria-haspopup="listbox"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 font-mono text-[0.7rem] font-semibold text-gray-300 hover:border-purple-500/50 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                {lang.toUpperCase()}
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    role="listbox"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 mt-2 w-48 term-window py-1 z-50 max-h-80 overflow-y-auto team-scroll"
                  >
                    <p className="px-3 py-2 font-mono text-[0.58rem] text-gray-600 uppercase tracking-widest border-b border-white/5">
                      // locale
                    </p>
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        role="option"
                        aria-selected={lang === l.code}
                        onClick={() => {
                          onLangChange(l.code);
                          setShowDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 font-mono text-[0.7rem] flex items-center justify-between gap-2 transition-colors ${
                          lang === l.code
                            ? 'text-purple-300 bg-purple-500/10'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="text-[0.58rem] text-gray-600">{l.short}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleItemClick('contact')}
              className="btn-primary px-5 py-2.5 text-[0.7rem] font-mono uppercase tracking-wider flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              {ctaLabel}
            </button>
          </div>

          {/* Mobil: hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil menyu — terminal ro'yxati + til tanlash */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#06060f]/97 backdrop-blur-xl border-b border-purple-500/15 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleItemClick(item.id, item.external)}
                  className={`flex w-full items-center gap-2.5 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-200 bg-purple-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${
                      activeSection === item.id ? 'text-emerald-400' : 'text-gray-700'
                    }`}
                  >
                    {'>'}
                  </span>
                  {item.label}
                  <span className="ml-auto font-mono text-[0.6rem] text-gray-700">
                    {ROUTES[item.id]}
                  </span>
                </motion.button>
              ))}

              {/* Mobil til tanlash — avval umuman yo'q edi */}
              <div className="pt-3 mt-3 border-t border-white/5">
                <p className="px-3 pb-2 font-mono text-[0.58rem] text-gray-600 uppercase tracking-widest">
                  // locale
                </p>
                <div className="flex flex-wrap gap-1.5 px-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => onLangChange(l.code)}
                      data-active={lang === l.code}
                      className="btn-term !px-2.5 !py-1.5 !text-[0.62rem]"
                    >
                      {l.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleItemClick('contact')}
                className="w-full btn-primary py-3.5 text-xs font-mono uppercase tracking-wider mt-4 flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                {ctaLabel}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

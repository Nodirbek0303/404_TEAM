import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { Language, translations } from '../translations';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Navbar({ onNavigate, activeSection, lang, onLangChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[lang] || translations.uz;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const navItems: { id: string; label: string; external?: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'services', label: t.navServices },
    { id: 'projects', label: t.navProjects },
    { id: 'team', label: t.navTeam },
    { id: 'interns', label: t.navInterns },
    { id: 'blog', label: lang === 'uz' ? 'Blog' : lang === 'en' ? 'Blog' : 'Блог', external: 'https://t.me/uz_team_404' },
    { id: 'contact', label: t.navContact },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  const activeLangObj = languages.find((l) => l.code === lang) || languages[0];

  const handleItemClick = (id: string, external?: string) => {
    if (external) {
      window.open(external, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#07070f]/90 backdrop-blur-xl border-b border-purple-500/10 py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Logo variant="nav" onClick={() => handleItemClick('home')} />

          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id, item.external)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive ? 'text-purple-300 bg-purple-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-xs font-semibold text-gray-300 hover:border-purple-500/40"
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                {activeLangObj.code.toUpperCase()}
                <ChevronDown className={`w-3 h-3 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-36 glass-card py-1 z-50"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { onLangChange(l.code); setShowDropdown(false); }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-purple-500/10 ${lang === l.code ? 'text-purple-300' : 'text-gray-400'}`}
                      >
                        {l.flag} {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => handleItemClick('contact')} className="btn-primary px-5 py-2.5 text-xs uppercase tracking-wider">
              {lang === 'uz' ? 'Loyihani boshlash' : t.navCTA}
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-400">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#07070f]/95 border-b border-purple-500/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id, item.external)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                    activeSection === item.id ? 'text-purple-300 bg-purple-500/10' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => handleItemClick('contact')} className="w-full btn-primary py-3 text-sm mt-3">
                {lang === 'uz' ? 'Loyihani boshlash' : t.navCTA}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

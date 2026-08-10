/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ServicesGrid from './components/ServicesGrid';
import Projects from './components/Projects';
import Team from './components/Team';
import Interns from './components/Interns';
import Workflow from './components/Workflow';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { Language } from './translations';

const SECTIONS = ['home', 'services', 'projects', 'team', 'interns', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [lang, setLang] = useState<Language>('uz');

  // Til o'zgarganda <html lang> ni yangilaymiz — SEO va screen reader uchun
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Aktiv bo'limni aniqlash: ekran markaziga eng yaqin bo'lim g'olib
  useEffect(() => {
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) return;

        // Eng ko'p ko'rinayotgan bo'limni tanlaymiz — tartib chalkashmaydi
        let best = '';
        let bestRatio = -1;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });

        if (best) setActiveSection(best);
      },
      { root: null, rootMargin: '-20% 0px -35% 0px', threshold: [0, 0.15, 0.35, 0.6, 1] }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="team404-app-root"
      className="relative min-h-screen text-gray-100 selection:bg-purple-500 selection:text-white overflow-x-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar
          onNavigate={handleNavigate}
          activeSection={activeSection}
          lang={lang}
          onLangChange={setLang}
        />

        <main>
          <Hero onNavigate={handleNavigate} lang={lang} />
          <StatsBar lang={lang} />
          <ServicesGrid onNavigate={handleNavigate} lang={lang} />
          {/* Tartib navigatsiya menyusiga mos: projects → team → interns */}
          <Projects lang={lang} />
          <Team lang={lang} />
          <Interns lang={lang} />
          <Workflow lang={lang} />
          <WhyUs lang={lang} />
          <Testimonials lang={lang} />
          <TechStack lang={lang} />
          <Partners lang={lang} />
          <Contact lang={lang} />
        </main>

        <Footer onNavigate={handleNavigate} lang={lang} />
      </div>
    </div>
  );
}

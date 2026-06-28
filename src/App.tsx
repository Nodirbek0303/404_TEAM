/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [lang, setLang] = useState<Language>('uz');

  useEffect(() => {
    const sections = ['home', 'services', 'projects', 'team', 'interns', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-30% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
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
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div id="team404-app-root" className="relative min-h-screen bg-page text-gray-100 selection:bg-purple-500 selection:text-white overflow-x-hidden">
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
        <Team lang={lang} />
        <Interns lang={lang} />
        <Projects lang={lang} />
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

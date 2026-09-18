import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Leadership } from './components/Leadership';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [externalCert, setExternalCert] = useState<{ title: string; url: string } | null>(null);

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'experience',
      'projects',
      'skills',
      'achievements',
      'leadership',
      'certifications',
      'education',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCertificate = (title: string, url: string) => {
    setExternalCert({ title, url });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-zinc-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Global Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
        <About />
        <Experience onViewCertificate={handleOpenCertificate} />
        <Projects />
        <Skills />
        <Achievements onViewCertificate={handleOpenCertificate} />
        <Leadership />
        <Certifications
          externalSelectedCert={externalCert}
          onClearExternalCert={() => setExternalCert(null)}
        />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;


import { useState, useEffect, useRef } from 'react';
import { Sidebar } from './Sidebar';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import {ProfileCard} from './Profile'
import FluidCursor from './FluidCursor';
import Footer from './sections/Footer';


export const ResumeLayout = () => {
  const [activeSection, setActiveSection] = useState('about');
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainContentRef.current) return;

      const sections = ['about', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = mainContentRef.current.scrollTop + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const mainContent = mainContentRef.current;
    mainContent?.addEventListener('scroll', handleScroll);
    return () => mainContent?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="h-screen bg-background flex flex-col lg:flex-row overflow-hidden">
      <FluidCursor />

      {/* Sidebar for large screens */}
      <aside className="hidden lg:block w-[40%] h-screen overflow-y-auto">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={scrollToSection}
          isMobileOpen={false}
        />
      </aside>

      {/* Main Content */}
      <main
        ref={mainContentRef}
        className="flex-1 h-screen overflow-y-auto"
      >
        {/* Sidebar rendered at top for small screens */}
        <div className="lg:hidden">
            <ProfileCard size="large" showBio={true} />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 lg:py-12 space-y-16">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <Footer />
        </div>
      </main>
    </div>
  );
};

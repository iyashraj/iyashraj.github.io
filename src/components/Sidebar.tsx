import { useState, useEffect } from 'react';
import { MapPin, Mail, Github, Linkedin, User, Briefcase, FolderOpen, Code, GraduationCap } from 'lucide-react';
import profileImage from '@/assets/yash-profile.jpg';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

const sections = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experiences', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

export const Sidebar = ({ activeSection, onSectionChange, isMobileOpen = false, onMobileToggle }: SidebarProps) => {
  return (
    <aside className={`fixed left-0 top-0 h-full w-80 bg-sidebar-bg border-r border-sidebar-border z-50 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
      isMobileOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:relative lg:z-auto`}>
      {/* Mobile Close Button */}
      <div className="lg:hidden absolute top-4 right-4">
        <button
          onClick={onMobileToggle}
          className="p-2 text-text-muted hover:text-text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-6 lg:p-8">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative mb-6">
            <img
              src={profileImage}
              alt="Yash Raj Profile"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto object-cover shadow-medium"
            />
          </div>
          
          <h1 className="text-xl lg:text-2xl font-bold text-text-primary mb-2">Yash Raj</h1>
          <p className="text-text-secondary mb-1 text-sm lg:text-base">Software Engineer</p>
          <p className="text-xs lg:text-sm text-text-muted mb-4">(Full Stack, Scalable Systems)</p>
          
          <div className="flex items-center justify-center text-xs lg:text-sm text-text-muted mb-6">
            <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
            Gurugram, Haryana, India
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:yashr3037@gmail.com"
              className="p-2 text-text-muted hover:text-accent-blue transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <a
              href="https://github.com/iyashraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-blue transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <a
              href="https://linkedin.com/in/iiyashraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-blue transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all duration-200 flex items-center text-sm lg:text-base ${
                    activeSection === section.id
                      ? 'bg-sidebar-nav-hover text-sidebar-nav-active font-medium shadow-soft'
                      : 'text-text-secondary hover:bg-sidebar-nav-hover hover:text-text-primary'
                  }`}
                >
                  <section.icon className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3" />
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
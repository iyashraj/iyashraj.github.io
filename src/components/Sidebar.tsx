import { useState, useEffect } from 'react';
import { MapPin, Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/yash-profile.jpg';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experiences' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Profile Section */}
      <div className="flex-shrink-0 p-8 text-center animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-medium animate-float">
          <img 
            src={profileImage} 
            alt="Yash Raj" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Yash Raj</h1>
        <p className="text-text-secondary mb-2 font-medium">Software Engineer</p>
        <p className="text-sm text-text-muted mb-4">(Full Stack, Scalable Systems)</p>
        
        <div className="flex items-center justify-center text-text-muted text-sm mb-6">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Gurugram, Haryana, India</span>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="mailto:yashr3037@gmail.com" 
            className="text-text-muted hover:text-accent-blue transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/iyashraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/iiyashraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-8">
        <ul className="space-y-1">
          {navigationItems.map((item, index) => (
            <li key={item.id} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`nav-link w-full text-left ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-background border-sidebar-border"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-80 bg-sidebar-bg border-r border-sidebar-border z-40
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {sidebarContent}
      </aside>
    </>
  );
};
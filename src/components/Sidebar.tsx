import {
  User,
  Briefcase,
  FolderOpen,
  Code,
  GraduationCap,
} from "lucide-react";
import { ProfileCard } from "./Profile";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

const sections = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experiences", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "skills", label: "Skills", icon: Code },
  { id: "education", label: "Education", icon: GraduationCap },
];

export const Sidebar = ({
  activeSection,
  onSectionChange,
  isMobileOpen = false,
  onMobileToggle,
}: SidebarProps) => {
  return (
    <aside
      className={`w-full h-full bg-sidebar-bg border-r border-sidebar-border z-50 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:z-auto`}
    >
      {/* Mobile Close Button */}
      <div className="lg:hidden absolute top-4 right-4">
        <button
          onClick={onMobileToggle}
          className="p-2 text-text-muted hover:text-text-primary"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center p-6 lg:p-0 w-full">
        <ProfileCard size="small" showBio={true} />

        {/* Navigation */}
        <nav className="w-full lg:p-6 lg:pt-0">
          <ul className="flex flex-col w-full">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`w-full flex items-center text-left py-2 lg:py-3 transition-all duration-200 ${
                    activeSection === section.id
                      ? "pl-6 lg:pl-8 text-accent-blue font-medium border-l-2 border-accent-blue"
                      : "pl-4 lg:pl-6 text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <section.icon className="w-5 h-5 mr-3" />
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

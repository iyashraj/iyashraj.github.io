import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer - II',
    company: 'Arthmate Financing India Pvt. Ltd.',
    period: 'Apr 2024 – Present',
    location: 'Gurugram, India',
    description: 'Built SaaS LMS-LOS platform with Next.js & Supabase, IFA Dashboard with React & Node.js, AWS services, Redis queues, cron jobs, Retool dashboards, etc.',
    technologies: ['Next.js', 'Supabase', 'React', 'Node.js', 'AWS', 'Redis', 'Retool']
  },
  {
    title: 'Software Developer (UI)',
    company: 'Brimming Grace Capital Pvt. Ltd.',
    period: 'Oct 2022 – Mar 2024',
    location: 'Mumbai, India',
    description: 'Built ChatSense & DialSense with React, Redux, Django, PostgreSQL, WebSockets, Redis, Celery, JWT. Led frontend team, integrated payment gateways, and optimized production performance.',
    technologies: ['React', 'Redux', 'Django', 'PostgreSQL', 'WebSockets', 'Redis', 'Celery', 'JWT']
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="animate-fade-in">
      <h2 className="section-heading">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">{exp.title}</h3>
                <p className="text-accent-blue font-medium mb-2">{exp.company}</p>
              </div>
              <div className="text-sm text-text-muted">
                <div className="flex items-center mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {exp.period}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {exp.location}
                </div>
              </div>
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
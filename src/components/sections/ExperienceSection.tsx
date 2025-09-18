import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer - II",
    company: "Arthmate Financing India Pvt. Ltd.",
    companyUrl: "https://www.arthmate.com/",
    period: "Apr 2024 – Present",
    location: "Gurugram, India",
    description: [
      "Driving development of a SaaS LMS-LOS platform in fintech, building onboarding flows, document workflows, and interactive dashboards with Next.js, Supabase, and Node.js.",
      "Designed and shipped an advisor-facing dashboard with real-time tracking, reporting, and analytics, while streamlining complex business processes through automation.",
      "Adopted AWS serverless services and Redis queues to handle large-scale async workflows with improved reliability and lower latency.",
      "Introduced automation scripts, cron jobs, and internal Retool dashboards to improve efficiency and reduce manual work across teams.",
      "Partner closely with cross-functional stakeholders, resolving production issues and tuning database performance for scalability.",
    ],
    projectLinks: [
      { name: "IFA Dashboard", url: "https://ifa.arthmatedirect.com/" },
      { name: "LOS-LMS Platform", url: "https://omnifi-los-lms.vercel.app/" },
    ],
    technologies: [
      "Next.js",
      "Supabase",
      "React",
      "Node.js",
      "Express",
      "Redis",
      "PostgreSQL",
      "Retool",
      "AWS",
      "Serverless",
      "Python-Scripting",
      "Git",
    ],
  },
  {
    title: "Software Developer",
    company: "Brimming Grace Capital Pvt. Ltd.",
    companyUrl: "https://www.chatsense.in/",
    period: "Oct 2022 – Mar 2024",
    location: "Gurugram, India",
    description: [
      "Contributed to real-time messaging platforms built on WhatsApp Business APIs, enabling enterprises to run campaigns and handle large-scale customer engagement.",
      "Built and optimized user interfaces with React and Redux while extending backend features in Django and PostgreSQL for better integration between systems.",
      "Integrated secure payment workflows with multiple providers and designed access control features to strengthen security and compliance.",
      "Implemented WebSockets and Redis for real-time updates, along with Celery tasks to reliably process large workloads.",
      "Used Docker to package apps so they run the same on any computer or server.",
      "Configured Nginx to direct web traffic efficiently and make apps faster and more reliable.",
      "Created simple CI/CD pipelines to automatically test and deploy code, saving time and reducing mistakes.",
      "Mentored a small team, enforced coding standards, and drove performance improvements that enhanced user experience and system stability.",
    ],
    projectLinks: [
      { name: "ChatSense", url: "https://www.chatsense.in/" },
      { name: "DialSense", url: "https://www.dialsense.in/" },
    ],
    technologies: [
      "React",
      "Redux",
      "Django",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Redis",
      "Celery",
      "JWT",
      "Docker",
      "Nginx",
      "CI/CD",
      "Payment Gateways",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Valyu.ai Pvt. Ltd.",
    companyUrl: "https://valyu.ai/",
    period: "Jun 2022 – Sep 2022",
    location: "Gurugram, India",
    description: [
      "Joined a fintech startup to help shape internal operational tools and dashboards for managing financial workflows.",
      "Worked on the Ops Portal with React, TypeScript, Styled Components, and Redux, focusing on state management and smoother API interactions.",
      "Delivered performance enhancements that noticeably improved page responsiveness and user experience across the platform.",
      "Collaborated with senior engineers to design and implement a company dashboard optimized for cross-device usage, ensuring consistency in look and feel.",
    ],
    projectLinks: [{ name: "Company Website", url: "https://valyu.ai/" }],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Styled Components",
      "REST APIs",
      "Git",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="animate-fade-in">
      <h2 className="section-heading">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card animate-slide-in-left"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {exp.title}
                </h3>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue font-medium mb-2 hover:underline"
                >
                  {exp.company}
                </a>
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
            <ul className="list-disc pl-5 text-text-secondary mb-4 space-y-2 leading-relaxed">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {exp.projectLinks && exp.projectLinks.length > 0 && (
              <div className="mb-3">
                <p className="text-sm font-medium text-text-muted mb-1">
                  Projects:
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.projectLinks.map((project, i) => (
                    <a
                      key={i}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:underline text-sm"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
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

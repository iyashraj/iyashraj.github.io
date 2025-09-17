import { ExternalLink, Github, Bot, Shirt } from 'lucide-react';

const projects = [
  {
    title: 'PDF Chatbot (AI-Powered Q&A)',
    description: 'An intelligent chatbot that can answer questions about uploaded PDF documents using advanced natural language processing and vector search.',
    technologies: ['Python', 'Streamlit', 'OpenAI', 'LangChain', 'FAISS'],
    icon: Bot,
    features: [
      'Upload and process PDF documents',
      'Natural language question answering',
      'Vector-based document search',
      'Real-time AI responses'
    ]
  },
  {
    title: 'Cloket (Digital Wardrobe App)',
    description: 'A modern digital wardrobe management application that helps users organize, categorize, and plan their clothing items with an intuitive interface.',
    technologies: ['React', 'Redux', 'Material-UI', 'REST APIs'],
    icon: Shirt,
    features: [
      'Digital wardrobe organization',
      'Outfit planning and suggestions',
      'Category-based item management',
      'Responsive design'
    ]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="animate-fade-in">
      <h2 className="section-heading">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent rounded-lg">
                <project.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-4">{project.description}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Key Features:</h4>
              <ul className="text-sm text-text-secondary space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
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
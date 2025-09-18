const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS']
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django REST Framework']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    category: 'Cloud/Tools',
    skills: ['Supabase', 'AWS (Lambda, S3, CloudWatch, Cognito, CodeCommit)', 'Docker', 'Git', 'Retool']
  },
  {
    category: 'AI/ML Tools',
    skills: ['OpenAI API', 'LangChain', 'FAISS', 'Streamlit', 'GPT-3.5/4']
  },
  {
    category: 'Other',
    skills: ['REST APIs', 'WebSockets', 'Payment Gateways', 'JWT', 'Supabase Edge Functions']
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="animate-fade-in">
      <h2 className="section-heading">Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={category.category} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="text-lg font-semibold text-text-primary mb-3">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
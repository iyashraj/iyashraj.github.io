import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="animate-fade-in">
      <h2 className="section-heading">Education</h2>
      <div className="experience-card">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent rounded-lg">
            <GraduationCap className="w-6 h-6 text-accent-blue" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-accent-blue font-medium mb-2">
              Indira Gandhi National Open University
            </p>
            <div className="flex items-center text-sm text-text-muted">
              <Calendar className="w-4 h-4 mr-1" />
              <span>2018 – 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
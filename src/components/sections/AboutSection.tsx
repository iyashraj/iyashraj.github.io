import { Download } from "lucide-react";
import resumePDF from "@/assets/yash_resume_sde2.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="animate-fade-in">
      {/* Heading with button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h2 className="section-heading">About Me</h2>
        <a
          href={resumePDF}
          download
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2 bg-orange-500 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform transition-colors duration-300 relative overflow-hidden"
        >
          Download CV
          <Download className="w-5 h-5 animate-bounce ml-1" />
          {/* Glow effect */}
          <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(255,165,0,0.5)] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>

      <div className="prose max-w-none">
        <p className="text-text-secondary leading-relaxed mb-4">
          I'm a full-stack developer passionate about building scalable and user-friendly applications. I enjoy combining thoughtful frontend design with robust backend systems to deliver smooth experiences.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Some highlights of my work include developing a SaaS-based LMS-LOS platform at <strong>Arthmate</strong> using Next.js, Supabase, AWS, and Redis, and building real-time messaging platforms at <strong>Brimming Grace</strong> with React, Django, and PostgreSQL. I’ve also integrated payment gateways and led a small frontend team to production-ready results.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          My toolkit includes React, Next.js, Redux, Tailwind CSS, Node.js, Django, PostgreSQL, and additional experience with Supabase, AWS, Docker, and AI/ML tools such as LangChain, FAISS, and OpenAI APIs. I’m comfortable collaborating with cross-functional teams and quickly adapting to new technologies.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Beyond development, I enjoy <span className="underline decoration-wavy text-orange-500">coding</span>, <span className="underline decoration-wavy text-orange-500">music</span>, and <span className="underline decoration-wavy text-orange-500">memes</span> 🎵💻😂 — a mix that keeps my creativity flowing.
        </p>
        <p className="text-text-secondary leading-relaxed">
          I strive to solve meaningful problems, build impactful products, and continuously grow as a developer.
        </p>
      </div>
    </section>
  );
};

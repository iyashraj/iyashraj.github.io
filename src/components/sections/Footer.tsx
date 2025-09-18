import { Mail, Phone, Linkedin, Github, Coffee, Twitter, Download } from "lucide-react";
import resumePDF from "@/assets/yash_resume_sde2.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-gray-800 py-0 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-8">

        {/* Connect Section */}
        <div className="flex flex-col space-y-4 flex-1 min-w-[220px]">
          <h2 className="text-2xl font-bold tracking-wide">Let's Connect!</h2>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:flex-wrap sm:gap-4">
            <a className="flex items-center gap-2 hover:text-orange-500 transition-colors" href="tel:+918969899879">
              <Phone className="w-5 h-5"/> +91 89698 99879
            </a>
            <a className="flex items-center gap-2 hover:text-orange-500 transition-colors" href="mailto:yashr3037@gmail.com">
              <Mail className="w-5 h-5"/> yashr3037@gmail.com
            </a>
            <a className="flex items-center gap-2 hover:text-orange-500 transition-colors" href="https://linkedin.com/in/iiyashraj" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5"/> LinkedIn
            </a>
            <a className="flex items-center gap-2 hover:text-orange-500 transition-colors" href="https://github.com/iyashraj" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5"/> GitHub
            </a>
            <a className="flex items-center gap-2 hover:text-orange-500 transition-colors" href="https://x.com/singlethreaddev" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5"/> Twitter
            </a>
          </div>
        </div>

        {/* Download CV Button */}
        <a
          href={resumePDF}
          download
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2 bg-orange-500 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform transition-colors duration-300 relative overflow-hidden"
        >
          Download CV
          <Download className="w-5 h-5 animate-bounce ml-1" />
          <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(255,165,0,0.5)] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        </a>

      </div>

      {/* Crunchy Ending Line */}
      <p className="text-center text-gray-500 mt-10 italic tracking-wider">
        "Coding, Coffee, and a Dash of Magic — That's My Brew!"
      </p>

      {/* Copyright & Made With */}
      <p className="text-center text-gray-400 mt-4 text-sm">
        &copy; {currentYear} Yash Raj. Made with ☕, ❤️, and a curious mind.
      </p>
    </footer>
  );
};

export default Footer;

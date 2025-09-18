import { MapPin, Mail, Github, Linkedin, Download } from "lucide-react";
import profileImage from "@/assets/yash-profile.png";
import resumePDF from "@/assets/yash_resume_sde2.pdf";

interface ProfileCardProps {
  size?: "small" | "large"; // small for sidebar, large for main section
  showBio?: boolean; // whether to show bio or not
}

export const ProfileCard = ({
  size = "large",
  showBio = true,
}: ProfileCardProps) => {
  const isLarge = size !== "small";

  return (
    <div
      className={`relative flex flex-col items-center w-full p-0 ${
        !isLarge ? "sm:p-0 md:p-0" : "p-4"
      } bg-white`}
    >
      {/* Download Button (top-right) */}
      {!isLarge && (
        <a
          href={resumePDF}
          download
          className="absolute top-6 right-4 inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 transition-transform transition-colors duration-300"
          title="Download Resume"
        >
          <Download className="w-5 h-5" />
        </a>
      )}

      {/* Profile Image and Info Container */}
      <div
        className={`flex items-center w-full space-x-4 pt-0 pb-0 mt-0 mb-0 pl-2 sm:pl-4 md:mt-6 sm:mt-4 ${
          isLarge ? "justify-center" : ""
        }`}
      >
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Yash Raj Profile"
          className={`rounded-full object-cover shadow-sm border-2 border-accent-blue transition-transform duration-300 hover:scale-105 ${
            isLarge
              ? "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
              : "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
          }`}
        />

        {/* Profile Info */}
        <div className="flex flex-col justify-center text-left">
          <h1
            className={`${
              isLarge
                ? "text-2xl sm:text-3xl md:text-4xl"
                : "text-xl sm:text-2xl md:text-3xl"
            } font-bold text-text-primary`}
          >
            Yash Raj
          </h1>
          <p
            className={`${
              isLarge
                ? "text-sm sm:text-base md:text-lg"
                : "text-xs sm:text-sm md:text-base"
            } text-text-secondary mt-1`}
          >
            Software Engineer II
          </p>
          <p className="text-xs text-text-muted mt-0.5">(Full Stack)</p>

          {/* Location */}
          <div
            className={`${
              isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm"
            } flex items-center text-text-muted mt-1`}
          >
            <MapPin className="w-4 h-4 mr-1 text-accent-blue" />
            Gurugram, Haryana
          </div>

          {/* Social Links */}
          <div className="flex space-x-2 mt-2">
            <a
              href="mailto:yashr3037@gmail.com"
              className="p-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/iyashraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/iiyashraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/singlethreaddev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.87 0c-2.52 0-4.57 2.04-4.57 4.57 0 .36.04.71.12 1.05A12.94 12.94 0 013 1.64a4.56 4.56 0 001.41 6.09 4.48 4.48 0 01-2.07-.57v.06c0 2.2 1.57 4.04 3.66 4.46a4.52 4.52 0 01-2.06.08 4.57 4.57 0 004.26 3.17A9.05 9.05 0 012 19.54a12.84 12.84 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2-.01-.42-.02-.63A9.22 9.22 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bio */}
      {showBio && (
        <p className="text-center text-gray-500 mt-5 mb-5 pl-10 pr-10 italic tracking-wider">
          "Software Engineer with 3 years of experience building scalable,
          secure, high-performance web applications, currently contributing to
          SaaS-based LMS-LOS platforms in fintech and B2B domains."
        </p>
      )}
    </div>
  );
};

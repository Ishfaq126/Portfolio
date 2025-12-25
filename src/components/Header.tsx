import { BookOpen, PenTool } from "lucide-react";
import profileData from "../assets/data/profile.json";

export function Header() {
  const { name, profile_picture, socials, job_title } = profileData;

  return (
    <div className="flex flex-col items-center space-y-3 lg:space-y-4">
      {profile_picture && (
        <div className="relative">
          <img
            src={profile_picture}
            alt={name}
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
        </div>
      )}

      <div className="text-center">
        <h1
          className={`font-bold text-foreground mb-2 ${
            profile_picture
              ? "text-lg sm:text-xl lg:text-2xl"
              : "text-xl sm:text-2xl lg:text-3xl"
          }`}
        >
          {name}
        </h1>
        {job_title && (
          <p className="text-xs text-muted-foreground">{job_title}</p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 lg:gap-3 max-w-xs">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <i className="devicon-linkedin-plain text-sm lg:text-base text-foreground group-hover:text-primary transition-colors"></i>
          </a>
        )}
        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <i className="devicon-github-original text-sm lg:text-base text-foreground group-hover:text-primary transition-colors"></i>
          </a>
        )}
        {socials.twitter && (
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <i className="devicon-twitter-original text-sm lg:text-base text-foreground group-hover:text-primary transition-colors"></i>
          </a>
        )}
        {socials.devto && (
          <a
            href={socials.devto}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <BookOpen className="w-3 h-3 lg:w-4 lg:h-4 text-foreground group-hover:text-primary transition-colors" />
          </a>
        )}
        {socials.medium && (
          <a
            href={socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <PenTool className="w-3 h-3 lg:w-4 lg:h-4 text-foreground group-hover:text-primary transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}

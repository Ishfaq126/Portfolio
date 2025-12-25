import profileData from "../assets/data/profile.json";
import { ExternalLink, MapPin, Calendar, Building2 } from "lucide-react";

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  link?: string;
  logo?: string;
  tech?: string[];
  description?: string;
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border-l-4 border-primary rounded-r-xl p-6 hover:bg-white/10 transition-colors duration-300 space-y-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
            {job.logo ? (
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <Building2 className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-base font-semibold text-foreground mb-1"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {job.role}
            </h3>
            <div
              className="flex items-center gap-1 text-sm text-muted-foreground mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span>{job.company}</span>
              {job.link && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-end gap-1 text-xs text-muted-foreground"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{job.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      {job.tech && job.tech.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-4">
          {job.tech.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-1.5 py-0.5 bg-secondary/50 text-secondary-foreground rounded text-xs"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {job.description && (
        <div className="pt-2">
          <p
            className="text-xs text-foreground leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {job.description}
          </p>
          <div className="border-t border-border mt-2"></div>
        </div>
      )}
    </div>
  );
}

export function WorkExperience() {
  const { experience } = profileData;

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2
          className="text-2xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Work Experience
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
      </div>

      <div className="space-y-4">
        {experience.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}

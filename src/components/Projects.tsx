import profileData from "../assets/data/profile.json"
import { Github, Eye } from "lucide-react"

function ProjectCard({ project }: { project: any, index: number }) {
  const isComingSoon = project.coming_soon

  return (
    <div className={`group rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col ${
      isComingSoon ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:scale-[1.02]'
    }`}>
      {/* Background Image/GIF - Top Section */}
      {project.background ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.background}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {isComingSoon && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Coming Soon
                </div>
                <div className="text-sm text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Stay tuned!
                </div>
              </div>
            </div>
          )}
        </div>
      ) : isComingSoon ? (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Coming Soon
            </div>
            <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Stay tuned!
            </div>
          </div>
        </div>
      ) : (
        <div className="h-48 bg-muted flex items-center justify-center">
          <div className="text-muted-foreground text-center">
            <div className="text-4xl mb-2">📁</div>
            <div className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              No Preview
            </div>
          </div>
        </div>
      )}

      {/* Content - Bottom Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.slice(0, 4).map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {project.description}
        </p>

        {/* Action Buttons - Always at bottom */}
        {!isComingSoon && (project.live || project.code) && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-xs font-medium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Eye className="w-3 h-3" />
                Live Demo
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors text-xs font-medium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Github className="w-3 h-3" />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  const { projects } = profileData

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Projects</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

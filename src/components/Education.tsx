import profileData from "../assets/data/profile.json"
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react"

function EducationCard({ education }: { education: any, index: number }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Logo/Icon */}
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          {education.logo ? (
            <img
              src={education.logo}
              alt={`${education.university} logo`}
              className="w-full h-full object-cover"
            />
          ) : (
            <GraduationCap className="w-6 h-6 text-primary" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {education.degree}
            </h3>
            <div className="flex items-start gap-2 text-primary font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="leading-tight">{education.university}</span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>{education.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>{education.period}</span>
            </div>
            {education.gpa && (
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>GPA: {education.gpa}</span>
              </div>
            )}
            {education.grade && (
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>Grade: {education.grade}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {education.description && (
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {education.description}
            </p>
          )}

          {/* Details */}
          {education.details && education.details.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Key Highlights:
              </h4>
              <ul className="space-y-1">
                {education.details.map((detail: string, detailIndex: number) => (
                  <li key={detailIndex} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {detail.includes('Thesis:') ? (
                        <>
                          <span className="font-semibold text-foreground">Thesis:</span> {detail.replace('Thesis: ', '')}
                        </>
                      ) : (
                        detail
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function Education() {
  const { education } = profileData

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Education</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </div>
  )
}

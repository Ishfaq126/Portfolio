import { Header } from "./components/Header";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import profileData from "./assets/data/profile.json";
import { Download } from "lucide-react";

function App() {
  const { summary, skills, currentlyLearning } = profileData;

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-start lg:items-center justify-center p-4 pt-4 md:pt-20">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <Header />

            <div id="about" className="space-y-6">
              <div className="prose prose-xs max-w-none">
                <p className="text-foreground leading-relaxed">{summary}</p>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      <i className={`devicon-${skill.icon_key} text-xs`}></i>
                      {skill.name}
                    </span>
                  ))}
                </div>

                {currentlyLearning && currentlyLearning.length > 0 && (
                  <div className="space-y-2">
                    <p
                      className="text-xs font-medium text-muted-foreground"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Currently Learning:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentlyLearning.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          <i className={`devicon-${tech.icon_key} text-xs`}></i>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {profileData.resume_link && (
                <div className="pt-2">
                  <a
                    href={profileData.resume_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-xs font-medium"
                  >
                    <Download className="w-3 h-3" />
                    Download Resume
                  </a>
                </div>
              )}
            </div>
          </div>

          <div id="experience" className="mt-12">
            <WorkExperience />
          </div>

          <div id="projects" className="mt-12">
            <Projects />
          </div>

          <div id="education" className="mt-12">
            <Education />
          </div>
        </div>
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;

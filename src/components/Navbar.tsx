import { Button } from "./ui/button"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['about', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/5 backdrop-blur-sm border-b border-white/10' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-full transition-colors ${
                activeSection === 'about' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-full transition-colors ${
                activeSection === 'experience' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-full transition-colors ${
                activeSection === 'projects' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-full transition-colors ${
                activeSection === 'education' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => scrollToSection('education')}
            >
              Education
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-full transition-colors ${
                activeSection === 'contact' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

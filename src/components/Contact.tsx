import profileData from "../assets/data/profile.json";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  const { email, phone } = profileData;

  return (
    <footer className="mt-20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Let's Work Together
            </h2>
            <p
              className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              I'm always excited to discuss new opportunities, collaborate on
              interesting projects, or just have a chat about technology and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-16xl mx-auto">
            {email && (
              <a
                href={`mailto:${email}`}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3
                      className="font-semibold text-foreground mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Email Me
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {email}
                    </p>
                  </div>
                </div>
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone}`}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3
                      className="font-semibold text-foreground mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Call Me
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {phone}
                    </p>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col items-center space-y-4">
              {profileData.copyright && (
                <p
                  className="text-xs text-muted-foreground/70"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {profileData.copyright}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

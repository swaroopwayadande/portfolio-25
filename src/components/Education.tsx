import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Trophy, MapPin, Globe, BookOpen, CheckCircle } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono-tech text-xs">
            <GraduationCap className="w-4 h-4" /> ACADEMICS & RECOGNITION
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-accent bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Academic qualifications, national paper presentation awards, and core computer science foundations.
          </p>
        </div>
        
        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/30 group-hover:border-primary transition-colors">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-mono-tech">
                  2022 – 2026
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-secondary font-semibold">
                  Computer Science & Engineering (CSE)
                </p>
                <p className="text-sm text-muted-foreground">
                  Shivaji University, Kolhapur (TKIET Warananagar)
                </p>
                <p className="text-xs text-muted-foreground/80 pt-2 font-mono-tech">
                  Core: DSA, OOP, Operating Systems, Computer Networks, DBMS
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl border border-secondary/30 group-hover:border-secondary transition-colors">
                <GraduationCap className="w-7 h-7 text-secondary" />
              </div>
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono-tech">
                  2020 – 2022
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                  Higher Secondary Education (HSC)
                </h3>
                <p className="text-secondary font-semibold">
                  Science Stream
                </p>
                <p className="text-sm text-muted-foreground">
                  Yashwant Highschool va Uchh Madhyamik Vidyalaya, Kodoli
                </p>
              </div>
            </div>
          </Card>

        </div>
        
        {/* National Award Card */}
        <Card className="p-8 bg-card/80 backdrop-blur-md border-primary/30 hover:border-primary/60 transition-all hover:shadow-glow mb-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-2xl border border-primary/30 shrink-0">
              <Trophy className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-primary/20 border border-primary/40 text-primary text-xs font-mono-tech">
                  National Level Award
                </span>
                <span className="text-xs text-muted-foreground font-mono-tech">2023</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Eureka and Jidnyasa Winner (3rd Rank National Level)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Secured 3rd rank in Eureka, a prestigious National Level Paper Presentation competition. Co-authored and presented a technical paper analyzing Artificial Intelligence paradigms, societal impact, and secure application frameworks.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/60 border border-border text-center space-y-2">
            <Globe className="w-6 h-6 text-primary mx-auto" />
            <h4 className="font-bold text-foreground">Languages</h4>
            <p className="text-xs font-mono-tech text-muted-foreground">English, Hindi, Marathi</p>
            <p className="text-[11px] text-primary font-mono-tech">Full Professional Proficiency</p>
          </Card>

          <Card className="p-6 bg-card/60 border border-border text-center space-y-2">
            <MapPin className="w-6 h-6 text-secondary mx-auto" />
            <h4 className="font-bold text-foreground">Location & Base</h4>
            <p className="text-xs font-mono-tech text-muted-foreground">Sangli / Kolhapur, Maharashtra, India</p>
            <p className="text-[11px] text-secondary font-mono-tech">Open to Relocation & Remote</p>
          </Card>

          <Card className="p-6 bg-card/60 border border-border text-center space-y-2">
            <Award className="w-6 h-6 text-primary mx-auto" />
            <h4 className="font-bold text-foreground">Key Focus Areas</h4>
            <p className="text-xs font-mono-tech text-muted-foreground">Application Security (AppSec)</p>
            <p className="text-[11px] text-primary font-mono-tech">MERN Full-Stack & Accessibility Audit</p>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Education;

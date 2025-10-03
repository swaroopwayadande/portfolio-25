import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Trophy } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Education & Achievements
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-glow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">B.Tech Computer Science & Engineering</h3>
                <p className="text-primary mb-2">Tatyasaheb Kore Institute of Engineering and Technology</p>
                <p className="text-muted-foreground">Warananagar • 2022 - 2026</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-glow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secondary Education</h3>
                <p className="text-primary mb-2">Yashwant Highschool va uchh madhyamik vidyalaya</p>
                <p className="text-muted-foreground">Kodoli • 2020 - 2022</p>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-glow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Trophy className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Eureka and Jidnyasa Winner (2023)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secured 3rd rank in Eureka (National level paper presentation competition) along with my team. 
                Presented paper on Artificial Intelligence and its impact on society.
              </p>
            </div>
          </div>
        </Card>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 text-center">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Languages</h4>
            <p className="text-sm text-muted-foreground">English, Hindi, Marathi</p>
            <p className="text-xs text-muted-foreground mt-1">Full Professional Proficiency</p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 text-center">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-sm text-muted-foreground">Kolhapur, India</p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 text-center">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Interests</h4>
            <p className="text-sm text-muted-foreground">FOSS, Reading, Tech, Gaming</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

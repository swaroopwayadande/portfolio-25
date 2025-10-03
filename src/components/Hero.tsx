import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-primary">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-primary font-medium">Web Developer / Software Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Swaroop Wayadande
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Innovative technical head with expertise in C/C++, Python, and JavaScript. 
              Proven ability to lead MERN stack projects, driving problem-solving initiatives and fostering collaboration.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:shadow-xl hover:scale-105"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/swaroopwayadande" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border transition-all hover:border-primary hover:shadow-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/swaroopwayadande" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border transition-all hover:border-primary hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:swaroopwayadande@gmail.com"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border transition-all hover:border-primary hover:shadow-glow"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://swaroopwayadande.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border transition-all hover:border-primary hover:shadow-glow"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-80 h-80 bg-card rounded-2xl border-2 border-primary/20 overflow-hidden shadow-card flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="text-center p-8">
                  <div className="w-full h-full bg-muted/20 rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground">Your Photo Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

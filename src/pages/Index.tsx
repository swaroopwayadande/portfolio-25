import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SecurityAuditor from "@/components/SecurityAuditor";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { ShieldCheck, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="space-y-4">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <SecurityAuditor />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-primary/20 relative z-10 font-mono-tech text-xs">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>© 2026 Swaroop Wayadande. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Designed for <span className="text-primary font-bold">Application Security</span> & Full-Stack Engineering</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

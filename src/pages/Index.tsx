import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Swaroop Wayadande. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

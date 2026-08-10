import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Shield, Terminal, Award, Lock, ExternalLink } from "lucide-react";
import swarImage from "@/images/me/swar image.jpg";

const Hero = () => {
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const terminalLines = [
    { text: "$ appsec-audit --target meity-stqc-compliance", color: "text-secondary" },
    { text: "[+] Initializing vulnerability scanner...", color: "text-muted-foreground" },
    { text: "[✓] OWASP Top 10 Risk Analysis: PASSED (Injection, Auth, Misconfig)", color: "text-primary" },
    { text: "[✓] GIGW 2.0 & WCAG 2.1 AA Compliance: AUDITED", color: "text-primary" },
    { text: "[✓] MERN Stack API Security & JWT Verification: SECURE", color: "text-secondary" },
    { text: "[!] Status: Ready for Application Security Engineering roles.", color: "text-primary font-bold text-glow" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIndex((prev) => (prev < terminalLines.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="min-h-screen pt-28 pb-16 px-4 bg-cyber-grid relative overflow-hidden flex items-center">
      {/* Glow background effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono-tech">
                <Shield className="w-3.5 h-3.5" /> STQC (MeitY) Intern
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono-tech">
                <Lock className="w-3.5 h-3.5" /> AppSec & MERN Developer
              </span>
            </div>
            
            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Swaroop <span className="bg-gradient-accent bg-clip-text text-transparent">Wayadande</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary font-mono-tech tracking-wide">
                Application Security Specialist & Full-Stack Developer
              </p>
            </div>
            
            {/* Summary */}
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Full-Stack Developer with hands-on experience in the MERN stack and STQC (MeitY) security auditing. 
              Specialized in building secure web applications, REST APIs, and conducting accessibility & security compliance testing 
              (<span className="text-foreground font-semibold">OWASP Top 10, GIGW 2.0, WCAG 2.1</span>).
            </p>
            
            {/* CLI Terminal Card */}
            <div className="rounded-xl bg-card/90 border border-border p-4 shadow-card font-mono-tech text-xs md:text-sm space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/60 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs text-muted-foreground ml-2">security-audit-console</span>
                </div>
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              
              <div className="space-y-1.5 min-h-[120px]">
                {terminalLines.slice(0, terminalLineIndex).map((line, i) => (
                  <p key={i} className={line.color}>
                    {line.text}
                  </p>
                ))}
                {terminalLineIndex < terminalLines.length && (
                  <span className="inline-block w-2 h-4 bg-primary animate-blink align-middle"></span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow transition-all hover:scale-[1.02]"
              >
                <a href="#projects">
                  Explore Projects & Audits
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            {/* Social & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="https://github.com/swaroopwayadande" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all hover:shadow-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/swaroopwayadande" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:swaroopwayadande@gmail.com"
                aria-label="Send Email"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all hover:shadow-glow"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919850465915"
                aria-label="Call Swaroop"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all hover:shadow-glow"
              >
                <Phone className="w-5 h-5" />
              </a>

              <div className="hidden sm:flex items-center gap-2 ml-4 text-xs font-mono-tech text-muted-foreground border-l border-border pl-4">
                <span>Location:</span>
                <span className="text-foreground">Sangli / Kolhapur, IN</span>
              </div>
            </div>

          </div>
          
          {/* Right Column - Profile Image & Shield Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Cyber Glow */}
              <div className="absolute -inset-1 bg-gradient-accent rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="relative bg-card rounded-2xl border-2 border-primary/30 p-3 shadow-card space-y-3">
                
                {/* Photo */}
                <div className="relative aspect-square rounded-xl overflow-hidden border border-primary/20 bg-muted/20">
                  <img
                    src={swarImage}
                    alt="Swaroop Wayadande"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Cyber scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
                </div>

                {/* Badge Overlay */}
                <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/20 space-y-1.5 text-xs font-mono-tech">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>ROLE_SPEC:</span>
                    <span className="text-primary font-semibold">APPLICATION SECURITY</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>AFFILIATION:</span>
                    <span className="text-foreground font-medium">STQC (MeitY) Intern</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>DEGREE:</span>
                    <span className="text-foreground">B.Tech CSE (2022-2026)</span>
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

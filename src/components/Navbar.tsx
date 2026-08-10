import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Terminal, Menu, X, FileText } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Security Lab", href: "#audit-lab" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeUrl = "https://drive.google.com/drive/folders/1bcD6wYZ-qgYPaVUNOCsZ5IS9-xpDDt9X?usp=sharing";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-primary/20 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#about" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary group-hover:shadow-glow transition-all">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono-tech font-bold text-lg tracking-wider text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
              SWAROOP <span className="text-primary text-xs font-normal px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">APPSEC</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative py-1 hover:before:w-full before:w-0 before:h-0.5 before:bg-primary before:absolute before:bottom-0 before:left-0 before:transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-card border border-primary/20 text-xs font-mono-tech text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary">SECURE</span>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-glow transition-all font-mono-tech text-xs"
          >
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-card border border-border text-foreground hover:text-primary"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-primary/20 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary py-1 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono-tech"
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                View Full Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

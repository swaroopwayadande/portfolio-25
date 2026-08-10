import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShieldCheck, Lock, Code, Terminal } from "lucide-react";

// Explicit imports for images
import blogSiteImg from "@/images/projects/blogsite.png";

const projects = [
  {
    title: "Alumni Connect",
    category: "Full-Stack & Authentication",
    date: "2025 - 2026",
    description:
      "Built a full-stack alumni networking platform for mentorship, job referrals, and scholarships. Implemented multi-role authentication with email OTP, JWT, and role-based access control. Developed Student, Alumni, and Admin dashboards with real-time data using Firebase.",
    tags: ["React.js", "Spring-Boot", "Firebase", "JWT", "Tailwind CSS"],
    badge: "Multi-Role Auth & Security",
    github: "https://github.com/swaroopwayadande",
    link: "",
    image: null,
    icon: Lock,
  },
  {
    title: "Accessibility & Compliance Testing (STQC)",
    category: "Security & Accessibility",
    date: "Feb 2026 – Present",
    description:
      "Performed accessibility testing of government websites and NIMA mobile app as per GIGW 2.0 & WCAG guidelines. Conducted DBIM compliance audits to ensure adherence to government UI/UX standards. Used Accessibility Scanner, ADB commands, and custom Scrapy scripts for automated testing and reporting.",
    tags: ["GIGW 2.0", "WCAG", "Accessibility Scanner", "ADB", "Scrapy"],
    badge: "STQC MeitY Audit",
    github: "https://github.com/swaroopwayadande",
    link: "",
    image: null,
    icon: ShieldCheck,
  },
  {
    title: "Blog Management Platform",
    category: "Full-Stack Web App",
    date: "2025",
    description:
      "Developed a secure multi-user blogging platform with authentication and role-based access. Designed RESTful APIs following MVC architecture with MongoDB integration.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS"],
    badge: "RESTful MVC Architecture",
    github: "https://github.com/swaroopwayadande/blog-posting-app",
    link: "https://blog-posting-app-bysa.onrender.com",
    image: blogSiteImg,
    icon: Code,
  },
  {
    title: "Web Application Security Learning Lab",
    category: "Application Security & OWASP",
    date: "2025 - 2026",
    description:
      "Studied and analyzed OWASP Top 10 vulnerabilities including Broken Authentication, Injection, and Security Misconfiguration. Inspected HTTP requests, cookies, and sessions using Burp Suite. Explored secure coding practices for web applications.",
    tags: ["OWASP Top 10", "Burp Suite", "Postman", "HTTP Session Security"],
    badge: "OWASP Top 10 Research",
    github: "https://github.com/swaroopwayadande",
    link: "",
    image: null,
    icon: Terminal,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono-tech text-xs">
            <ShieldCheck className="w-4 h-4" /> RESUME PROJECTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Full-stack software engineering, government accessibility audits, and web application security research.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;

            return (
              <Card
                key={idx}
                className="overflow-hidden bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group flex flex-col justify-between"
              >
                <div>
                  {/* Top Image or Cyber Header Header Banner */}
                  <div className="aspect-video bg-muted/30 relative overflow-hidden flex items-center justify-center border-b border-border/60">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-cyber-grid p-6 flex flex-col justify-between items-start relative">
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs font-mono-tech text-muted-foreground">[PROJECT_ID #{idx + 1}]</span>
                          <Icon className="w-6 h-6 text-primary animate-pulse" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-mono-tech text-base font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs font-mono-tech text-secondary">{project.category}</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                      </div>
                    )}

                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-background/90 backdrop-blur-sm text-primary border border-primary/30 text-xs font-mono-tech shadow-md">
                        {project.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono-tech text-muted-foreground">
                      <span>{project.category}</span>
                      <span>{project.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, tagIdx) => (
                        <Badge
                          key={tagIdx}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs font-mono-tech"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Buttons */}
                <div className="p-6 pt-0 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg border border-primary/30 bg-card hover:bg-primary/10 hover:border-primary text-xs font-mono-tech text-foreground hover:text-primary transition"
                  >
                    <Github className="w-4 h-4" /> GitHub Repository
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg border border-secondary/30 bg-secondary/10 hover:bg-secondary/20 text-xs font-mono-tech text-secondary transition"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Site
                    </a>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;

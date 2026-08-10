import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Code, CheckCircle2, Calendar, Building2, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Intern -- Standardisation Testing & Quality Certification (STQC)",
    organization: "Ministry of Electronics and Information Technology (MeitY)",
    location: "Government of India",
    period: "Feb 2026 – Present",
    type: "Security & Accessibility Audit",
    icon: ShieldAlert,
    highlights: [
      "Conducted accessibility and security compliance testing of government websites and mobile apps using GIGW 2.0, WCAG 2.1, and DBIM guidelines.",
      "Performed mobile accessibility matrix testing and website compliance audits.",
      "Gained practical exposure to OWASP Top 10 vulnerabilities, secure coding practices, and web application security concepts.",
      "Prepared detailed audit reports and remediation recommendations according to MeitY standards.",
    ],
    skills: ["GIGW 2.0", "WCAG 2.1", "OWASP Top 10", "DBIM", "Mobile Matrix Testing", "Burp Suite", "Accessibility Scanner", "ADB"],
  },
  {
    role: "MERN Stack Developer Intern",
    organization: "Mayasabha XR",
    location: "Remote / On-site",
    period: "Jan 2026 – Feb 2026",
    type: "Full-Stack Development",
    icon: Code,
    highlights: [
      "Built full-stack web application features using Node.js, Express.js, and Strapi CMS.",
      "Integrated Appwrite authentication and database management services.",
      "Developed high-performance REST APIs for production applications.",
    ],
    skills: ["Node.js", "Express.js", "Strapi", "Appwrite", "REST APIs", "MERN Stack"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono-tech text-xs">
            <Building2 className="w-4 h-4" /> CAREER TIMELINE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Hands-on expertise in Application Security Audits at STQC (MeitY) and Full-Stack MERN engineering.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-secondary/30 before:to-transparent">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-2 border-primary shadow-glow flex items-center justify-center z-10 my-4 md:my-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-8">
                  <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono-tech">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground font-mono-tech gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    
                    <p className="text-sm font-semibold text-secondary mb-4">
                      {exp.organization} • <span className="text-muted-foreground font-normal">{exp.location}</span>
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                      {exp.skills.map((skill, sIdx) => (
                        <Badge
                          key={sIdx}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs font-mono-tech"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

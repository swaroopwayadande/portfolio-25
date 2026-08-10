import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Server, Code2, Wrench, Cpu, Check } from "lucide-react";

const skillCategories = [
  {
    icon: ShieldCheck,
    title: "Security & Testing",
    accent: "text-primary",
    badgeBg: "bg-primary/10 border-primary/30 text-primary",
    description: "Web App Security, Standards & Penetration Tools",
    skills: [
      "OWASP Top 10",
      "GIGW 2.0 & WCAG 2.1",
      "DBIM Audit",
      "Burp Suite",
      "SQLMap",
      "Wireshark",
      "Secure Coding",
      "API Security Testing",
      "Vulnerability Assessment",
      "Accessibility Scanner",
      "ADB Commands",
    ],
  },
  {
    icon: Server,
    title: "Backend & Databases",
    accent: "text-secondary",
    badgeBg: "bg-secondary/10 border-secondary/30 text-secondary",
    description: "API Architectures & Scalable Data Stores",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MongoDB",
      "SQL",
      "Firebase",
      "Strapi CMS",
      "Appwrite",
    ],
  },
  {
    icon: Code2,
    title: "Frontend & Languages",
    accent: "text-primary",
    badgeBg: "bg-primary/10 border-primary/30 text-primary",
    description: "Modern UI Libraries & Core Programming Languages",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Python",
      "C / C++",
      "Tailwind CSS",
      "EJS Templating",
      "HTML5 / CSS3",
      "Spring-Boot (Basics)",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Core CS",
    accent: "text-secondary",
    badgeBg: "bg-secondary/10 border-secondary/30 text-secondary",
    description: "Developer Environment & Computer Science Foundations",
    skills: [
      "Git & GitHub",
      "Linux / Bash",
      "Scrapy Web Automation",
      "Postman",
      "VS Code",
      "Render / Vercel",
      "Data Structures & Algo (DSA)",
      "Object Oriented Programming (OOP)",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-cyber-grid relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono-tech text-xs">
            <Cpu className="w-4 h-4" /> TECHNICAL MATRIX
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning Web Application Security auditing, Full-Stack MERN engineering, and CS fundamentals.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="p-6 md:p-8 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-card border border-border group-hover:border-primary transition-colors`}>
                    <Icon className={`w-7 h-7 ${category.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono-tech mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <Badge
                      key={sIdx}
                      variant="outline"
                      className={`px-3 py-1.5 text-xs font-mono-tech bg-card/60 hover:bg-card border-border hover:border-primary/40 text-foreground transition-all flex items-center gap-1.5`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;

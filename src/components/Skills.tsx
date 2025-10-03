import { Card } from "@/components/ui/card";
import { Code2, Database, GitBranch, Terminal } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["C/C++", "Python", "JavaScript", "Java"]
  },
  {
    icon: Database,
    title: "Technologies",
    skills: ["MERN Stack", "SQL", "MongoDB", "Node.js", "Express"]
  },
  {
    icon: GitBranch,
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Linux", "EJS", "DSA"]
  },
  {
    icon: Terminal,
    title: "Concepts",
    skills: ["OOPs", "Operating Systems", "FOSS"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-glow group"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "College Community Website (CSI - TKIET)",
    date: "September 2025",
    description:
      "Students can view notices, events, and team details with an admin panel for secure content management. Implemented responsive and dynamic UI features (mobile-friendly navbar, animated sections, notices/events integration with MongoDB), improving accessibility and engagement for hundreds of students.",
    tags: ["EJS", "Node.js", "Express", "MongoDB"],
    image: "src/images/projects/csi_website.png",
    github: "https://github.com/swaroopwayadande/csi_website",
    link: "https://csi-website-k140.onrender.com",
  },
  {
    title: "Blog Posting App",
    date: "2025",
    description:
      "Developed a full-stack posting application to gain hands-on experience with server-side rendering using EJS and backend development with Node.js and Express. Implemented CRUD operations and data management using MongoDB as the database.",
    tags: ["EJS", "Node.js", "Express", "MongoDB"],
    image: "src/images/projects/blogsite.png",
    github: "https://github.com/swaroopwayadande/blog-posting-app",
    link: "https://blog-posting-app-bysa.onrender.com",
  },
  {
    title: "Study Schedule Generator",
    date: "2023",
    description:
      "Developed a command-line Study Schedule Generator in C that accepts a user-specified number of subjects and 'hardness' ratings to allocate study time proportionally across topics. Integrated file I/O to export personalized schedules to a formatted text file.",
    tags: ["C Programming", "DSA", "File I/O"],
    image: "src/images/projects/studyschedulegenerator.png",
    github: "https://github.com/swaroopwayadande/study-schedule-generator",
    link: "",
  },
  {
    title: "Healthy Harvest", // your new project info
    date: "2023",
    description: "An Android app developed in Java using SQLite that shows all diseases that can affect crops. This project was created as a group project.",
    tags: ["Android", "Java", "SQLite", "Group Project"],
    image: "src/images/projects/healthyharvest.jpg", // replace with your actual image if any
    github: "https://github.com/swaroopwayadande/healthy-harvest", // replace with your actual GitHub link
    link: "", // if there's a live demo, add URL here
  }

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-primary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-glow group min-h-[420px]"
            >
              <div className="aspect-video bg-muted/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{project.date}</p>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-card hover:bg-blue-100 transition"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-card hover:bg-blue-100 transition"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Site
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

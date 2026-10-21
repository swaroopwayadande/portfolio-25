import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Github, Linkedin, Mail, Menu, ShieldCheck, X } from "lucide-react";
import blogSiteImage from "@/images/projects/blogsite.png";
import csiImage from "@/images/projects/csi_website.png";
import studyImage from "@/images/projects/studyschedulegenerator.png";
import harvestImage from "@/images/projects/healthyharvest.jpg";
import "./App.css";

const resumeUrl = "https://drive.google.com/drive/folders/1bcD6wYZ-qgYPaVUNOCsZ5IS9-xpDDt9X?usp=sharing";
const links = [
  ["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"], ["Experience", "#experience"], ["Contact", "#contact"],
] as const;

function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Swaroop Wayadande, home"><span className="brand-mark"><ShieldCheck size={20}/></span><span>swaroop<span className="brand-dot">.</span></span></a>
    <nav className={open ? "navigation navigation-open" : "navigation"} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14}/></a>
    </nav>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
  </header>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

const projects = [
  { number: "01", title: "Alumni Connect", category: "Full-stack platform", description: "An alumni networking platform for mentorship, job referrals, and scholarships, with Student, Alumni, and Admin dashboards, email OTP, JWT-related workflows, role-based access, and real-time Firebase data.", tags: ["React", "Spring Boot", "Firebase", "JWT", "Tailwind CSS"], github: "https://github.com/swaroopwayadande" },
  { number: "02", title: "Web Application Security Learning Lab", category: "Application security", description: "Learning work covering OWASP Top 10 topics such as Broken Authentication, Injection, and Security Misconfiguration; inspecting HTTP requests, cookies, and sessions with Burp Suite; and exploring secure coding practices.", tags: ["OWASP Top 10", "Burp Suite", "Postman", "HTTP session security"], github: "https://github.com/swaroopwayadande" },
  { number: "03", title: "Blog Management Platform", category: "Full-stack web app", description: "A multi-user blogging platform built with server-rendered EJS, Node.js, and Express. It supports authentication, role-based access, CRUD operations, RESTful MVC APIs, and MongoDB data management.", tags: ["Node.js", "Express", "MongoDB", "EJS"], github: "https://github.com/swaroopwayadande/blog-posting-app", demo: "https://blog-posting-app-bysa.onrender.com", image: blogSiteImage },
  { number: "04", title: "College Community Website (CSI - TKIET)", category: "Community website · 2025", description: "A college community site for notices, events, and team details, with an admin panel for content management. Includes a responsive interface and notices/events integration with MongoDB.", tags: ["EJS", "Node.js", "Express", "MongoDB"], github: "https://github.com/swaroopwayadande/csi_website", demo: "https://csi-website-k140.onrender.com", image: csiImage },
  { number: "05", title: "Study Schedule Generator", category: "Command-line app · 2023", description: "A C command-line tool that allocates study time across subjects based on user-provided difficulty ratings and exports a personalized schedule to a formatted text file.", tags: ["C", "DSA", "File I/O"], github: "https://github.com/swaroopwayadande/study-schedule-generator", image: studyImage },
  { number: "06", title: "Healthy Harvest", category: "Android app · 2023", description: "A group Android application that uses a local database to show diseases that can affect crops.", tags: ["Android", "Java", "SQLite", "Group project"], github: "https://github.com/swaroopwayadande/healthy-harvest", image: harvestImage },
  { number: "07", title: "Accessibility & Compliance Testing", category: "Testing experience · STQC", description: "Government website and mobile application testing against applicable accessibility and quality requirements, with observations documented for technical reporting.", tags: ["GIGW 2.0", "WCAG", "ADB", "Scrapy"], github: "https://github.com/swaroopwayadande" },
];

const skillGroups = [
  { title: "Application & Web Security", items: ["OWASP Top 10", "Web application security", "Vulnerability assessment", "Security misconfiguration", "Authentication & access control", "Secure coding fundamentals"] },
  { title: "Tools & Environment", items: ["Burp Suite", "SQLMap", "Nmap", "Wireshark", "Linux", "Postman", "Metasploit"] },
  { title: "Web, APIs & Programming", items: ["REST APIs", "HTTP / HTTPS", "Node.js", "Express.js", "JWT", "JavaScript", "Python", "C / C++"] },
  { title: "Development & Testing", items: ["React", "HTML5 / CSS3", "Git / GitHub", "MongoDB / MySQL", "Web application testing", "Technical reporting", "GIGW 2.0 / WCAG"] },
];

function Hero() {
  return <section className="hero section-wrap" id="home"><div className="hero-copy">
    <p className="eyebrow"><span className="status-dot"/> Application security <span className="eyebrow-slash">/</span> web testing</p>
    <h1>Hi, I’m Swaroop<br/><span>Wayadande.</span></h1>
    <p className="hero-lede">Building safer web applications through testing, curiosity, and continuous learning.</p>
    <p className="hero-summary">B.Tech CSE (2026) graduate with six months of testing experience at STQC (MeitY). I’m growing my application security practice through hands-on labs and web testing.</p>
    <div className="hero-actions"><a className="button button-primary" href="#projects">View all projects <ArrowRight size={16}/></a><a className="button button-quiet" href={resumeUrl} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a></div>
    <div className="social-links"><a href="https://github.com/swaroopwayadande" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href="https://linkedin.com/in/swaroopwayadande" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href="https://tryhackme.com/p/swaroopwayadande" target="_blank" rel="noreferrer"><span className="social-monogram">THM</span> TryHackMe</a><a href="mailto:swaroopwayadande@gmail.com"><Mail size={16}/> Email</a></div>
  </div><div className="hero-visual" role="img" aria-label="Illustrative application security learning notes; no live scan is running"><div className="visual-top"><span><i/> <i/> <i/></span><span>practice-notes.md</span><Braces size={16}/></div><div className="visual-body"><p className="code-muted">01 <span>// learning in progress</span></p><p><b>focus</b> = <em>"application security"</em></p><p className="code-muted">02 <span>// practical foundations</span></p><p><b>topics</b> = [</p><p className="code-indent">"OWASP Top 10",</p><p className="code-indent">"HTTP &amp; APIs",</p><p className="code-indent">"auth &amp; access control"</p><p>]</p><div className="visual-note"><span className="status-dot"/> Learning lab · illustrative notes, not a live scan</div></div><div className="visual-foot"><span>TEST WITH CURIOSITY</span><span>BUILD WITH CARE</span></div></div>
    <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15}/></a>
  </section>;
}

function Projects() { return <section className="section-wrap" id="projects"><SectionHeading eyebrow="Selected work" title="Projects & practice" copy="A mix of application security learning and software projects. Every link and detail reflects the current portfolio."/><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
  {project.image ? <img className="project-image" src={project.image} alt={`${project.title} project preview`}/> : <div className="project-art"><span>{project.number} / 07</span><ShieldCheck size={32}/><span>{project.category}</span></div>}
  <div className="project-content"><div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={14}/></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}</div></div>
  </article>)}</div><p className="all-projects-note">Seven distinct projects from the current portfolio and repository history.</p></section>; }

function About() { return <section className="section-wrap section-tint" id="about"><div className="about-layout"><SectionHeading eyebrow="A little about me" title="Curious by nature. Careful by design."/><div className="about-copy"><p>I’m a Computer Science and Engineering graduate interested in how web applications work—and how they can be made safer. My software testing experience gave me a practical view of quality, clear documentation, and thoughtful remediation.</p><p>I’m building on that foundation with OWASP Top 10 study, web security labs, and hands-on familiarity with tools such as Burp Suite, SQLMap, Nmap, and Linux.</p><div className="about-facts"><div><strong>6 months</strong><span>STQC internship</span></div><div><strong>Top 30%</strong><span>Reported TryHackMe rank</span></div><div><strong>300+ students</strong><span>Linux community learning</span></div></div></div></div></section>; }

function Skills() { return <section className="section-wrap" id="skills"><SectionHeading eyebrow="What I work with" title="Skills & learning" copy="A working foundation across security, testing, and development. I’m continuing to build practical depth through labs and projects."/><div className="skills-grid">{skillGroups.map(group => <article className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div><p className="learning-note"><span className="status-dot"/> Currently practising web security labs and OWASP Top 10 concepts on <a href="https://tryhackme.com/p/swaroopwayadande" target="_blank" rel="noreferrer">TryHackMe as swaroopwayadande <ArrowUpRight size={13}/></a>.</p></section>; }

function Experience() { return <section className="section-wrap section-tint" id="experience"><SectionHeading eyebrow="Experience" title="Learning through real work"/><div className="experience-list"><article className="experience-item"><div className="experience-date">Feb 2026 — Aug 2026 <span>Internship</span></div><div><h3>Standardisation Testing and Quality Certification <span>(STQC, MeitY)</span></h3><p className="experience-place">Kolkata, India</p><ul><li>Tested government websites and a mobile application against applicable quality and compliance requirements.</li><li>Used OWASP Top 10 as a reference when assessing common web application security risks.</li><li>Applied web testing techniques, ADB, Accessibility Scanner, and custom Scrapy scripts to identify and document issues.</li><li>Prepared technical reports and recommendations to support issue remediation.</li></ul></div></article><article className="experience-item"><div className="experience-date">Jan 2026 — Feb 2026 <span>Internship</span></div><div><h3>MERN Stack Developer Intern <span>· Mayasabha XR</span></h3><p className="experience-place">Application development</p><ul><li>Developed application features with Node.js, Express.js, Strapi, and JavaScript.</li><li>Integrated Appwrite authentication and database services and built REST APIs.</li></ul></div></article><article className="experience-item"><div className="experience-date">2024 — 2025 <span>Community</span></div><div><h3>Technical Head <span>· TKIET Linux User Group</span></h3><p>Contributed to Linux and open-source community activities and supported technical learning for 300+ students.</p></div></article></div></section>; }

function Contact() { return <section className="section-wrap contact-section" id="contact"><SectionHeading eyebrow="Get in touch" title="Let’s make the web safer." copy="Open to junior application security, web testing, QA, and security-minded development opportunities."/><div className="contact-card"><div><p className="eyebrow">Have an opportunity or idea?</p><a className="contact-email" href="mailto:swaroopwayadande@gmail.com">swaroopwayadande@gmail.com <ArrowUpRight size={20}/></a><p className="contact-location">India · Prefer Pune-based opportunities</p></div><div className="contact-actions"><a className="button button-primary" href="mailto:swaroopwayadande@gmail.com">Send an email <ArrowRight size={16}/></a><a className="button button-quiet" href="tel:+919850465915">+91 9850465915</a></div></div></section>; }

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation/><main id="main"><Hero/><About/><Projects/><Skills/><Experience/><Contact/></main><footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark"><ShieldCheck size={18}/></span><span>swaroop<span className="brand-dot">.</span></span></a><p>© {new Date().getFullYear()} Swaroop Wayadande · Built with curiosity and care.</p><div><a href="https://github.com/swaroopwayadande" aria-label="GitHub"><Github size={17}/></a><a href="https://linkedin.com/in/swaroopwayadande" aria-label="LinkedIn"><Linkedin size={17}/></a></div></footer></>;
}

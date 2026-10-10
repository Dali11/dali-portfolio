import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss,
  SiPython, SiFastapi, SiNodedotjs, SiPostgresql,
  SiPandas, SiGit, SiGithub, SiVercel, SiLinux, SiQgis,
  SiGdal,
} from "react-icons/si";
import { FaServer, FaBrain, FaDatabase } from "react-icons/fa";
import { TbChartDots3 } from "react-icons/tb";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, BrainCircuit, Code2, Database,
  Github, Linkedin, Mail, MapPinned, Music2, Sparkles
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import ProjectCard from "@/components/project-card";
import ScrollReveal from "@/components/scroll-reveal";
import { projects } from "@/data/projects";

const services = [
  {
    icon: Code2,
    title: "Software development",
    text: "Full-stack web applications, APIs and scalable systems.",
    color: "mint"
  },
  {
    icon: Database,
    title: "Data engineering & GIS",
    text: "Data pipelines, analytics and geospatial solutions.",
    color: "lavender"
  },
  {
    icon: BrainCircuit,
    title: "AI integration",
    text: "Practical AI features and intelligent workflows.",
    color: "coral"
  },
  {
    icon: Sparkles,
    title: "Digital products",
    text: "User-focused products from first idea to launch.",
    color: "yellow"
  }
];

const toolGroups = [
  {
    title: "Development",
    description: "Building modern web applications",
    tools: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Data & GIS",
    description: "Working with data, databases and maps",
    tools: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "PostGIS", icon: FaDatabase },
      { name: "Pandas", icon: SiPandas },
      { name: "GeoPandas", icon: TbChartDots3 },
      { name: "QGIS", icon: SiQgis },
      { name: "GDAL", icon: SiGdal },
    ],
  },
  {
    title: "Infrastructure",
    description: "Shipping and running applications",
    tools: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Linux", icon: SiLinux },
      { name: "VPS", icon: FaServer },
    ],
  },
  {
    title: "AI & LLMs",
    description: "Integrating intelligent features",
    tools: [
      { name: "LLMs", icon: FaBrain },
      { name: "AI Integration", icon: FaBrain },
    ],
  },
];

export default function PortfolioHome() {
  return (
    <>
      <SiteHeader />
      <ScrollReveal />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Independent developer · Malawi</p>
            <h1>
              I build things<br className="desktop-break" /> that move ideas
              <span className="headline-highlight"><span className="forward-paint-mistake" aria-hidden="true" /><span className="forward-eraser" aria-hidden="true" />forward.</span>
            </h1>
            <p className="hero-description">
              From data-driven platforms to useful digital products, I turn complex problems into software people can use.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">View my work <ArrowRight size={17} /></a>
              <a className="button button-light" href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></a>
            </div>
            <div className="availability">
              <span className="availability-dot" />
              <span>Open to exciting projects</span><i />
              <span>Malawi</span><i />
              <span>Worldwide</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Portrait of Dalitso">
            <div className="brush brush-lime" />
            <div className="brush brush-coral" />
            <div className="brush brush-lavender" />
            <span className="scribble scribble-one">〃</span>
            <div className="art-note impact-words" aria-label="Ideas, data, people, impact">
              <span style={{ "--word-index": 0 } as React.CSSProperties}>IDEAS</span>
              <span style={{ "--word-index": 1 } as React.CSSProperties}>DATA</span>
              <span style={{ "--word-index": 2 } as React.CSSProperties}>PEOPLE</span>
              <span style={{ "--word-index": 3 } as React.CSSProperties}>IMPACT</span>
            </div>
            <Image
              className="hero-portrait"
              src="/images/dalitso-portrait.png"
              alt="Dalitso wearing a charcoal hoodie"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 48vw"
            />
            <div className="hero-stat">
              <div><strong>04</strong><span>Featured projects</span></div>
              <div><strong>∞</strong><span>Ideas in progress</span></div>
              <div><strong>↗</strong><span>Real-world impact</span></div>
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">A selection of what I&apos;ve been building</p>
              <h2>Selected<br className="heading-break" /> projects<span className="lime-period">.</span></h2>
            </div>
            <p className="section-intro">A mix of data, web and product projects solving real problems in Malawi and beyond.</p>
            <a className="button button-light view-all" href="#contact">Let&apos;s discuss a project <ArrowRight size={16} /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="services-heading">
            <p className="eyebrow">What I do</p>
            <h2>From concept<br />to deployment<span className="lime-period">.</span></h2>
            <p>I enjoy connecting thoughtful design with practical engineering.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text, color }) => (
              <article className="service-item" key={title}>
                <div className={`service-icon ${color}`}><Icon size={24} strokeWidth={1.8} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-art">
            <div className="about-brush" />
            <Image src="/images/dalitso-portrait.png" alt="" fill sizes="(max-width: 760px) 90vw, 30vw" />
            <p>Same curiosity.<br />Bigger impact.</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A little about me</p>
            <h2>A builder at heart<span className="lime-period">.</span></h2>
            <p>I&apos;m a developer from Malawi who enjoys turning ideas into useful, well-crafted software. I care about real-world impact, clean design, and technology that makes a difference for people and communities.</p>
            <a className="text-link" href="mailto:hello@dalitso.dev">More about me <ArrowUpRight size={16} /></a>
          </div>
          <div className="tools-panel">
            <p className="tools-title">Tools I work with<span className="tools-title-dot">.</span></p>
            <p className="tools-intro">The technologies behind my projects.</p>
            <div className="tools-groups">
              {toolGroups.map((group, groupIndex) => (
                <section className="tool-group" key={group.title}>
                  <div className="tool-group-heading">
                    <span className="tool-group-number">{String(groupIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>
                  <div className="tools-list">
                    {group.tools.map(({ name, icon: Icon }, index) => (
                      <div
                        className="tool-item"
                        key={name}
                        style={{ "--tool-delay": `${(groupIndex * 55) + (index * 35)}ms` } as React.CSSProperties}
                        title={name}
                      >
                        <span className="tool-icon"><Icon aria-hidden="true" /></span>
                        <span className="tool-name">{name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-brush" aria-hidden="true"><span /><span /></div>
          <div className="contact-copy">
            <p className="eyebrow">Have something in mind?</p>
            <h2>Let&apos;s make it real<span>.</span></h2>
            <p>Open to freelance projects, collaborations and full-time opportunities. Have an idea? Let&apos;s talk.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-lime" href="mailto:hello@dalitso.dev">Get in touch <ArrowRight size={17} /></a>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:hello@dalitso.dev" aria-label="Email"><Mail /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="wordmark">dalitso<span>.</span></a>
        <p>Designed with intent. Built with curiosity.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </>
  );
}

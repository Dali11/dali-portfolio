import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLiveLink =
    project.href.startsWith("https://") ||
    project.href.startsWith("http://");

  return (
    <article className={`project-card ${project.color}`}>
      <div className="project-visual">
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          sizes="(max-width: 680px) 92vw, (max-width: 1050px) 46vw, 24vw"
        />

        <span className="visual-label">{project.category}</span>
      </div>

      <div className="project-meta">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
        <span className="project-status">{project.status}</span>
      </div>

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div className="project-technologies" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <a
        href={hasLiveLink ? project.href : "#contact"}
        target={hasLiveLink ? "_blank" : undefined}
        rel={hasLiveLink ? "noopener noreferrer" : undefined}
        className="text-link"
        aria-label={
          hasLiveLink
            ? `Visit ${project.name}`
            : `Enquire about ${project.name}`
        }
      >
        {hasLiveLink ? "Visit project" : "Discuss project"}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.color}`}>
      <div className="project-visual">
        <Image
          src={project.image}
          alt={`${project.name} interface concept`}
          fill
          sizes="(max-width: 680px) 92vw, (max-width: 1050px) 46vw, 24vw"
        />
        <span className="visual-label">{project.category}</span>
      </div>
      <div className="project-meta">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.href} className="text-link" aria-label={`Ask about ${project.name}`}>
        Explore project <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

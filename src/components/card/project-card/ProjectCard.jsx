import "./ProjectCard.scss";
import { Github, ExternalLink, Lock } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="projects__container__item">
      <div className="projects__type">{project.type}</div>
      <img
        className="projects__picture"
        src={project.image}
        alt={project.alt}
      />
      <h3 className="projects__name">{project.title}</h3>
      <p className="projects__description">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <>
          <p className="projects__highlights">Belangrijkste punten</p>
          <ul className="projects__highlights__list">
            {project.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.tech && project.tech.length > 0 && (
        <div className="projects__tech">
          {project.tech.map((tech, i) => (
            <div key={i} className="projects__tech__item">
              {tech}
            </div>
          ))}
        </div>
      )}

      {project.private ? (
        <div className="projects__private">
          <Lock className="projects__private__icon" />
          <span className="projects__private__text">
            Dit project is privé
          </span>
        </div>
      ) : (
        <div className="projects__button">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button__github"
            >
              <Github className="projects__button__github__icon" />
              Code
            </a>
          )}

          {project.demo !== undefined && (
  project.demo ? (
    project.demo.includes("jurgenvanfraeijenhove.nl") ? (
      <div className="projects__button__demo disable">
        <ExternalLink className="projects__button__demo__icon" />
        Je bent er al
      </div>
    ) : (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="projects__button__demo"
      >
        <ExternalLink className="projects__button__demo__icon" />
        Demo
      </a>
    )
  ) : (
    <div className="projects__button__demo hide">
      <ExternalLink className="projects__button__demo__icon" />
    </div>
  )
)}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;

import "./Projects.scss";
import { useEffect } from "react";
import {
  Folder,
  Github,
  Code2,
} from "lucide-react";

import projects from "../../data/projects/projects";
import ProjectCard from "../../components/card/project-card/ProjectCard";

function Projects() {
  useEffect(() => {
    document.title = "Portfolio | Projecten 🎨";
  }, []);

  return (
    <>
      <Folder className="projects__icon" />
      <h1 className="projects__title">Projecten 🎨</h1>
      <p>Dit zijn een aantal grote projecten die ik gedaan heb!</p>

      <div className="projects__container">
        <div className="projects__container__items">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="projects__github">
        <Code2 className="projects__github__icon" />
        <h2 className="projects__github__title">Wil je meer zien?</h2>
        <p className="projects__github__description">
          Bekijk mijn GitHub profiel voor meer projecten en bijdragen tijdens
          mijn studie
        </p>
        <a
          href="https://github.com/JurgenvanF"
          target="_blank"
          rel="noopener noreferrer"
          className="projects__github__button"
        >
          <Github className="projects__github__button__icon" />
          Bekijk GitHub profiel
        </a>
      </div>
    </>
  );
}

export default Projects;

import "./Projects.css";
import { useEffect } from "react";
import { Folder } from "lucide-react";

function Projects() {
  useEffect(() => {
    document.title = "Portfolio | Projecten 🎨";
  }, []);

  return (
    <>
      <Folder className="projects__icon" />
      <h1 className="title__projects">Projecten 🎨</h1>
      <p>Dit zijn de projecten die ik gedaan heb!</p>
    </>
  );
}

export default Projects;

import "./Projects.css";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Portfolio | Projecten 🎨";
  }, []);

  return (
    <>
      <h1 className="title__projects">Projecten 🎨</h1>
      <p>Dit zijn de projecten die ik gedaan heb!</p>
    </>
  );
}

export default Projects;

import "./Education.css";
import { useEffect } from "react";
import { GraduationCap } from "lucide-react";

function Education() {
  useEffect(() => {
    document.title = "Portfolio | Opleiding 🎓";
  }, []);

  return (
    <>
      <GraduationCap className="education__icon" />
      <h1 className="title__education">Opleiding 🎓</h1>
      <p>Op deze scholen heb ik gezeten!</p>
    </>
  );
}

export default Education;

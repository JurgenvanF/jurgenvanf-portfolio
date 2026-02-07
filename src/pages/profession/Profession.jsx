import "./Profession.css";
import { useEffect } from "react";
import { Briefcase } from "lucide-react";

function Profession() {
  useEffect(() => {
    document.title = "Portfolio | Beroep 💼";
  }, []);

  return (
    <>
      <Briefcase className="profession__icon" />
      <h1 className="title__profession">Beroep 💼</h1>
      <p>Dit is mijn werkervaring!</p>
    </>
  );
}

export default Profession;

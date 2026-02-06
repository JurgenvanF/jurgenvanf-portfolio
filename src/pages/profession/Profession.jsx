import "./Profession.css";
import { useEffect } from "react";

function Profession() {
  useEffect(() => {
    document.title = "Portfolio | Beroep 💼";
  }, []);

  return (
    <>
      <h1 className="title__profession">Beroep 💼</h1>
      <p>Dit is mijn werkervaring!</p>
    </>
  );
}

export default Profession;

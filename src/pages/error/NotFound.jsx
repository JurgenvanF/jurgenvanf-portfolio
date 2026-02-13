import { Link } from "react-router-dom";
import { House, Ghost } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="error-title">
        <h1>404</h1>
        <h1 className="duplicate">⬮</h1>
        <Ghost />
      </div>
      <h2>Oeps! Deze pagina is niet gevonden.</h2>
      <p>De pagina waar je naar zoekt bestaat niet.</p>
      <Link to="/" className="error-button">
        <House className="error-button-icon" />
        Terug naar de homepagina
      </Link>
      <p className="error-quote">
        "Not all those who wander are lost"
        <br /> - J.R.R. Tolkien
      </p>
    </div>
  );
}

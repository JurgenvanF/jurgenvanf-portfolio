import "./Home.css";
import logo from "../../assets/profilepicture.jpg";
import { Mail, Github } from "lucide-react";

function Home() {
  return (
    <>
      <img className="title__picture" src={logo} />
      <h1 className="title__home">Jurgen van Fraeijenhove</h1>
      <p className="title__semititle">Front-end Designer & Developer 🚀</p>
      <p className="title__description">
        Hallo! 👋 Ik ben een developer met een passie voor design en houd ervan
        om websites te maken en ontwerpen. Wanneer ik niet aan het coderen ben
        speel ik graag een spelletje 🎮
      </p>

      <div className="title__buttons">
        <a
          href="mailto:jurgenvanf@gmail.com?subject=Laten%20we%20samenwerken"
          className="title__buttons__mail"
        >
          <Mail className="title__buttons__mail__icon" />
          Let's Chat
        </a>

        <a
          href="https://github.com/JurgenvanF"
          target="_blank"
          rel="noopener noreferrer"
          className="title__buttons__github"
        >
          <Github className="title__buttons__github__icon" />
          GitHub
        </a>
      </div>
    </>
  );
}

export default Home;

import { useState, useEffect, Suspense, useTransition } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Canvas } from "@react-three/fiber";
import HeadModel from "../../HeadModel";
import logo from "../../assets/profilepicture.jpg";
import {
  User,
  GraduationCap,
  Briefcase,
  Folder,
  Mail,
  Github,
  Rocket,
} from "lucide-react";

function Home() {
  const [showCanvas, setShowCanvas] = useState(false); // start with image
  const [hasCanvasLoaded, setHasCanvasLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    document.title = "Portfolio | Home";
  }, []);

  const toggleCanvas = () => {
    startTransition(() => {
      if (!showCanvas && !hasCanvasLoaded) {
        setHasCanvasLoaded(true);
      }
      setShowCanvas(!showCanvas);
    });
  };

  return (
    <>
      <div className="head-fade" onClick={toggleCanvas}>
        {(showCanvas || hasCanvasLoaded) && (
          <Suspense fallback={null}>
            <Canvas
              className={`model ${showCanvas ? "visible" : ""}`}
              camera={{ position: [0, 0, 3] }}
            >
              <ambientLight intensity={2} />
              <pointLight position={[100, 100, 100]} />
              <Suspense fallback={null}>
                <HeadModel url="/HeadModel.glb" />
              </Suspense>
            </Canvas>
          </Suspense>
        )}

        <img
          className={`title__picture ${!showCanvas ? "visible" : ""}`}
          src={logo}
          alt="Profile"
        />
      </div>

      {/* Mobile toggle button */}
      <div className="mobile-toggle">
        <button onClick={toggleCanvas}>
          {showCanvas ? "Maak me 2D" : "Maak me 3D"}
        </button>
      </div>

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

      <div className="pageRouting">
        <Link to="/opleiding" className="pageRouting__education">
          <GraduationCap className="pageRouting__education__icon" />
          <br />
          <h2 className="pageRouting__education__title">Opleiding 🎓</h2>
          <p className="pageRouting__education__text">
            Mijn academische avonturen
          </p>
        </Link>

        <Link to="/beroep" className="pageRouting__profession">
          <Briefcase className="pageRouting__profession__icon" />
          <h2 className="pageRouting__profession__title">Beroep 💼</h2>
          <p className="pageRouting__profession__text">
            Waar ik heb gewerkt en wat ik heb gebouwd
          </p>
        </Link>

        <Link to="/projecten" className="pageRouting__projects">
          <Folder className="pageRouting__projects__icon" />
          <h2 className="pageRouting__projects__title">Projecten 🎨</h2>
          <p className="pageRouting__projects__text">
            Coole dingen die ik heb gemaakt
          </p>
        </Link>
      </div>

      <h2 className="skills__title">
        <Rocket className="skills__icon" />
        Skills & Tech Stack
      </h2>
      <p>Technologieën waar ik mee gewerkt heb</p>

      <div className="skills__container">
        <div className="skills__container__item">
          <span className="skills__container__text html">HTML</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text css">CSS</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text js">
            JavaScript / TypeScript
          </span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text react">React</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text angular">Angular</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text laravel">Laravel</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text sql">SQL</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text git">Git / CI/CD</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text ux">UI/UX Design</span>
        </div>
      </div>
    </>
  );
}

export default Home;

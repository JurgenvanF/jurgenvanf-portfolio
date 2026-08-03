import { useState, useEffect, Suspense, useTransition } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Canvas } from "@react-three/fiber";
import HeadModel from "../../HeadModel";
import profile from "../../assets/profilepicture4.jpeg";
import {
  GraduationCap,
  Briefcase,
  Folder,
  Mail,
  Github,
  Linkedin,
  Rocket,
  Heart,
  User,
} from "lucide-react";
import ProfileModal from "../../components/profile-modal/ProfileModal";

function Home() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [hasCanvasLoaded, setHasCanvasLoaded] = useState(false);
  const [, startTransition] = useTransition();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCanvas = () => {
    startTransition(() => {
      if (!showCanvas && !hasCanvasLoaded) setHasCanvasLoaded(true);
      setShowCanvas(!showCanvas);
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.title = "Portfolio | Home";
  }, []);

  return (
    <>
      <div
        className={`head-fade ${showCanvas ? "model-active" : ""}`}
        onClick={toggleCanvas}
      >
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
        <div className="model-cover"></div>

        <div className={`title__pictureFloat ${!showCanvas ? "visible" : ""}`}>
          <img className="title__picture" src={profile} alt="Profile" />
        </div>
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

        <button onClick={openModal} className="title__buttons__modal">
          <User className="title__buttons__modal__icon" />
          Over Mij
        </button>

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
          {/* <Link to="/beroep" className="pageRouting__profession open-position"> */}
          {/* <span className="open-position-icon">🔍</span> */}
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
          <span className="skills__container__text css">CSS / SCSS</span>
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
          <span className="skills__container__text laravel">PHP / Laravel</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text sql">SQL</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text git">Git</span>
        </div>
        <div className="skills__container__item">
          <span className="skills__container__text ux">UI/UX Design</span>
        </div>
      </div>

      <div className="data__container">
        <div className="data__container__item">
          <span className="data__container__icon">⏰</span>
          <br />
          <span className="data__container__text years">5+</span>
          <p className="data__container__subtext">Jaren codeer ervaring</p>
        </div>
        <div className="data__container__item">
          <span className="data__container__icon">🚀</span>
          <br />
          <span className="data__container__text projects">10+</span>
          <p className="data__container__subtext">Voltooide projecten</p>
        </div>
        <div className="data__container__item">
          <span className="data__container__icon">🍔</span>
          <br />
          <span className="data__container__text snacks">∞</span>
          <p className="data__container__subtext">Snacks</p>
        </div>
        <div className="data__container__item">
          <span className="data__container__icon">💻</span>
          <br />
          <span className="data__container__text lines">Te veel</span>
          <p className="data__container__subtext">Regels code</p>
        </div>
      </div>

      <div className="finish">
        <Heart className="finish__icon" />
        <h1 className="finish__text">Ik vind het leuk dat je er bent!</h1>
        <p className="finish__subtext">
          Heb je een interessant project in gedachten? Of wil je simpelweg
          contact met mij opnemen? Ik sta altijd open voor een praatje!!
        </p>
        <div className="finish__socialbuttons">
          <a
            href="mailto:jurgenvanf@gmail.com?subject=Laten%20we%20samenwerken"
            className="finish__buttons mail"
          >
            <Mail className="finish__buttons__icon mail" />
            Stuur Email
          </a>

          <a
            href="https://www.linkedin.com/in/jurgen-van-fraeijenhove-480329164/"
            target="_blank"
            rel="noopener noreferrer"
            className="finish__buttons linkedin"
          >
            <Linkedin className="finish__buttons__icon linkedin" />
            LinkedIn
          </a>

          <a
            href="https://github.com/JurgenvanF"
            target="_blank"
            rel="noopener noreferrer"
            className="finish__buttons github"
          >
            <Github className="finish__buttons__icon github" />
            GitHub
          </a>
        </div>
      </div>

      <ProfileModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default Home;

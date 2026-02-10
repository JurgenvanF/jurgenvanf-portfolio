import "./Projects.css";
import { useEffect } from "react";
import { Folder, Github, ExternalLink, Lock } from "lucide-react";
import logo from "../../assets/profilepicture.jpg";
import logoIsoaAdvies from "../../assets/projects/isoaadvies/logo.jpg";
import logoEmergis from "../../assets/projects/emergis/logo.jpg";
import logoGardenConnect from "../../assets/projects/gardenconnect/logo.jpg";
import logoMijnNedbase from "../../assets/projects/mijnnedbase/logo.jpg";

function Projects() {
  useEffect(() => {
    document.title = "Portfolio | Projecten 🎨";
  }, []);

  return (
    <>
      <Folder className="projects__icon" />
      <h1 className="title__projects">Projecten 🎨</h1>
      <p>Dit zijn de projecten die ik gedaan heb!</p>

      <div className="projects__container">
        <div className="projects__container__items">
          <div className="projects__container__item">
            <div className="projects__type">Webapplicatie</div>
            <img
              className="projects__picture"
              src={logoMijnNedbase}
              alt="MijnNedbase"
            />
            <h3 className="projects__name">MijnNedbase</h3>
            <p className="projects__description">
              Mijn afstudeerproject: een applicatie waarmee Nedbase klanten
              beter kan informeren over hun producten bij Nedbase. Via
              verschillende API’s wordt actuele informatie opgehaald en kunnen
              klanten hun domeinen bekijken en beheren, websites inzien
              (inclusief wireflows), financieën bijhouden, contactpersonen zien
              en meer. Tijdens mijn stage heb ik de mogelijkheden onderzocht,
              een groot deel van het ontwerp gemaakt en wireflows opgesteld. Het
              eindresultaat is exact volgens deze ontwerpen uitgevoerd in
              Angular, waarbij de BEM-methode en component-based structuur is
              toegepast voor overzichtelijkheid en herbruikbaarheid.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>Wireflows en ontwerp volledig zelf uitgewerkt</li>
              <li>Implementatie in Angular met component-based structuur</li>
              <li>
                Gebruik van BEM-methodiek en variabelen voor stijlconsistentie
              </li>
              <li>Overzichtelijke en herbruikbare frontend</li>
              <li>
                Webapplicatie gebaseerd op de wireflow voor interne testing
              </li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">Angular</div>
              <div className="projects__tech__item">TypeScript</div>
              <div className="projects__tech__item">SCSS / BEM</div>
              <div className="projects__tech__item">REST APIs</div>
              <div className="projects__tech__item">Figma</div>
            </div>
            <div className="projects__private">
              <Lock className="projects__private__icon" />
              <span className="projects__private__text">
                Dit project is privé
              </span>
            </div>
          </div>

          <div className="projects__container__item">
            <div className="projects__type">Website</div>
            <img
              className="projects__picture"
              src={logoIsoaAdvies}
              alt="IsoAadvies"
            />
            <h3 className="projects__name">IsoAadvies</h3>
            <p className="projects__description">
              Deze website heb ik als privéproject gemaakt voor het
              isolatiebedrijf van mijn oom. De website informeert over isolatie,
              de mogelijkheden en biedt een manier om afspraken in te plannen.
              Er is een verstopte adminomgeving waarmee afspraken beheerd kunnen
              worden, inclusief automatische e-mailnotificaties. Daarnaast is er
              veel aandacht besteed aan responsiveness, animaties en effecten om
              de site reactiever en gebruiksvriendelijk te maken. Het ontwerp is
              volledig door mijzelf uitgewerkt, met het logo als enige
              referentiepunt.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>Volledig eigen ontwerp en uitwerking</li>
              <li>Responsive design voor mobiel en desktop</li>
              <li>Adminomgeving met automatische mailnotificaties</li>
              <li>Animaties en effecten voor meer interactiviteit</li>
              <li>Website praktisch identiek aan het originele ontwerp</li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">Laravel</div>
              <div className="projects__tech__item">PHP</div>
              <div className="projects__tech__item">HTML / CSS</div>
              <div className="projects__tech__item">JavaScript</div>
              <div className="projects__tech__item">Figma</div>
              <div className="projects__tech__item">Git</div>
            </div>
            <div className="projects__button">
              <a
                href="https://github.com/JurgenvanF/isoaadvies"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__github"
              >
                <Github className="projects__button__github__icon" />
                Code
              </a>
              <a
                href="https://youtu.be/6Cv1jKSGRQo"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__demo"
              >
                <ExternalLink className="projects__button__demo__icon" />
                Demo
              </a>
            </div>
          </div>

          <div className="projects__container__item">
            <div className="projects__type">Webapplicatie</div>
            <img
              className="projects__picture"
              src={logoEmergis}
              alt="Emergis"
            />
            <h3 className="projects__name">Emergis</h3>
            <p className="projects__description">
              Tijdens een groepsproject hebben we een website gemaakt voor
              Emergis. Ze zochten naar een nieuw systeem om projecten,
              financiën, documenten en andere gegevens te beheren, wat voorheen
              allemaal via Excel gebeurde. Wij hebben hiervoor een passende
              oplossing gerealiseerd. Ik heb bijgedragen aan het design, de
              layout en veel van de uitwerking van de website. Het project is
              gebouwd met het Laravel framework, waarmee ik goed overweg kan.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>Overzichtelijk systeem ter vervanging van Excel</li>
              <li>Bijdrage aan design en layout</li>
              <li>
                Geoptimaliseerd voor gebruiksvriendelijkheid en efficiënt beheer
              </li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">Laravel</div>
              <div className="projects__tech__item">PHP</div>
              <div className="projects__tech__item">HTML / CSS</div>
              <div className="projects__tech__item">JavaScript</div>
              <div className="projects__tech__item">Figma</div>
              <div className="projects__tech__item">Git</div>
            </div>
            <div className="projects__button">
              <a
                href="https://github.com/RohanPhaff/Emergis"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__github"
              >
                <Github className="projects__button__github__icon" />
                Code
              </a>
              <a
                href="https://youtu.be/TMLRr-0Nt54"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__demo"
              >
                <ExternalLink className="projects__button__demo__icon" />
                Demo
              </a>
            </div>
          </div>

          <div className="projects__container__item">
            <div className="projects__type">Website</div>
            <img
              className="projects__picture"
              src={logoGardenConnect}
              alt="Garden Connect Zeeland"
            />
            <h3 className="projects__name">Garden Connect Zeeland</h3>
            <p className="projects__description">
              De eerste website die ik maakte buiten de opleiding om tijdens het
              tweede jaar van mijn studie. Een student company vroeg om een
              platform waar tuineigenaren verschillende klussen konden aanbieden
              aan studenten. De website is gebouwd met het Laravel framework en
              biedt functies zoals het uploaden van foto's van tuinen,
              omschrijvingen van klussen, aantal verwachte uren en een
              chatfunctie tussen studenten en eigenaren.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>Studenten kunnen reageren op klussen</li>
              <li>Tuineigenaren uploaden foto's en omschrijvingen</li>
              <li>Chatfunctie voor directe communicatie</li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">Laravel</div>
              <div className="projects__tech__item">PHP</div>
              <div className="projects__tech__item">HTML / CSS</div>
              <div className="projects__tech__item">JavaScript</div>
              <div className="projects__tech__item">Figma</div>
              <div className="projects__tech__item">Git</div>
            </div>
            <div className="projects__button">
              <a
                href="https://github.com/JurgenvanF/gardenconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__github"
              >
                <Github className="projects__button__github__icon" />
                Code
              </a>
              <a
                href="https://youtu.be/mnJeFQMaU7E"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__demo"
              >
                <ExternalLink className="projects__button__demo__icon" />
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

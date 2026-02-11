import "./Projects.css";
import { useEffect } from "react";
import {
  Folder,
  Github,
  ExternalLink,
  Lock,
  Code2,
  MonitorCheck,
} from "lucide-react";
import logoIsoaAdvies from "../../assets/projects/isoaadvies/logo.jpg";
import logoEmergis from "../../assets/projects/emergis/logo.jpg";
import logoGardenConnect from "../../assets/projects/gardenconnect/logo.jpg";
import logoMijnNedbase from "../../assets/projects/mijnnedbase/logo.jpg";
import logoKledingbank from "../../assets/projects/kledingbank/logo.jpg";
import logoPortfolio from "../../assets/projects/portfolio/logo.jpg";
import logoSKC from "../../assets/projects/SKC/logo.jpg";
import logoYourSurprise from "../../assets/projects/yoursurprise/logo.jpg";

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
            <div className="projects__type">Website</div>
            <img
              className="projects__picture"
              src={logoPortfolio}
              alt="Portfolio Website"
            />
            <h3 className="projects__name">Portfolio Pagina</h3>
            <p className="projects__description">
              Mijn persoonlijke portfolio website, ontwikkeld met React. Hierin
              laat ik mijn projecten, werkervaring en vaardigheden zien. De
              website is modulair opgebouwd, responsive en geoptimaliseerd voor
              een consistente gebruikerservaring.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>Volledige ontwikkeling met React</li>
              <li>Responsive design voor mobiel, tablet en desktop</li>
              <li>
                Gebruik van componentgebaseerde structuur en herbruikbare
                modules
              </li>
              <li>
                Experimenten met nieuwe technieken: 3D-modellen invoegen,
                animaties en interactieve elementen
              </li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">React</div>
              <div className="projects__tech__item">JavaScript</div>
              <div className="projects__tech__item">HTML / CSS</div>
              <div className="projects__tech__item">Git</div>
            </div>
            <div className="projects__button">
              <a
                href="https://github.com/JurgenvanF/jurgenvanf-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__github"
              >
                <Github className="projects__button__github__icon" />
                Code
              </a>
              <a className="projects__button__demo disable">
                <MonitorCheck className="projects__button__demo__icon" />
                Je bent er al
              </a>
            </div>
          </div>

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

          <div className="projects__container__item">
            <div className="projects__type">Webapplicatie</div>
            <img
              className="projects__picture"
              src={logoYourSurprise}
              alt="YourSurprise TIM"
            />
            <h3 className="projects__name">
              YourSurprise - Theme Image Manager (TIM)
            </h3>
            <p className="projects__description">
              Tijdens mijn stage bij YourSurprise heb ik gewerkt aan TIM, een
              systeem binnen hun Page Manager om thema-afbeeldingen voor
              producten te beheren. Het project omvatte het inventariseren van
              wensen van verschillende afdelingen, het ontwerpen van de
              interface, implementatie van upload- en koppelfunctionaliteiten
              via Bynder, en het koppelen van combi-artikelen.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>
                Interviews met afdelingen om wensen en workflows te
                inventariseren
              </li>
              <li>
                Frontend ontwerp en styling van TIM inclusief sidebar en
                datavakken
              </li>
              <li>Ophalen en koppelen van productinformatie via SQL</li>
              <li>
                Functionaliteiten voor toevoegen, wijzigen en verwijderen van
                afbeeldingen
              </li>
              <li>
                Tests geschreven voor nieuwe functionaliteiten en advies
                opgesteld voor toekomstig beheer
              </li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">PHP</div>
              <div className="projects__tech__item">SQL</div>
              <div className="projects__tech__item">HTML / CSS</div>
              <div className="projects__tech__item">MockFlow</div>
              <div className="projects__tech__item">Git</div>
            </div>
            <div className="projects__private">
              <Lock className="projects__private__icon" />
              <span className="projects__private__text">
                Dit project is privé
              </span>
            </div>
          </div>

          <div className="projects__container__item">
            <div className="projects__type">Data Science</div>
            <img
              className="projects__picture"
              src={logoSKC}
              alt="Strategisch Kenniscentrum Prototype"
            />
            <h3 className="projects__name">Strategisch Kenniscentrum</h3>
            <p className="projects__description">
              Ontwikkeld als onderdeel van een multidisciplinair studententeam
              voor het Strategisch Kenniscentrum (SKC). Het doel was een eerste
              prototype van een applicatie voor verwerking van open bronnen, met
              een geografische component en geautomatiseerde
              analysemogelijkheden, gericht op internationale georganiseerde
              criminaliteit en de bedreigingen daarvan voor Nederland.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>
                Prototype ontwikkeld op basis van beperkte open source data
              </li>
              <li>
                Regelmatig feedback gevraagd en verwerkt via gesprekken, mail en
                presentaties
              </li>
              <li>
                Eigen focus aangebracht op geweld om de opdracht overzichtelijk
                te houden
              </li>
              <li>Voorzieningen getroffen voor toekomstige doorontwikkeling</li>
              <li>
                Promotiefilmpje gemaakt als mogelijke basis voor SKC promotie
              </li>
              <li>
                Demonstratie opgezet met Elastic en CSV-bestanden om trends in
                misdaad te analyseren
              </li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">Elastic</div>
              <div className="projects__tech__item">Open Source Data</div>
            </div>
            <div className="projects__private">
              <Lock className="projects__private__icon" />
              <span className="projects__private__text">
                Dit project is privé
              </span>
            </div>
          </div>

          <div className="projects__container__item">
            <div className="projects__type">Data Science</div>
            <img
              className="projects__picture"
              src={logoYourSurprise}
              alt="YourSurprise Data Science Project"
            />
            <h3 className="projects__name">YourSurprise - Data Science</h3>
            <p className="projects__description">
              Voor YourSurprise heb ik met een team een voorspellend model
              ontwikkeld om te voorspellen of klanten terugkomen voor een tweede
              bestelling. Terugkerende klanten zijn kostenefficiënter dan nieuwe
              klanten, waardoor dit project waardevol is voor de business. Het
              project volgde het CRISP-DM proces voor data science, inclusief
              data verzameling, opschoning, modellering en evaluatie.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>Data opgeschoond en aangevuld met externe feestdagen-data</li>
              <li>
                Regression model als oefening, daarna Logistic Regression model
                voor classification
              </li>
              <li>
                Dataset opgesplitst in 80% training en 20% test, zonder
                shuffelen om seizoenseffecten te behouden
              </li>
              <li>
                Recall van het model: 0,644, voldoet aan succescriteria ≥0,6
              </li>
              <li>
                Adviezen voor verbetering: extra features, andere modellen
                testen en data cleaning verder optimaliseren
              </li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">Python</div>
              <div className="projects__tech__item">Pandas</div>
              <div className="projects__tech__item">NumPy</div>
              <div className="projects__tech__item">Scikit-learn</div>
              <div className="projects__tech__item">Jupyter Notebook</div>
              <div className="projects__tech__item">Matplotlib / Seaborn</div>
            </div>
            <div className="projects__private">
              <Lock className="projects__private__icon" />
              <span className="projects__private__text">
                Dit project is privé
              </span>
            </div>
          </div>

          <div className="projects__container__item">
            <div className="projects__type">Webapplicatie</div>
            <img
              className="projects__picture"
              src={logoKledingbank}
              alt="Kledingbank Zeeland"
            />
            <h3 className="projects__name">Kledingbank Zeeland</h3>
            <p className="projects__description">
              Het bestaande proces van klantregistratie bij Kledingbank Zeeland
              gebeurde volledig telefonisch en werd bijgehouden in Excel. Voor
              dit project heb ik een website ontwikkeld waarmee medewerkers
              klantengegevens kunnen toevoegen, opzoeken, wijzigen, inzien en
              verwijderen. Het Excel-systeem is hierdoor vervangen. Hoewel de
              mogelijkheden voor klanttoegang en zelfregistratie zijn
              onderzocht, zijn deze vanwege onze beperkte ervaring met
              inlogsysteem nog niet geïmplementeerd.
            </p>
            <p className="projects__highlights">Belangrijkste punten</p>
            <ul className="projects__hightlights__list">
              <li>
                Klantgegevens toevoegen, opzoeken, wijzigen, inzien en
                verwijderen
              </li>
              <li>Excel-administratie volledig vervangen door de website</li>
              <li>Onderzoek gedaan naar klanttoegang voor zelfregistratie</li>
            </ul>
            <div className="projects__tech">
              <div className="projects__tech__item">HTML / CSS</div>
              <div className="projects__tech__item">JavaScript</div>
              <div className="projects__tech__item">Laravel</div>
              <div className="projects__tech__item">Figma</div>
              <div className="projects__tech__item">Git</div>
            </div>
            <div className="projects__button">
              <a
                href="https://github.com/JurgenvanF/groep-6-project"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button__github"
              >
                <Github className="projects__button__github__icon" />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects__github">
        <Code2 className="projects__github__icon" />
        <h2 className="projects__github__title">Wil je meer zien?</h2>
        <p className="projects__github__description">
          Bekijk mijn GitHub profiel voor meer projecten en bijdragen tijdens
          mijn studie
        </p>
        <a
          href="https://github.com/JurgenvanF"
          target="_blank"
          rel="noopener noreferrer"
          className="projects__github__button"
        >
          <Github className="projects__github__button__icon" />
          Bekijk GitHub profiel
        </a>
      </div>
    </>
  );
}

export default Projects;

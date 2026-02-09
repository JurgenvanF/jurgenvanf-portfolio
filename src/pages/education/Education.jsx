import "./Education.css";
import { useEffect, useState } from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

function Education() {
  useEffect(() => {
    document.title = "Portfolio | Opleiding 🎓";
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const [showPdfModal, setShowPdfModal] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <GraduationCap className="education__icon" />
      <h1 className="title__education">Opleiding 🎓</h1>
      <p>Deze opleidingen heb ik gevolgd!</p>
      <div className="education__container">
        <div className="education__title__container">
          <GraduationCap className="education__title__container__icon" />
          <br />
          <span>Academische Diplomas</span>
        </div>

        <div className="education__container__items">
          <div className="education__container__item">
            <div className="education__container__item__details">
              <div className="education__container__item__details__school">
                <h2 className="education__container__item__details__school__subject">
                  HBO-ICT
                </h2>
                <h3 className="education__container__item__details__school__name">
                  HZ, University of Applied Sciences
                </h3>
                <div className="education__container__item__details__school__locdate">
                  <div className="education__container__item__details__school__location">
                    <MapPin className="education__container__item__details__school__location__icon" />
                    <span className="education__container__item__details__school__location__text">
                      Middelburg, Nederland
                    </span>
                  </div>

                  <div className="education__container__item__details__school__date">
                    <Calendar className="education__container__item__details__school__date__icon" />
                    <span className="education__container__item__details__school__date__text">
                      <span>Augustus 2019 -</span>{" "}
                      <span className="nowrap">Juni 2024</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="education__container__item__details__level">
                <span>Bachelor</span>
              </div>
            </div>
            <div className="education__container__item__spec">
              <p className="education__container__item__spec__text">
                <div className="education__container__item__spec__text__description">
                  Tijdens mijn bachelor ICT aan HZ heb ik een sterke,
                  praktijkgerichte basis opgebouwd in softwareontwikkeling. De
                  opleiding richtte zich op het ontwerpen, bouwen en testen van
                  moderne applicaties, waarbij ik veel in teamverband werkte aan
                  echte projecten voor opdrachtgevers.
                </div>

                {/* Specialisatie */}
                <div className="education__container__item__spec__text__specialization">
                  <p className="education__container__item__spec__text__specialization__title">
                    Specialisatie
                  </p>
                  <p className="education__container__item__spec__text__specialization__content">
                    Software development
                  </p>
                </div>

                <div className="education__container__item__spec__text__achievements">
                  <div className="education__container__item__spec__text__achievements__title">
                    <Award className="education__container__item__spec__text__achievements__title__icon" />
                    <p className="education__container__item__spec__text__achievements__title__text">
                      Prestaties
                    </p>
                  </div>
                  <div className="education__container__item__spec__text__achievements__list">
                    <ul className="education__container__item__spec__text__achievements__list__items">
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Meerdere softwareprojecten opgeleverd voor echte
                        opdrachtgevers
                      </li>
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Intensieve ervaring opgedaan met Agile en Scrum werken
                      </li>
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Gegroeid van programmeer beginner naar ervaren
                        ontwikkelaar
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="education__container__item__spec__text__accordion__text">
                  Stages
                </p>
                <div className="education__container__item__spec__text__accordion">
                  <div
                    className={`education__container__item__spec__text__accordion__item ${
                      openIndex === 0 ? "open" : ""
                    }`}
                    onClick={() => toggleAccordion(0)}
                  >
                    <div className="education__container__item__spec__text__accordion__header">
                      <span>YourSurprise</span>
                      <svg
                        className="accordion__triangle"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M8 5l8 7-8 7z" />
                      </svg>
                    </div>
                    <div className="education__container__item__spec__text__accordion__content">
                      Hier heb ik ervaring opgedaan in het werken binnen een
                      professioneel team. Ik leerde hoe je effectief samenwerkt,
                      communiceert en bijdraagt aan gezamenlijke doelen.
                      Daarnaast maakte ik kennis met workflows en ontwikkelde ik
                      een beter begrip van het werken in een kantoor omgeving.
                      <ul>
                        <li>
                          Ontwikkelde een dynamische afbeeldingswisselaar voor
                          het ontwerpteam, waardoor per seizoen andere visuals
                          in de webshop getoond kunnen worden.
                        </li>
                        <li>
                          Werkte samen binnen een multidisciplinair team om
                          webshop functionaliteiten te optimaliseren en
                          problemen efficient op te lossen.
                        </li>
                        <li>
                          Leerde en paste gebruiksvriendelijke workflows toe
                          binnen de ontwikkelomgeving om de productiviteit te
                          verhogen.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`education__container__item__spec__text__accordion__item ${
                      openIndex === 1 ? "open" : ""
                    }`}
                    onClick={() => toggleAccordion(1)}
                  >
                    <div className="education__container__item__spec__text__accordion__header">
                      <span>Afstudeerstage - Nedbase</span>
                      <svg
                        className="accordion__triangle"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M8 5l8 7-8 7z" />
                      </svg>
                    </div>
                    <div className="education__container__item__spec__text__accordion__content">
                      Hier werkte ik in een team dat maatwerk applicaties
                      ontwikkelde. Mijn focus lag vooral op de front-end: welke
                      informatie beschikbaar moest zijn, hoe dit overzichtelijk
                      gepresenteerd kon worden en hoe de interface er
                      uiteindelijk uit moest zien.
                      <ul>
                        <li>
                          Ontwikkelde (front-end) functionaliteiten voor een
                          klantgerichte tool die de toegankelijkheid en het
                          overzicht van website-informatie verbeterde.
                        </li>
                        <li>
                          Leerde en gebruikte moderne ontwikkeltools en
                          frameworks binnen een professionele ontwikkelomgeving.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="education__container__item__spec__text__courses">
                  <div className="education__container__item__spec__text__courses__title">
                    <p className="education__container__item__spec__text__courses__title__text">
                      Kernvakken
                    </p>
                  </div>
                  <div className="education__container__item__spec__text__courses__items">
                    <div className="education__container__item__spec__text__courses__item">
                      Software Design
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Object Oriented Programming
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Digital Innovation
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Digital Transformation
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Design Thinking
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>

          <div className="education__container__item">
            <div className="education__container__item__details">
              <div className="education__container__item__details__school">
                <h2 className="education__container__item__details__school__subject">
                  MSc Communicatie- en Informatiewetenschappen
                </h2>
                <h3 className="education__container__item__details__school__name">
                  Tilburg University
                </h3>
                <div className="education__container__item__details__school__locdate">
                  <div className="education__container__item__details__school__location">
                    <MapPin className="education__container__item__details__school__location__icon" />
                    <span className="education__container__item__details__school__location__text">
                      Tilburg, Nederland
                    </span>
                  </div>

                  <div className="education__container__item__details__school__date">
                    <Calendar className="education__container__item__details__school__date__icon" />
                    <span className="education__container__item__details__school__date__text">
                      <span>Augustus 2024 -</span>{" "}
                      <span className="nowrap">Februari 2026</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="education__container__item__details__level">
                <span>Master</span>
              </div>
            </div>
            <div className="education__container__item__spec">
              <p className="education__container__item__spec__text">
                <div className="education__container__item__spec__text__description">
                  Tijdens mijn master Communicatie- en Informatiewetenschappen
                  heb ik me verdiept in het ontwerpen en onderzoeken van
                  digitale media. De focus lag op gebruikerservaring,
                  interactieontwerp en hoe mensen technologie beleven en
                  gebruiken.
                </div>

                {/* Specialisatie */}
                <div className="education__container__item__spec__text__specialization">
                  <p className="education__container__item__spec__text__specialization__title">
                    Specialisatie
                  </p>
                  <p className="education__container__item__spec__text__specialization__content">
                    New Media Design
                  </p>
                </div>

                <div className="education__container__item__spec__text__achievements">
                  <div className="education__container__item__spec__text__achievements__title">
                    <Award className="education__container__item__spec__text__achievements__title__icon__svg" />
                    <p className="education__container__item__spec__text__achievements__title__text">
                      Prestaties
                    </p>
                  </div>
                  <div className="education__container__item__spec__text__achievements__list">
                    <ul className="education__container__item__spec__text__achievements__list__items">
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Universitair niveau onderzoeken uitvoeren en rapporteren
                      </li>
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Kritisch analyseren van effecten van digitale media op
                        gebruikers
                      </li>
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Toepassen van psychologische inzichten in
                        interactieontwerp en storytelling
                      </li>
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Experimenteren met innovatieve technologieën zoals VR
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="education__container__item__spec__text__accordion__text">
                  Scriptie
                </p>
                <div className="education__container__item__spec__text__accordion">
                  <div
                    className={`education__container__item__spec__text__accordion__item ${
                      openIndex === 2 ? "open" : ""
                    }`}
                    onClick={() => toggleAccordion(2)}
                  >
                    <div className="education__container__item__spec__text__accordion__header">
                      <span>Visual Congruence in Interface Design</span>
                      <svg
                        className="accordion__triangle"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M8 5l8 7-8 7z" />
                      </svg>
                    </div>
                    <div className="education__container__item__spec__text__accordion__content">
                      <p>
                        Voor mijn master New Media Design aan Tilburg University
                        onderzocht ik hoe visuele kenmerken van knoppen -
                        specifiek kleur en vorm - beïnvloeden hoe duidelijk
                        gebruikers een knop vinden. In digitale interfaces
                        moeten mensen vaak snel beslissen wat een knop doet, nog
                        voordat ze de tekst goed lezen.
                      </p>
                      <p>
                        In een experimentele studie met 111 deelnemers testte ik
                        verschillende combinaties van kleuren, vormen en
                        taaktypes (bijv. positieve of negatieve acties). De
                        resultaten laten zien dat knoppen vooral duidelijker
                        worden wanneer hun visuele uitstraling past bij de
                        betekenis van de taak (congruentie). Alleen een “visuele
                        match” tussen kleur en vorm was niet genoeg om
                        duidelijkheid te vergroten. Wanneer kleur en vorm met
                        elkaar in conflict waren, bleek kleur een sterkere
                        invloed te hebben dan vorm.
                      </p>
                      <p>
                        Deze inzichten helpen designers bij het maken van
                        knoppen die sneller en intuïtiever begrepen worden, wat
                        kan bijdragen aan gebruiksvriendelijkere en
                        betrouwbaardere interfaces.
                      </p>
                      <p>
                        <button
                          className="education__container__item__spec__text__accordion__content__link"
                          onClick={() => setShowPdfModal(true)}
                        >
                          Bekijk de volledige thesis
                        </button>
                      </p>

                      <h4>Resultaten</h4>
                      <ul>
                        <li>
                          <strong>
                            H1 (visuele match tussen kleur en vorm verhoogt
                            duidelijkheid) werd niet ondersteund:
                          </strong>
                          <br />✗ Knoppen waarvan kleur en vorm visueel bij
                          elkaar pasten, werden niet als duidelijker ervaren dan
                          visueel mismatched knoppen.
                        </li>
                        <li>
                          <strong>
                            H2 (visuele congruentie met de taak verhoogt
                            duidelijkheid) werd wél ondersteund:
                          </strong>
                          <br />✓ Knoppen waarvan het visuele ontwerp aansloot
                          bij de betekenis van de taak (bijv. een “positieve”
                          knop voor een positieve actie) werden significant
                          duidelijker gevonden.
                        </li>
                        <li>
                          <strong>Exploratieve vraag:</strong>
                          <br /> ✓ Wanneer kleur en vorm met elkaar in conflict
                          waren, had <em>kleur</em> een duidelijk sterkere
                          invloed op ervaren duidelijkheid dan vorm.
                        </li>
                      </ul>
                      <p>
                        De resultaten laten zien dat vooral de match tussen
                        visueel ontwerp en taakbetekenis belangrijk is voor hoe
                        snel en intuïtief gebruikers een knop begrijpen.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="education__container__item__spec__text__courses">
                  <div className="education__container__item__spec__text__courses__title">
                    <p className="education__container__item__spec__text__courses__title__text">
                      Kernvakken
                    </p>
                  </div>
                  <div className="education__container__item__spec__text__courses__items">
                    <div className="education__container__item__spec__text__courses__item">
                      Design Research
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Responsible UX Design
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Virtual, Augmented and Mixed Reality
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Digital Inequality
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Psychology of Creativity
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      The Human Mind in the Digital World
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showPdfModal && (
        <div
          className="pdf-modal-overlay"
          onClick={() => setShowPdfModal(false)}
        >
          <div
            className="pdf-modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button
              className="pdf-modal-close"
              onClick={() => setShowPdfModal(false)}
            >
              ✕
            </button>
            <iframe
              src="/vanFraeijenhove_Jurgen_Thesis_Fall2025.pdf"
              title="Full Thesis"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Education;

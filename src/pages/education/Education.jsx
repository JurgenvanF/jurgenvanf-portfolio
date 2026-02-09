import "./Education.css";
import { useEffect } from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

function Education() {
  useEffect(() => {
    document.title = "Portfolio | Opleiding 🎓";
  }, []);

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
                    <Award className="education__container__item__spec__text__achievements__title__icon" />
                    <p className="education__container__item__spec__text__achievements__title__text">
                      Prestaties
                    </p>
                  </div>
                  <div className="education__container__item__spec__text__achievements__list">
                    <ul className="education__container__item__spec__text__achievements__list__items">
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Scriptie geschreven over schaalbare
                        microservices-architectuur
                      </li>
                      <li className="education__container__item__spec__text__achievements__list__item">
                        Verdieping gevolgd in Machine Learning en Distributed
                        Systems
                      </li>
                    </ul>
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
                      User Experience Design
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Interaction Design
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Machine Learning
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Distributed Systems
                    </div>
                    <div className="education__container__item__spec__text__courses__item">
                      Digitale Media & Psychologie
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

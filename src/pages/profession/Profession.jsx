import "./Profession.css";
import { useEffect } from "react";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";

function Profession() {
  useEffect(() => {
    document.title = "Portfolio | Beroep 💼";
  }, []);

  return (
    <>
      <Briefcase className="profession__icon" />
      <h1 className="title__profession">Beroep 💼</h1>
      <p>Dit is mijn werkervaring!</p>

      <div className="profession__container">
        <div className="profession__container__items">
          <div className="profession__container__timeline">
            <div className="profession__container__timeline__marker">
              <div className="profession__container__timeline__marker__circle active"></div>
              <div className="profession__container__timeline__marker__ring"></div>
            </div>
            <div className="profession__container__item">
              <div className="profession__container__item__details">
                <div className="profession__container__item__details__company">
                  <h2 className="profession__container__item__details__company__subject">
                    Software Engineer
                  </h2>
                  <h3 className="profession__container__item__details__company__name">
                    Nedbase
                  </h3>
                  <div className="profession__container__item__details__company__locdate">
                    <div className="profession__container__item__details__company__location">
                      <MapPin className="profession__container__item__details__company__location__icon" />
                      <span className="profession__container__item__details__company__location__text">
                        Middelburg, Nederland
                      </span>
                    </div>

                    <div className="profession__container__item__details__company__date">
                      <Calendar className="profession__container__item__details__company__date__icon" />
                      <span className="profession__container__item__details__company__date__text">
                        <span>Januari 2023 - </span>
                        <span className="nowrap">Juni 2023</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="profession__container__item__details__level">
                  <span>Stage</span>
                </div>
              </div>

              <div className="profession__container__item__spec">
                <p className="profession__container__item__spec__text">
                  <div className="profession__container__item__spec__text__description">
                    Tijdens mijn stage werk ik mee aan de ontwikkeling van
                    moderne webapplicaties voor verschillende klanten. Ik
                    ondersteun het team bij zowel front-end als back-end taken
                    en leer hoe professionele softwareprojecten worden opgezet
                    en onderhouden.
                  </div>

                  <div className="profession__container__item__spec__text__department">
                    <p className="profession__container__item__spec__text__department__title">
                      Afdeling
                    </p>
                    <p className="profession__container__item__spec__text__department__content">
                      Development Team
                    </p>
                  </div>

                  <div className="profession__container__item__spec__text__responsibilities">
                    <div className="profession__container__item__spec__text__responsibilities__title">
                      <Briefcase className="profession__container__item__spec__text__responsibilities__title__icon" />
                      <p className="profession__container__item__spec__text__responsibilities__title__text">
                        Verantwoordelijkheden
                      </p>
                    </div>
                    <div className="profession__container__item__spec__text__responsibilities__list">
                      <ul className="profession__container__item__spec__text__responsibilities__list__items">
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Ontwikkelen van nieuwe features in bestaande
                          webapplicaties
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Bugs analyseren en oplossen samen met het development
                          team
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Meedenken over verbeteringen in usability en
                          performance
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__achievements">
                    <div className="profession__container__item__spec__text__achievements__title">
                      <TrendingUp className="profession__container__item__spec__text__achievements__title__icon" />
                      <p className="profession__container__item__spec__text__achievements__title__text">
                        Prestaties
                      </p>
                    </div>
                    <div className="profession__container__item__spec__text__achievements__list">
                      <ul className="profession__container__item__spec__text__achievements__list__items">
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Eerste klantfeature zelfstandig opgeleverd
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Actief bijgedragen aan code reviews en teamoverleggen
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Nieuwe technieken zoals React hooks en API-koppelingen
                          toegepast
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__tech">
                    <div className="profession__container__item__spec__text__tech__title">
                      <p className="profession__container__item__spec__text__tech__title__text">
                        Technologieën
                      </p>
                    </div>
                    <div className="profession__container__item__spec__text__tech__items">
                      <div className="profession__container__item__spec__text__tech__item">
                        React
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        TypeScript
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        Node.js
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        REST APIs
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        Git
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="profession__container__timeline">
            <div className="profession__container__timeline__marker">
              <div className="profession__container__timeline__marker__circle inactive"></div>
            </div>
            <div className="profession__container__item">
              <div className="profession__container__item__details">
                <div className="profession__container__item__details__company">
                  <h2 className="profession__container__item__details__company__subject">
                    Software Engineer
                  </h2>
                  <h3 className="profession__container__item__details__company__name">
                    Nedbase
                  </h3>
                  <div className="profession__container__item__details__company__locdate">
                    <div className="profession__container__item__details__company__location">
                      <MapPin className="profession__container__item__details__company__location__icon" />
                      <span className="profession__container__item__details__company__location__text">
                        Middelburg, Nederland
                      </span>
                    </div>

                    <div className="profession__container__item__details__company__date">
                      <Calendar className="profession__container__item__details__company__date__icon" />
                      <span className="profession__container__item__details__company__date__text">
                        <span>Januari 2023 - </span>
                        <span className="nowrap">Juni 2023</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="profession__container__item__details__level">
                  <span>Stage</span>
                </div>
              </div>

              <div className="profession__container__item__spec">
                <p className="profession__container__item__spec__text">
                  <div className="profession__container__item__spec__text__description">
                    Tijdens mijn stage werk ik mee aan de ontwikkeling van
                    moderne webapplicaties voor verschillende klanten. Ik
                    ondersteun het team bij zowel front-end als back-end taken
                    en leer hoe professionele softwareprojecten worden opgezet
                    en onderhouden.
                  </div>

                  <div className="profession__container__item__spec__text__department">
                    <p className="profession__container__item__spec__text__department__title">
                      Afdeling
                    </p>
                    <p className="profession__container__item__spec__text__department__content">
                      Development Team
                    </p>
                  </div>

                  <div className="profession__container__item__spec__text__responsibilities">
                    <div className="profession__container__item__spec__text__responsibilities__title">
                      <Briefcase className="profession__container__item__spec__text__responsibilities__title__icon" />
                      <p className="profession__container__item__spec__text__responsibilities__title__text">
                        Verantwoordelijkheden
                      </p>
                    </div>
                    <div className="profession__container__item__spec__text__responsibilities__list">
                      <ul className="profession__container__item__spec__text__responsibilities__list__items">
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Ontwikkelen van nieuwe features in bestaande
                          webapplicaties
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Bugs analyseren en oplossen samen met het development
                          team
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Meedenken over verbeteringen in usability en
                          performance
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__achievements">
                    <div className="profession__container__item__spec__text__achievements__title">
                      <TrendingUp className="profession__container__item__spec__text__achievements__title__icon" />
                      <p className="profession__container__item__spec__text__achievements__title__text">
                        Prestaties
                      </p>
                    </div>
                    <div className="profession__container__item__spec__text__achievements__list">
                      <ul className="profession__container__item__spec__text__achievements__list__items">
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Eerste klantfeature zelfstandig opgeleverd
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Actief bijgedragen aan code reviews en teamoverleggen
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Nieuwe technieken zoals React hooks en API-koppelingen
                          toegepast
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__tech">
                    <div className="profession__container__item__spec__text__tech__title">
                      <p className="profession__container__item__spec__text__tech__title__text">
                        Technologieën
                      </p>
                    </div>
                    <div className="profession__container__item__spec__text__tech__items">
                      <div className="profession__container__item__spec__text__tech__item">
                        React
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        TypeScript
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        Node.js
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        REST APIs
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        Git
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profession;

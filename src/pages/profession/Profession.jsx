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
      <div>Dit is mijn werkervaring!</div>

      <div className="profession__container">
        <div className="profession__container__items">
          {/* First timeline item */}
          <div className="profession__container__timeline">
            <div className="profession__container__timeline__marker">
              <div className="profession__container__timeline__marker__circle active"></div>
              <div className="profession__container__timeline__marker__ring"></div>
            </div>

            <div className="profession__container__item">
              <div className="profession__container__item__details">
                <div className="profession__container__item__details__company">
                  <h2 className="profession__container__item__details__company__subject">
                    Op zoek naar een eerste uitdaging
                  </h2>
                  <h3 className="profession__container__item__details__company__name">
                    Gezellig bedrijf
                  </h3>
                  <div className="profession__container__item__details__company__locdate">
                    <div className="profession__container__item__details__company__location">
                      <MapPin className="profession__container__item__details__company__location__icon" />
                      <div className="profession__container__item__details__company__location__text">
                        Zeeland, Nederland
                      </div>
                    </div>
                    <div className="profession__container__item__details__company__date">
                      <Calendar className="profession__container__item__details__company__date__icon" />
                      <div className="profession__container__item__details__company__date__text">
                        <span>Nu beschikbaar</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profession__container__item__details__level">
                  <span className="nowrap">Actief op zoek</span>
                </div>
              </div>

              <div className="profession__container__item__spec">
                <div className="profession__container__item__spec__text">
                  <div className="profession__container__item__spec__text__description">
                    Ik ben na de afronding van mijn studie op zoek naar een
                    eerste uitdaging als frontend developer / UX developer.
                    Klaar om mijn kennis en energie in te zetten voor een leuk
                    en innovatief team!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nedbase */}
          <div className="profession__container__timeline" id="nedbase">
            <div className="profession__container__timeline__marker">
              <div className="profession__container__timeline__marker__circle inactive"></div>
            </div>

            <div className="profession__container__item">
              <div className="profession__container__item__details">
                <div className="profession__container__item__details__company">
                  <h2 className="profession__container__item__details__company__subject">
                    Frontend Developer
                  </h2>
                  <h3 className="profession__container__item__details__company__name">
                    Nedbase
                  </h3>
                  <div className="profession__container__item__details__company__locdate">
                    <div className="profession__container__item__details__company__location">
                      <MapPin className="profession__container__item__details__company__location__icon" />
                      <div className="profession__container__item__details__company__location__text">
                        Middelburg, Nederland
                      </div>
                    </div>

                    <div className="profession__container__item__details__company__date">
                      <Calendar className="profession__container__item__details__company__date__icon" />
                      <div className="profession__container__item__details__company__date__text">
                        <span>Februari 2024 - </span>
                        <span className="nowrap">Juni 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profession__container__item__details__level">
                  <span>Stage</span>
                </div>
              </div>

              <div className="profession__container__item__spec">
                <div className="profession__container__item__spec__text">
                  <div className="profession__container__item__spec__text__description">
                    Tijdens mijn stage bij Nedbase heb ik de basis gelegd voor
                    MijnNedbase, een interne tool waarmee klanten een
                    overzichtelijk dashboard krijgen van hun projecten,
                    resultaten, financiën, contactpersonen en nog veel meer. Ik
                    heb interviews gehouden met alle afdelingen, relevante
                    informatie geanalyseerd, feedback van klanten verwerkt en
                    het ontwerp samen met het UX-team verfijnd. Vervolgens heb
                    ik de frontend gebouwd in Angular, gebruikmakend van
                    componenten en gestructureerde CSS voor een consistente en
                    efficiënte gebruikerservaring.
                  </div>

                  <div className="profession__container__item__spec__text__department">
                    <div className="profession__container__item__spec__text__department__title">
                      Afdeling
                    </div>
                    <div className="profession__container__item__spec__text__department__content">
                      Maatwerk
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__responsibilities">
                    <div className="profession__container__item__spec__text__responsibilities__title">
                      <Briefcase className="profession__container__item__spec__text__responsibilities__title__icon" />
                      <div className="profession__container__item__spec__text__responsibilities__title__text">
                        Verantwoordelijkheden
                      </div>
                    </div>
                    <div className="profession__container__item__spec__text__responsibilities__list">
                      <ul className="profession__container__item__spec__text__responsibilities__list__items">
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Interviews afnemen bij alle afdelingen om te bepalen
                          welke informatie relevant is voor de klant
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Analyse van klantbehoeften en haalbaarheid van de
                          implementatie
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Ontwerpen van de frontend in samenwerking met het
                          UX-team
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Implementatie van de frontend van MijnNedbase in
                          Angular, componentgebaseerd
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Gebruik van BEM-methodiek voor consistente en
                          onderhoudbare CSS
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__achievements">
                    <div className="profession__container__item__spec__text__achievements__title">
                      <TrendingUp className="profession__container__item__spec__text__achievements__title__icon" />
                      <div className="profession__container__item__spec__text__achievements__title__text">
                        Prestaties
                      </div>
                    </div>
                    <div className="profession__container__item__spec__text__achievements__list">
                      <ul className="profession__container__item__spec__text__achievements__list__items">
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Eerste concept en basis van MijnNedbase zelfstandig
                          opgezet en geïmplementeerd
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Feedback van klanten verwerkt om dashboard relevant en
                          overzichtelijk te maken
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Nieuwe technieken in Angular en BEM-methodiek
                          toegepast om herbruikbare componenten te creëren
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__tech">
                    <div className="profession__container__item__spec__text__tech__title">
                      <div className="profession__container__item__spec__text__tech__title__text">
                        Technologieën
                      </div>
                    </div>
                    <div className="profession__container__item__spec__text__tech__items">
                      <div className="profession__container__item__spec__text__tech__item">
                        Angular
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        TypeScript
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        SCSS / BEM
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        REST APIs
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        Figma
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        Git
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* YourSurprise */}
          <div className="profession__container__timeline" id="yoursurprise">
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
                    YourSurprise
                  </h3>
                  <div className="profession__container__item__details__company__locdate">
                    <div className="profession__container__item__details__company__location">
                      <MapPin className="profession__container__item__details__company__location__icon" />
                      <div className="profession__container__item__details__company__location__text">
                        Zierikzee, Nederland
                      </div>
                    </div>

                    <div className="profession__container__item__details__company__date">
                      <Calendar className="profession__container__item__details__company__date__icon" />
                      <div className="profession__container__item__details__company__date__text">
                        <span>September 2022 - </span>
                        <span className="nowrap">Januari 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profession__container__item__details__level">
                  <span>Stage</span>
                </div>
              </div>

              <div className="profession__container__item__spec">
                <div className="profession__container__item__spec__text">
                  <div className="profession__container__item__spec__text__description">
                    Tijdens mijn stage bij YourSurprise heb ik gewerkt aan TIM
                    (Theme Image Manager) binnen hun Page Manager, een systeem
                    om thema-afbeeldingen voor producten te beheren. Ik heb de
                    wensen van verschillende afdelingen geïnventariseerd, de
                    interface ontworpen, het uploaden en koppelen van
                    afbeeldingen via Bynder geïmplementeerd, combi-artikelen
                    gekoppeld en tests geschreven om de functionaliteit te
                    waarborgen. Tot slot heb ik een advies met wireflow
                    opgesteld voor toekomstige uitbreidingen zoals een
                    afbeeldingplanner en gestructureerde opslag.
                  </div>

                  <div className="profession__container__item__spec__text__department">
                    <div className="profession__container__item__spec__text__department__title">
                      Afdeling
                    </div>
                    <div className="profession__container__item__spec__text__department__content">
                      Webshop Development
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__responsibilities">
                    <div className="profession__container__item__spec__text__responsibilities__title">
                      <Briefcase className="profession__container__item__spec__text__responsibilities__title__icon" />
                      <div className="profession__container__item__spec__text__responsibilities__title__text">
                        Verantwoordelijkheden
                      </div>
                    </div>
                    <div className="profession__container__item__spec__text__responsibilities__list">
                      <ul className="profession__container__item__spec__text__responsibilities__list__items">
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Interviews houden met afdelingen om wensen en huidige
                          workflow te inventariseren
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Ontwerpen en stylen van de frontend van TIM, inclusief
                          sidebar en datavakken
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Ophalen en koppelen van productinformatie via SQL en
                          integratie voor afbeeldingen
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Implementatie van functionaliteiten voor toevoegen,
                          wijzigen en verwijderen van afbeeldingen
                        </li>
                        <li className="profession__container__item__spec__text__responsibilities__list__item">
                          Schrijven van tests voor alle nieuwe functionaliteit
                          (happy en unhappy paths)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__achievements">
                    <div className="profession__container__item__spec__text__achievements__title">
                      <TrendingUp className="profession__container__item__spec__text__achievements__title__icon" />
                      <div className="profession__container__item__spec__text__achievements__title__text">
                        Prestaties
                      </div>
                    </div>
                    <div className="profession__container__item__spec__text__achievements__list">
                      <ul className="profession__container__item__spec__text__achievements__list__items">
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          TIM systeem opgezet om thema-afbeeldingen per product
                          te beheren
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Integratie gerealiseerd met Bynder en bestaande
                          productinformatie voor juiste afbeeldingskoppelingen
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Combi-artikelen succesvol gekoppeld zodat meerdere
                          producten dezelfde afbeelding delen
                        </li>
                        <li className="profession__container__item__spec__text__achievements__list__item">
                          Testen uitgevoerd en advies opgesteld voor toekomstig
                          beheer en planning van afbeeldingen
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="profession__container__item__spec__text__tech">
                    <div className="profession__container__item__spec__text__tech__title">
                      <div className="profession__container__item__spec__text__tech__title__text">
                        Technologieën
                      </div>
                    </div>
                    <div className="profession__container__item__spec__text__tech__items">
                      <div className="profession__container__item__spec__text__tech__item">
                        PHP
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        SQL
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        HTML / CSS
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        MockFlow
                      </div>
                      <div className="profession__container__item__spec__text__tech__item">
                        Git
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="profession__summary">
        <h2 className="profession__summary__title">
          Samenvatting professionele skills
        </h2>
        <div className="profession__summary__container">
          <div className="profession__summary__container__item">
            <span className="profession__summary__container__text years">
              5+
            </span>
            <div className="profession__summary__container__subtext">
              Jaren codeer ervaring
            </div>
          </div>
          <div className="profession__summary__container__item">
            <span className="profession__summary__container__text projects">
              2
            </span>
            <div className="profession__summary__container__subtext">
              Voltooide stages
            </div>
          </div>
          <div className="profession__summary__container__item">
            <span className="profession__summary__container__text tech">
              10
            </span>
            <div className="profession__summary__container__subtext">
              Technologieën gebruikt
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profession;

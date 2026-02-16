import "./Education.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Award } from "lucide-react";

import Card from "../../components/card/Card.jsx";
import CardHeader from "../../components/card/card-header/CardHeader.jsx";
import CardBody from "../../components/card/card-body/CardBody.jsx";
import Accordion from "../../components/accordion/Accordion.jsx";
import PdfModal from "../../components/pdf-modal/PdfModal.jsx";
import studies from "../../data/studies/studies.js";

function Education() {
  useEffect(() => {
    document.title = "Portfolio | Opleiding 🎓";
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const toggleAccordion = (uniqueId) => {
    setOpenIndex(openIndex === uniqueId ? null : uniqueId);
  };

  const handlePdfOpen = (url) => {
    setPdfUrl(url);
    setShowPdfModal(true);
  };

  const color = "blue";

  return (
    <>
      <GraduationCap className="education__icon" />
      <h1 className="education__title">Opleiding 🎓</h1>
      <p>Deze opleidingen heb ik gevolgd!</p>

      <div className="education__container">
        <div className="education__container__title">
          <GraduationCap className="education__container__icon" />
          <br />
          <span>Academische Diplomas</span>
        </div>

        <div className="education__container__items">
          {studies.map((study, studyIndex) => (
            <div className="education__container__item" key={studyIndex}>
              <Card study={study}>
                <div className="card__header">
                  <CardHeader
                    color={color}
                    title={study.title}
                    subtitle={study.subtitle}
                    tag={study.tag}
                    location={study.location}
                    date={study.date}
                  />
                </div>

                <div className="card__body">
                  <CardBody>
                    <p className="card-body__description">
                      {study.description}
                    </p>

                    <div
                      className={`card-body__focus card-body__focus__${color}`}
                    >
                      <p className="card-body__focus__title">Specialisatie</p>
                      <p className="card-body__focus__content">{study.focus}</p>
                    </div>

                    <div className="card-body__list">
                      <p className="card-body__list__title">
                        <Award size={20} />
                        Prestaties
                      </p>
                      {study.list && (
                        <ul className="card-body__list__items">
                          {study.list.map((item, i) => (
                            <li
                              key={i}
                              className={`card-body__list__items__item card-body__list__items__item__${color}`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Accordion sections */}
                    {study.accordionSections?.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <div className="accordion__section-title">
                          {section.sectionTitle}
                        </div>

                        {section.items.map((item, itemIndex) => {
                          const uniqueId = `${studyIndex}-${sectionIndex}-${itemIndex}`;

                          return (
                            <Accordion
                              key={uniqueId}
                              color={color}
                              sectionTitle={item.title}
                              isOpen={openIndex === uniqueId}
                              onToggle={() => toggleAccordion(uniqueId)}
                            >
                              {item.paragraphs?.map((para, i) => (
                                <p key={i} className="accordion__content-text">
                                  {para}
                                </p>
                              ))}

                              {item.list && (
                                <ul className="accordion__content-list">
                                  {item.list.map((li, i) => (
                                    <li
                                      key={i}
                                      className="accordion__content-list-item"
                                    >
                                      {(() => {
                                        if (!li.includes(":")) return li;

                                        const [before, ...rest] = li.split(":");

                                        return (
                                          <>
                                            <strong>
                                              {before}: <br />
                                            </strong>
                                            {rest.join(":")}
                                          </>
                                        );
                                      })()}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {item.link && (
                                <>
                                  {item.link.startsWith("http") ? (
                                    <button
                                      className="accordion__link"
                                      onClick={() => handlePdfOpen(item.link)}
                                    >
                                      Bekijk de volledige scriptie
                                    </button>
                                  ) : (
                                    <Link
                                      to={item.link}
                                      className="accordion__link"
                                    >
                                      Bekijk de beroep-pagina voor meer
                                      informatie
                                    </Link>
                                  )}
                                </>
                              )}
                            </Accordion>
                          );
                        })}
                      </div>
                    ))}

                    <div className="card-body__tags">
                      <p className="card-body__tags__title">Kernvakken</p>
                      <div className="card-body__tags__items">
                        {study.courses.map((course, i) => (
                          <div key={i} className="card-body__tags__items__item">
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <PdfModal
        isOpen={showPdfModal}
        onClose={() => setShowPdfModal(false)}
        pdfUrl={pdfUrl}
      />
    </>
  );
}

export default Education;

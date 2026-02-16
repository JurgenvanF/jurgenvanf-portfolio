import "./Profession.scss";
import { useEffect, useState } from "react";
import { Briefcase, TrendingUp, User } from "lucide-react";

import jobs from "../../data/jobs/jobs.js";
import Card from "../../components/card/Card.jsx";
import CardHeader from "../../components/card/card-header/CardHeader.jsx";
import CardBody from "../../components/card/card-body/CardBody.jsx";
import ProfileModal from "../../components/profile-modal/ProfileModal.jsx";

function Profession({ isModalOpen, setIsModalOpen }) {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    document.title = "Portfolio | Beroep 💼";
  }, []);

  const color = "green";

  return (
    <>
      <Briefcase className="profession__icon" />
      <h1 className="profession__title">Beroep 💼</h1>
      <p>Dit is mijn werkervaring!</p>

      <div className="profession__container">
        <div className="profession__container__items">
          {/* First timeline item */}
          {jobs.map((job, jobIndex) => (
            <div
              className="profession__container__item"
              id={job.id}
              key={jobIndex}
            >
              <div className="profession__container__timeline">
                <div className="profession__container__timeline__marker">
                  <div
                    className={`profession__container__timeline__marker__circle profession__container__timeline__marker__circle__${job.status}`}
                  ></div>
                  <div
                    className={`profession__container__timeline__marker__ring profession__container__timeline__marker__ring__${job.status}`}
                  ></div>
                </div>
                <Card job={job}>
                  <div className="card__header">
                    <CardHeader
                      color={color}
                      title={job.title}
                      subtitle={job.subtitle}
                      tag={job.tag}
                      location={job.location}
                      date={job.date}
                    />
                  </div>

                  <div className="card__body">
                    <CardBody>
                      <p className="card-body__description">
                        {job.description}
                      </p>

                      {job.profile && (
                        <button
                          className="title__buttons__modal profession__modal"
                          onClick={openModal}
                        >
                          <User
                            size={16}
                            className="title__buttons__modal__icon"
                          />
                          Over Mij
                        </button>
                      )}

                      {job.focus && (
                        <div
                          className={`card-body__focus card-body__focus__${color}`}
                        >
                          <p className="card-body__focus__title">
                            Specialisatie
                          </p>
                          <p className="card-body__focus__content">
                            {job.focus}
                          </p>
                        </div>
                      )}

                      {job.responsibilities &&
                        job.responsibilities.length > 0 && (
                          <div className="card-body__list">
                            <p className="card-body__list__title">
                              <Briefcase size={20} />
                              Verantwoordelijkheden
                            </p>
                            <ul className="card-body__list__items">
                              {job.responsibilities.map((item, i) => (
                                <li
                                  key={i}
                                  className={`card-body__list__items__item card-body__list__items__item__${color}`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {job.achievements && job.achievements.length > 0 && (
                        <div className="card-body__list">
                          <p className="card-body__list__title">
                            <TrendingUp size={20} />
                            Prestaties
                          </p>
                          <ul className="card-body__list__items">
                            {job.achievements.map((item, i) => (
                              <li
                                key={i}
                                className={`card-body__list__items__item card-body__list__items__item__${color} checkmark`}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.tech && job.tech.length > 0 && (
                        <div className="card-body__tags">
                          <p className="card-body__tags__title">
                            Technologieën
                          </p>
                          <div className="card-body__tags__items">
                            {job.tech.map((tech, i) => (
                              <div
                                key={i}
                                className="card-body__tags__items__item"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardBody>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="summary">
        <h2 className="summary__title">Samenvatting professionele skills</h2>
        <div className="summary__container">
          <div className="summary__container__item">
            <span className="summary__container__item__years">5+</span>
            <div className="summary__container__item__subtext">
              Jaren codeer ervaring
            </div>
          </div>
          <div className="summary__container__item">
            <span className="summary__container__item__projects">2</span>
            <div className="summary__container__item__subtext">
              Voltooide stages
            </div>
          </div>
          <div className="summary__container__item">
            <span className="summary__container__item__tech">10</span>
            <div className="summary__container__item__subtext">
              Technologieën gebruikt
            </div>
          </div>
        </div>
      </div>

      <ProfileModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default Profession;

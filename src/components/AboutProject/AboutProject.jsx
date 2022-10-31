import React from "react";
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <>
      <SectionTitle title={"О проекте"} id={"about-project"} />
      <section className="about-project">
        <ul className="about-project__list">
          <li className="about-project__list-item">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности
              и&nbsp;финальные доработки.
            </p>
          </li>
          <li className="about-project__list-item">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description">
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать,
              чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="about-project__time-sprints">
          <p className="about-project__time-sprint about-project__time-sprint_first">1 неделя</p>
          <p className="about-project__time-sprint about-project__time-sprint_second">4 недели</p>
          <p className="about-project__time-sprint-task">Back-end</p>
          <p className="about-project__time-sprint-task">Front-end</p>
        </div>
      </section>
    </>
  );
}

export default AboutProject;

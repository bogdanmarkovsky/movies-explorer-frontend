import React from "react";
import SectionTitle from '../SectionTitle/SectionTitle';
import ava from "../../images/ava.jpg";
import './AboutMe.css';

function AboutMe() {
  return (
    <>
      <SectionTitle title={"Cтудент"} id={"student"} />
      <section className="aboutme">
        <div className="aboutme__info">
          <div className="aboutme__text-container">
            <h3 className="aboutme__title">Богдан</h3>
            <p className="aboutme__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;столице Сибири&nbsp;&mdash; Новосибирске,
              закончил факультет экономики НГУЭУ. В&nbsp;свободное время люблю заниматься спортом, гулять с&nbsp;друзьями,
              а&nbsp;также читать книги. Сейчас учусь на&nbsp;курсе веб-разработки в&nbsp;Яндекс.Практикум и&nbsp;работаю
              над дипломным проектом.</p>
          </div>
          <a
            className="aboutme__link"
            href="https://github.com/bogdanmarkovsky"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <img className="aboutme__avatar" src={ava} alt="ава"></img>
      </section>
    </>
  );
}

export default AboutMe;

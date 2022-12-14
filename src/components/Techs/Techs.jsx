import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';

function Techs() {
  return (
    <>
      <SectionTitle
        title={"Технологии"}
        id={"technologies"}
      />
      <section className="techs">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в дипломном
          проекте.
        </p>
        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </section>
    </>
  );
}

export default Techs;

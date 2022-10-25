import React from "react";
import './Promo.css';
import logo from "../../images/logo_praktikum.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__logo-container">
        <img className="promo__logo" src={logo} alt="logo"></img>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
      <nav class="promo__nav-menu">
        <ul className="promo__links-list">
          <li className="promo__links-item"><a className="promo__link" href="#about-project">О проекте</a></li>
          <li className="promo__links-item"><a className="promo__link" href="#technologies">Технологии</a></li>
          <li className="promo__links-item"><a className="promo__link" href="#student">Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default Promo;

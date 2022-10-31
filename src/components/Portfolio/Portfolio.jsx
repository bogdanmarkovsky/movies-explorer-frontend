import React from "react";
import './Portfolio.css';


function Porfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/bogdanmarkovsky/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__link-description">Статичный сайт</span>
            <span className="portfolio__link-symbol">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/bogdanmarkovsky/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__link-description">Адаптивный сайт</span>
            <span className="portfolio__link-symbol">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/bogdanmarkovsky/react-mesto-api-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__link-description">Одностраничное приложение</span>
            <span className="portfolio__link-symbol">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Porfolio;

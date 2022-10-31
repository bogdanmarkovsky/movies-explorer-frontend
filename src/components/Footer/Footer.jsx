import React from 'react';
import { useLocation } from 'react-router-dom';
import { footerRoutes } from '../../utils/constants';
import './Footer.css';

function Footer() {
  const location = useLocation();

  function checkRoute(routes) {
    return routes.some((item) => item === location.pathname);
  }

  return (
    checkRoute(footerRoutes) && (
      <footer className='footer'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
          <p className='footer__copyright'>&copy;2022</p>
          <nav className='footer__nav'>
            <a
              href='https://practicum.yandex.ru'
              className='footer__link'
              target='_blank'
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              href='https://github.com/bogdanmarkovsky'
              className='footer__link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </nav>
        </div>
      </footer>
    )
  );
}

export default Footer;

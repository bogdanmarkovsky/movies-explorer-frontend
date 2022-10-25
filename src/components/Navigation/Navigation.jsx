import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoggedIn, handleSideMenuClick }) {
  const location = useLocation();

  return (
    <nav className='navigation'>
      {location.pathname === '/' ? (
        <>
          <Link
            to="/signup"
            className="navigation__link-landing"
          >
            Регистрация</Link>
          <Link
            to="/signin"
            className="navigation__link-landing navigation__link-landing_type_button"
          >
            Войти
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/movies"
            className={`navigation__link ${location.pathname === '/' ? 'navigation__link_place_main' : ''}`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`navigation__link navigation__link_font_regular ${location.pathname === '/' ? 'navigation__link_place_main' : ''}`}
          >
            Сохранённые фильмы
          </Link>
          <Link
            to="/profile"
            className="navigation__link-button"
          >
          </Link>
          <button className='navigation__button' onClick={handleSideMenuClick}></button>
        </>
      )
      }
    </nav >
  );
}

export default Navigation;



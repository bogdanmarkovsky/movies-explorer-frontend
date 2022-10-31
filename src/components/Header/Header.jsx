import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import { headerRoutes } from '../../utils/constants';

function Header({ children }) {
  const location = useLocation();

  function checkRoute(routes) {
    return routes.some((item) => item === location.pathname);
  }

  return (
    checkRoute(headerRoutes) ? (
      <header className={`header ${location.pathname === '/' ? 'header_theme_deep-blue' : ''}`}>
        <div className="header__container">
          <Link
            to="/"
            className='logo header__logo'
          >
            <img
              src={logo}
              alt="Логотип"
            />
          </Link>
          {children}
        </div>
      </header>
    ) : ''
  );
}

export default Header;


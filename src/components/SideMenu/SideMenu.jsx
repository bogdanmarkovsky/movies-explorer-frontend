import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideMenu.css';

function SideMenu({ isHidden, onClose, onClickOnOverlay }) {
  const location = useLocation();

  return (
    <nav
      className={`sidemenu ${!isHidden ? 'sidemenu_type_visible' : ''}`}
      onClick={onClickOnOverlay}
    >
      <div className={`sidemenu__container ${!isHidden ? ' sidemenu__container_type_visible' : ''}`}>
        <Link
          to='/'
          className={`sidemenu__link ${(location.pathname === '/') && ' sidemenu__link_place_current'}`}
        >
          Главная
        </Link>
        <Link
          to='/movies'
          className={`sidemenu__link ${(location.pathname === '/movies') && ' sidemenu__link_place_current'}`}
        >
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className={`sidemenu__link ${(location.pathname === '/saved-movies') && ' sidemenu__link_place_current'}`}
        >
          Сохранённые фильмы
        </Link>
        <Link
          to='/profile'
          className='sidemenu__link-button'
        />
        <button
          className='sidemenu__close-button'
          onClick={onClose}
        />
      </div>
    </nav>
  );
}

export default SideMenu;

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <p className="not-found-page__error-code">404</p>
      <p className="not-found-page__error-text">Страница не найдена</p>
      <Link
        className="not-found-page__link"
        to="/"
      >
        Назад
      </Link>
    </div>
  );
}

export default NotFound;

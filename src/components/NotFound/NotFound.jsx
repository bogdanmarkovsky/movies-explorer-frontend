import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

  function goBack() {
    window.history.back();
  }
  return (
    <div className="not-found-page">
      <p className="not-found-page__error-code">404</p>
      <p className="not-found-page__error-text">Страница не найдена</p>
      <button
        type='button'
        className="not-found-page__link"
        onClick={goBack}
      >
        Назад
      </button>
    </div>
  );
}

export default NotFound;

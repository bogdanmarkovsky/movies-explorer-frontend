import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import movie from '../../images/movie.png';

function MoviesCard({ card }) {
  const location = useLocation();

  return (
    <div className="card">
      <div className="card__body">
        <h3 className="card__title">{card.name}</h3>
        <p className="card__duration">{card.duration}</p>
        {location.pathname === "/movies" ? (
          <input
            type="checkbox"
            className="card__checkbox"
            defaultChecked={card.saved === true}
          ></input>
        ) : (
          <button className="card__button"></button>
        )}
      </div>
      <img
        className="card__image"
        src={movie}
        alt={card.name}
      />
    </div>
  );
}

export default MoviesCard;

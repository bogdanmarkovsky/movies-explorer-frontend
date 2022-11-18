import React from 'react';
import { useLocation } from 'react-router-dom';
import { moviesApiUrl } from '../../utils/constants';
import './MoviesCard.css';


function MoviesCard({ movie, onSave, onDelete, isChecked }) {
  const location = useLocation();

  function minutesToHours(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    if (hours === 0) {
      return `${minutes}м`
    }
    return `${hours}ч ${minutes}м`
  }

  function deleteMovieFromSaved() {
    if (location.pathname === '/movies') {
      onDelete(movie.id);
    } else {
      onDelete(movie.movieId);
    }
  }

  function addMovieToSaved() {
    onSave({
      country: movie.country ? movie.country : 'Неизвестно',
      director: movie.director ? movie.director : 'Неизвестно',
      duration: movie.duration ? movie.duration : 0,
      year: movie.year ? movie.year : 0,
      description: movie.description ? movie.description : 'Неизвестно',
      image: moviesApiUrl + movie.image.url ? moviesApiUrl + movie.image.url : 'https://unknown.com',
      trailerLink: movie.trailerLink ? movie.trailerLink : 'https://unknown.com',
      thumbnail: movie.thumbnail ? movie.thumbnail : 'https://unknown.com',
      movieId: movie.id,
      nameRU: movie.nameRU ? movie.nameRU : 'Неизвестно',
      nameEN: movie.nameEN ? movie.nameEN : 'Неизвестно',
    });
  }

  return (
    <div className="card">
      <a
        className="card__image-container"
        href={movie.trailerLink}
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="card__image"
          src={location.pathname === '/movies' ? moviesApiUrl + movie.image.url : movie.image}
          alt={movie.nameRU}
        />
      </a>
      <div className="card__body">
        <h3 className="card__title">{movie.nameRU}</h3>
        <p className="card__duration">{minutesToHours(movie.duration)}</p>
        {location.pathname === "/movies" ?
          <button
            className={`card__checkbox ${isChecked && 'card__checkbox_active'}`
            }
            type='button'
            onClick={isChecked ?
              deleteMovieFromSaved :
              addMovieToSaved
            }
          />
          :
          (
            <button
              className="card__button"
              onClick={deleteMovieFromSaved}
            />
          )
        }
      </div>
    </div>
  );
}

export default MoviesCard;

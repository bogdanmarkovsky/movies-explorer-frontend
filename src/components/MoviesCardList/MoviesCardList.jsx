import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({
  moviesAmount,
  handleMoviesAmount,
  isPreloaderActive,
  foundMovies,
  notFoundMovies,
  handleFindMovieInSaved,
  handleAddMovieToSaved,
  handleDeleteMovieFromSaved
}) {

  function generateCardsList() {
    if (isPreloaderActive) {
      return <Preloader />;
    }
    if (notFoundMovies) {
      return <p className='movies-cardlist__subtitle'>Ничего не найдено</p>;
    }
    return foundMovies
      .slice(0, moviesAmount)
      .map((item) =>
        <MoviesCard
          key={item.id || item._id}
          movie={item}
          onSave={handleAddMovieToSaved}
          onDelete={handleDeleteMovieFromSaved}
          isChecked={handleFindMovieInSaved(item)}
        />
      );
  }

  function getButton() {
    if (!((foundMovies.length <= moviesAmount) || notFoundMovies)) {
      return (
        <div className='movies-cardlist__button-container'>
          <button
            className='movies-cardlist__button'
            onClick={handleMoviesAmount}
          >
            Ещё
          </button>
        </div>
      )
    }
  }

  return (
    <div className='movies-cardlist'>
      <div className={`movies-cardlist__container ${(isPreloaderActive || notFoundMovies) && 'movies-cardlist__container_type_preload'}`}>
        {generateCardsList()}
      </div>
      {getButton()}
    </div>
  );
}

export default MoviesCardList;

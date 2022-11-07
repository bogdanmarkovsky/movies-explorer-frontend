import { React, useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../Preloader/Preloader';
import { useScreenWidth } from '../../utils/UseScreenWidth';
import { screenSizeL } from '../../utils/constants.js';
import { screenSizeM } from '../../utils/constants.js';
import { moviesAmountScreenSizeL } from '../../utils/constants.js';
import { moviesAmountScreenSizeM } from '../../utils/constants.js';
import { moviesAmountScreenSizeS } from '../../utils/constants.js';
import { additionalMoviesAmountSizeL } from '../../utils/constants.js';
import { additionalMoviesAmountSizesM } from '../../utils/constants.js';
import { additionalMoviesAmountSizesS } from '../../utils/constants.js';
import './MoviesCardList.css';

function MoviesCardList({
  isPreloaderActive,
  foundMovies,
  notFoundMovies,
  handleFindMovieInSaved,
  handleAddMovieToSaved,
  handleDeleteMovieFromSaved
}) {
  const screenWidth = useScreenWidth();
  const [moviesAmount, setMoviesAmount] = useState(0);

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

  function handleCountMovies() {
    if (screenWidth >= screenSizeL) {
      setMoviesAmount(moviesAmount + additionalMoviesAmountSizeL);
    }
    if (screenWidth < screenSizeL) {
      setMoviesAmount(moviesAmount + additionalMoviesAmountSizesM);
    }
    if (screenWidth < screenSizeM) {
      setMoviesAmount(moviesAmount + additionalMoviesAmountSizesS);
    }
  }

  function getButton() {
    if (!((foundMovies.length <= moviesAmount) || notFoundMovies)) {
      return (
        <div className='movies-cardlist__button-container'>
          <button
            className='movies-cardlist__button'
            onClick={handleCountMovies}
          >
            Ещё
          </button>
        </div>
      )
    }
  }

  useEffect(() => {
    if (screenWidth >= screenSizeL) {
      setMoviesAmount(moviesAmountScreenSizeL);
    }
    if (screenWidth < screenSizeL) {
      setMoviesAmount(moviesAmountScreenSizeM);
    }
    if (screenWidth < screenSizeM) {
      setMoviesAmount(moviesAmountScreenSizeS);
    }
  }, [screenWidth]);

  useEffect(() => {
    generateCardsList();
  }, []);

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

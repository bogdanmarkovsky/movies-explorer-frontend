import { React, useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../Preloader/Preloader';
import { useScreenWidth } from '../../utils/UseScreenWidth';
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
    if (screenWidth >= 998) {
      setMoviesAmount(moviesAmount + 3);
    }
    if (screenWidth < 998) {
      setMoviesAmount(moviesAmount + 2);
    }
    if (screenWidth < 648) {
      setMoviesAmount(moviesAmount + 2);
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
          </button>z
        </div>
      )
    }
  }

  useEffect(() => {
    if (screenWidth >= 998) {
      setMoviesAmount(12);
    }
    if (screenWidth < 998) {
      setMoviesAmount(8);
    }
    if (screenWidth < 648) {
      setMoviesAmount(5);
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

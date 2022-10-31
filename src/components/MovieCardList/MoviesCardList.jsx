import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import './MoviesCardList.css';
import { testMovies } from '../../utils/constants';

function MoviesCardList() {
  const location = useLocation();

  const generateCards = () => {
    if (location.pathname === '/movies') {
      return testMovies.map((item) => <MoviesCard key={item._id} card={item} />)
    }
    return testMovies.map((item) => {
      if (item.saved === true) {
        return <MoviesCard key={item._id} card={item} />
      }
      return null;
    });
  }

  return (
    <div className='movies-cardlist'>
      <div className='movies-cardlist__container'>
        {generateCards()}
      </div>
      <div className={`movies-cardlist__button-container ${location.pathname === '/saved-movies' ? 'movies-cardlist__button-container_type_none' : ''}`}>
        <button className={`movies-cardlist__button ${location.pathname === '/saved-movies' ? 'movies-cardlist__button_type_none' : ''}`}>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ movies, handleGetMovies, handleMoviesSearch }) {
  const [searchValue, getSearchValue] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const location = useLocation();

  function handleChangeSearchInput(evt) {
    getSearchValue(evt.target.value);
  }

  function handleCheckShortMovies(evt) {
    if (evt.target.checked) {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }

    if (location.pathname === '/movies') {
      localStorage.setItem('isShortMovies', !isShortMovies);
    }
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (searchValue === '') {
      return setIsValid(false);
    }
    setIsValid(true);
    if (location.pathname === '/movies') {
      localStorage.setItem('searchText', searchValue);
      const movies = JSON.parse(localStorage.getItem('movies'));
      if (!movies) {
        handleGetMovies();
      }
    }
    handleMoviesSearch(searchValue, isShortMovies, movies);
  }

  useEffect(() => {
    if (location.pathname === '/movies') {
      const text = localStorage.getItem('searchText');
      const checkStatus = JSON.parse(localStorage.getItem('isShortMovies'));

      if (text) {
        getSearchValue(text);
        setIsShortMovies(checkStatus);
      }
    }
  }, []);

  useEffect(() => {
    handleMoviesSearch(searchValue, isShortMovies, movies);
  },
    [isShortMovies, movies]);

  return (
    <div className='search__container'>
      <form
        className='search__form'
        onSubmit={handleSearchSubmit}
        noValidate
      >
        <input
          value={searchValue}
          onChange={handleChangeSearchInput}
          className='search__form-input'
          id='search__form-input'
          type='text'
          name='movies'
          placeholder='Фильм'
          required
        />
        <button
          className='search__form-submit-button'
          type='submit'
        >
          Найти
        </button>
      </form>
      <span
        className='search__input-error'
        id='search-input-error'
      >
        {(!isValid) && 'Нужно ввести ключевое слово'}
      </span>
      <FilterCheckbox
        check={isShortMovies}
        onCheck={handleCheckShortMovies}
      />
    </div>
  );
}

export default SearchForm;

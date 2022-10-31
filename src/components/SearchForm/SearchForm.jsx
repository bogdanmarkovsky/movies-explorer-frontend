import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className='search__container'>
      <form className='search__form'>
        <input
          className='search__form-input'
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
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;

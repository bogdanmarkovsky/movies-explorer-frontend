import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
      />
      <label className='filter__name'>Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;

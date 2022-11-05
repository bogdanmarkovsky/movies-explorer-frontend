import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ check, onCheck }) {
  function handleChangeCheckbox(evt) {
    onCheck(evt);
  }

  return (
    <div className="filter">
      <input
        onChange={handleChangeCheckbox}
        className="filter__checkbox"
        type="checkbox"
        checked={check && true}
      />
      <label className='filter__name'>Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;

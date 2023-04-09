import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
 

  return (
    <>
      <input onClick={props.handleChecked} type="checkbox" name='filter' id='filter' className='filterCheckbox' />
      <label className='filter' htmlFor="filter">Только российские поставщики</label>
    </>
  )
}

export default FilterCheckbox;

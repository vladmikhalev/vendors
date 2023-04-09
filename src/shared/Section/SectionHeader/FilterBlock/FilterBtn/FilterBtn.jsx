import React from 'react';
import './FilterBtn.css';

function FilterBtn(props) {
  return (
    <button onClick={props.handleOpen} className='filterBtn'>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8333 22.6667C17.988 22.6667 22.1667 18.488 22.1667 13.3333C22.1667 8.17868 17.988 4 12.8333 4C7.67868 4 3.5 8.17868 3.5 13.3333C3.5 18.488 7.67868 22.6667 12.8333 22.6667Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.5 25L19.425 19.925" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default FilterBtn;

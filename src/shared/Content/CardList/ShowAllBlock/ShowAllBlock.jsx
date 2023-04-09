import React from 'react';
import './ShowAllBlock.css'

function ShowAllBlock(props) {
  return (
    <div className='showAllBlock'>
      <svg className='showAllSvg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2">
          <path d="M18.3333 31.6667C25.6971 31.6667 31.6667 25.6971 31.6667 18.3333C31.6667 10.9695 25.6971 5 18.3333 5C10.9695 5 5 10.9695 5 18.3333C5 25.6971 10.9695 31.6667 18.3333 31.6667Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 35L27.75 27.75" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
        </g>
      </svg>
      <span className='showAllText'>По данному запросу ничего не найдено, попробуйте сбросить фильтры или ввести другой запрос</span>
      <button className='showAllBtn' onClick={props.handleShowAll}>Показать все вендоры</button>
    </div>
  )
}


export default ShowAllBlock;

import React from 'react';
import './SectionHeader.css';
import FilterBlock from './FilterBlock/FilterBlock.jsx'


function SectionHeader() {
  return (
    <div className='sectionHeader'>
      <h1 className='title'>Вендоры</h1>
      <FilterBlock />
    </div>
  )
}

export default SectionHeader;

/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './FilterBlock.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import FilterBtn from './FilterBtn/FilterBtn';
import { FilterContext } from '../../../../context/FilterContext';


function FilterBlock() {
  const [showBtn, setShowBtn] = React.useState(true)
  const context = React.useContext(FilterContext);

  function handleChecked() {
    const checkbox = document.getElementById('filter');
    context.handleFilterState(checkbox.checked);
  }

  function handleOpen() {
    context.handleOpenSearch(!context.isOpenSearch)
  }

  
  
  React.useEffect(() => {
    if (window.innerWidth < 1321) {
      context.handleOpenSearch(true)
    }
    const handleResize = () => {
      if (window.innerWidth < 1321) {
        context.handleOpenSearch(true)
      } else {
        context.handleOpenSearch(false)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='filterBlock'>
      <FilterCheckbox handleChecked={handleChecked} />
      {showBtn && <FilterBtn handleOpen={handleOpen} />}
    </div>
  )
}

export default FilterBlock;

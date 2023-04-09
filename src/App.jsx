import './App.css';
import Section from './shared/Section/Section'
import SectionHeader from './shared/Section/SectionHeader/SectionHeader'
import Content from './shared/Content/Content'
import React from 'react';
import { FilterContext } from './context/FilterContext';


function App() {
  const [filterState, setFilterState] = React.useState(false);
  const [isOpenSearch, setIsOpenSearch] = React.useState(false);

  function handleFilterState(state) {
    setFilterState(state);
  }

  function handleOpenSearch(state) {
    setIsOpenSearch(state);
  }

  return (
    <FilterContext.Provider value={{filterState, handleFilterState, isOpenSearch, handleOpenSearch}}>
      <div className="App">
        <Section>
          <SectionHeader />
          <Content />
        </Section>
      </div>
    </FilterContext.Provider>
  );
}

export default App;

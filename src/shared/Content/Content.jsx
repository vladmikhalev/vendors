import React from 'react';
import './Content.css';
import CardList from './CardList/CardList';
import SearchForm from './SearchForm/SearchForm';
import { FilterContext } from '../../context/FilterContext'
import './Content.css';


function Content() {
  const context = React.useContext(FilterContext)
  const [searchText, setSearchText] = React.useState('');
  React.useEffect(() => {
    if (!context.isOpenSearch) {
      setSearchText('');
    }
  }, [context.isOpenSearch])

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function clearInput() {
    setSearchText('');
  }



  return (
    <div className='content'>
      {context.isOpenSearch && <SearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        text={searchText}
        isOpen={context.isOpenSearch}
        clearInput={clearInput}
        setSearchText={setSearchText}
      />}
      <CardList searchText={searchText} setSearchText={setSearchText} />
    </div>
  )
}

export default Content;

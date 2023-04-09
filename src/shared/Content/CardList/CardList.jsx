/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './CardList.css';
import Card from './Card/Card';
import { useState } from 'react';
import { FilterContext } from '../../../context/FilterContext'
import ShowAllBlock from './ShowAllBlock/ShowAllBlock'
import AddCardBtn from './AddCardBtn/AddCardBtn';

// Условные данные карточек с сервера

const data = [
  {
    suppliers: 'РУС',
    id: 1,
    name: 'pro32',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 2,
    name: 'Basis',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 3,
    name: 'R-Vision',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 4,
    name: 'TRAPX',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 5,
    name: 'Positive Technologies',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 6,
    name: 'pro32',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 7,
    name: 'Basis',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 8,
    name: 'R-Vision',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 9,
    name: 'TRAPX',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 10,
    name: 'Positive Technologies',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 11,
    name: 'pro32',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 12,
    name: 'Basis',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 13,
    name: 'R-Vision',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 14,
    name: 'TRAPX',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 15,
    name: 'Positive Technologies',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 16,
    name: 'R-Vision',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: '',
    id: 17,
    name: 'TRAPX',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },
  {
    suppliers: 'РУС',
    id: 18,
    name: 'Positive Technologies',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },


]


function CardList(props) {
  const context = React.useContext(FilterContext);
  const [newData, setNewData] = useState([...data])
  const [cards, setCards] = useState(initialState(data))

  function initialState(arr) {
    const initialProducts = arr.slice(0, 9);
    return initialProducts;
  }


  React.useEffect(() => {

    //Поиск по карточкам
    let sortValue = data;
    if (props.searchText || props.searchText === '') {
      sortValue = data.filter(item => item.name.toLowerCase().startsWith(props.searchText.toLowerCase()))
      setNewData(sortValue);
      setCards(initialState(sortValue))
    }

    //Фильтрация по российким компаниям
    if (context.filterState) {
      console.log('filter country', context.filterState);
      const filterData = sortValue.filter((item) => item.suppliers === 'РУС');
      setNewData(filterData);
      setCards(initialState(filterData));
    }

  }, [props.searchText, context.filterState])

  // Добавить 6 карточек
  function handleClick() {
    if (showBtn) {
      setCards(initialState(newData))
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      const newCards = newData.slice(cards.length, cards.length + 6);
      setCards(cards.concat(newCards));
      // }
    }
  }
  // Обработчик события кнопки "Показать все карточки"
  function handleShowAll() {
    if (window.innerWidth > 1321) {
      context.handleOpenSearch(false);
    }
    console.log(context);
    setCards(initialState(data));
    setNewData(data)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.getElementById('filter').checked = false;
    context.handleFilterState(false)
    props.setSearchText('')
  }

  console.log(cards.length);
  console.log(newData.length);
  const showBtn = cards.length === newData.length
  return (
    <>
      <ul className='cardList'>
        {cards.length !== 0 && cards.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </ul>
      {!showBtn && cards.length !== 0 && <AddCardBtn handleClick={handleClick}>Показать еще</AddCardBtn>}
      {showBtn && cards.length !== 0 && <AddCardBtn handleClick={handleClick} >Скрыть</AddCardBtn>}
      {cards.length === 0 && <ShowAllBlock handleShowAll={handleShowAll} />}
    </>
  )
}

export default CardList;

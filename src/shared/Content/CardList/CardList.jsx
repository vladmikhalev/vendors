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
  }, {
    suppliers: 'РУС',
    id: 18,
    name: 'Positive Technologies',
    text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
    tech: 'Positive Technologies',
  },


]


function CardList(props) {
  const initialProducts = data.slice(0, 9);
  const [cards, setCards] = useState(initialProducts)
  const context = React.useContext(FilterContext);

  // function initialState(arr) {
  //   const initialProducts = arr.slice(0, 9);
  //   return initialProducts;
  // }

  //Фильтрация по российким компаниям
  React.useEffect(() => {
    if (context.filterState) {
      const filterData = cards.filter((item) => item.suppliers === 'РУС');
      setCards(filterData);
    } else {
      setCards(initialProducts)
    }
  }, [context.filterState])



  // Добавить 6 карточек
  function handleClick() {
    if (showBtn) {
      setCards(initialProducts)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      const newCards = data.slice(cards.length, cards.length + 6);
      setCards(cards.concat(newCards))
    }
  }

  // Обработчик события кнопки "Показать все карточки"
  function handleShowAll() {
    if (1321 < window.innerWidth) {
      console.log('cloooseee');
    context.handleOpenSearch(false);
  }
    setCards(initialProducts);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  //Поиск по карточкам
  React.useEffect(() => {
    if (props.searchText && props.searchText !== '') {
      const sortValue = data.filter(item => item.name.toLowerCase().startsWith(props.searchText.toLowerCase()))
      setCards(sortValue)
    } else {
      setCards(initialProducts);
    }
  }, [props.searchText])


  const showBtn = cards.length === data.length
  return (
    <>
      <ul className='cardList'>
        {cards.length !== 0 && cards.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </ul>
      {!showBtn && !context.filterState && cards.length !== 0 && <AddCardBtn handleClick={handleClick}>Показать еще</AddCardBtn>}
      {showBtn && cards.length !== 0 && <AddCardBtn handleClick={handleClick} >Скрыть</AddCardBtn>}
      {cards.length === 0 && <ShowAllBlock handleShowAll={handleShowAll} />}
    </>
  )
}

export default CardList;

import React from 'react';
import './Card.css';



// suppliers: 'rus',
//     name: 'Positive Technologies',
//     text: 'Решения c максимальным уровнем защиты для бизнеса и домашних пользователей',
//     tech: 'Positive Technologies',
function Card({ data }) {
  let srcImgCompany = '';
  switch (data.name) {
    case 'Positive Technologies':
      srcImgCompany = "/images/PositiveTechnologies.svg";
      break;
    case 'pro32':
      srcImgCompany = "/images/pro32.svg";
      break;
    case 'Basis':
      srcImgCompany = "/images/Basis.svg";
      break;
    case 'R-Vision':
      srcImgCompany = "/images/R-Vision.svg";
      break;
    case 'TRAPX':
      srcImgCompany = "/images/TRAPX.svg";
      break;


    default:
      break;
  }
  let srcBorder = ''
  window.innerWidth < 1321 ? srcBorder ="/images/border_mobile.svg" : srcBorder = "/images/border.svg";

  return (
    <li className='card'>
      {data.suplies !== '' && <span className='country'>{data.suppliers}</span>}
      <img className='borderCard' src={srcBorder} alt="border" />
      <img className='imgCompany' src={srcImgCompany} alt="name company" />
      <p className='text'>{data.text}</p>
      <span className='tech'>{data.tech}</span>
    </li>
  )
}

export default Card;








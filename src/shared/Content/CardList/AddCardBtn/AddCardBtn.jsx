import React from 'react';
import './AddCardBtn.css'


function AddCardBtn(props) {
  return (
    <button className='addCardBtn' onClick={props.handleClick} >{props.children}</button>
   )
}
 
export default AddCardBtn;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './SearchForm.css';


function SearchForm(props) {
  const inputRef = React.useRef(null)
  function focus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  React.useEffect(() => {
    if (props.isOpen) {
      focus()
    } 
  }, [props.isOpen])

  return (
    <form className='searchForm' onSubmit={props.handleSubmit}>
      <button className='submitBtn' type='submit'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <path d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67868 17.988 3.5 12.8333 3.5C7.67868 3.5 3.5 7.67868 3.5 12.8333C3.5 17.988 7.67868 22.1667 12.8333 22.1667Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.5 24.5L19.425 19.425" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
          </g>
        </svg>
      </button>

      <input ref={inputRef} placeholder='Введите название продукта' id='inputForm' className='inputForm' type="text" value={props.text} onChange={props.handleChange} />

      <button className='closeBtn' type="reset" onClick={props.clearInput}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <path d="M24 4L4 24" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M4 4L24 24" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
          </g>
        </svg>
      </button>
    </form>
  )
}

export default SearchForm;

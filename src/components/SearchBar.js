import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({onSubmit}) {

  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  }

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input value={term} onChange={handleOnChange}/>
      </form>
    </div>
  )
}

export default SearchBar
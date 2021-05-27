import './SearchForm.css'
import React, {useState} from 'react';

const SearchForm = ({onSubmit}) => {

  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(query)
  }

  return (
    <form onSubmit={handleSubmit} role="search">
      <label htmlFor="search">Search your favourite GIF</label>
      <div>
        <input name="search" type="text" placeholder="Find your favourite GIF 🔎" value={query} onChange={(e) => {setQuery(e.target.value)}} id="search"/> 
        <button type="submit" className="search_btn">Search</button>
      </div>
    </form>
  )
}

export default SearchForm;
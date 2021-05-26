import './SearchForm.css'
import React, {useState} from 'react';

const SearchForm = ({onSubmit}) => {

  const [query, setQuery] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(query)
    console.log('query ' + query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Search your favourite GIF and Stickers 🔎 </label>
      <input type="text" placeholder="Search GIF" onChange={(e) => {setQuery(e.target.value)}}/>
    </form>
  )
}

export default SearchForm;
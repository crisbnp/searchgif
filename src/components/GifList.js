import './GifList.css'
import React from 'react';
import GifCard from './GifCard'

const GifList = ({gifs}) => {
  return (
    <section className="gridContainer">
      {gifs.map((gif) => {
        return (
         <GifCard key={gif.id} gif={gif}/> 
        )
      })}
    </section>
  )
}

export default GifList
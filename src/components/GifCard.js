import React from 'react';
import './GifCard.css'

const GifCard = ({gif}) => {
  const gifView = `https://media.giphy.com/media/${gif.id}/giphy.gif`

  return (
    <div className="gallery_card">
      <a href={gifView}>
        <img src={gif.images.fixed_height.url} alt={gif.title} className="gallery_img"/>
      </a>
    </div>
  )
}

export default GifCard;
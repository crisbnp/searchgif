import React from 'react';
import './GifCard.css'

const GifCard = ({gif}) => {
  const gifView = `https://media.giphy.com/media/${gif.id}/giphy.gif`
  const altText = `desc: ${gif.title}`
  return (
    <div className="gallery_card">
        <a href={gifView}>
          <img src={gif.images.fixed_height.url} alt={altText} className="gallery_img"/>
        </a>
    </div>
  )
}

export default GifCard;
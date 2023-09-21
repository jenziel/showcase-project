import React from "react";
import PropTypes from "prop-types";
import "./ArtworkCards.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { fetchSelectedArtwork } from "../../apiCalls";

function ArtworkCards({title, id, getArtworkById, getImageId, setIsLoading, alt}) {
  const [thumbnailId, setThumbnailId] = useState("")
  const handleClick = () => {
    getArtworkById(id);
    setIsLoading(true)
  };

useEffect(()=>{
  getImage(id)
})
  function getImage (id){
    fetchSelectedArtwork(id)
    .then((data)=>{
      setThumbnailId(`https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`)
    })}

  return (
    <div onClick={handleClick} className='artwork-preview'>
      <Link to={`/artworks/${id}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
        <img src={thumbnailId} alt={alt} key={id}
          id={id}></img>
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default ArtworkCards
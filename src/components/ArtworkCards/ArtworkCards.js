import React from "react";
import PropTypes from "prop-types";
import "./ArtworkCards.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSelectedArtwork } from "../../apiCalls";

function ArtworkCards({
  title,
  id,
  getArtworkById,
  getImageId,
  setIsLoading,
  alt,
}) {
  const [thumbnailId, setThumbnailId] = useState("");
  const handleClick = () => {
    getArtworkById(id);
    setIsLoading(true);
  };

  useEffect(() => {
    getImage(id);
  });

  function getImage(id) {
    fetchSelectedArtwork(id).then((data) => {
      setThumbnailId(
        `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`
      );
    });
  }

  return (
    <div onClick={handleClick} className='artwork-card'>
      <Link
        to={`/artworks/${id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className='image-box'>
          <img src={thumbnailId} alt={alt} key={id} id={id}></img>
        </div>
        <div className='info-box'>
          <p className='title-preview'>{title}</p>
          <p className='artist-preview'>Artist</p>
          <p className='date-preview'>Date</p>
        </div>
      </Link>
    </div>
  );
}

export default ArtworkCards;

ArtworkCards.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  getArtworkById: PropTypes.func.isRequired,
  getImageId: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired
}
import './ArtworkDetails.css'
import {useEffect, useState} from "react"
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

function ArtworkDetails({selectedPiece, searchTerm}){
    console.log("hi", selectedPiece)
    const [isLoading, setIsLoading] = useState(true)
    
console.log(searchTerm, "search term")


   const handleImageLoad = () => {
    setIsLoading(false); 
    console.log("the image is loaded")
  };

  const description1 = selectedPiece.description
    return(
        <div className="details-page">
             {/* {isLoading ? (
        <LoadingComponent />
      ) : ( */}
            <div className="details-top-section">
            <div className="details-short-info">
              <Link  to={`/search/${searchTerm}`}
        style={{ color: "inherit", textDecoration: "inherit" }}>
              <button>←</button>

              </Link>
            <p className="details-title"> {selectedPiece.title}</p>
            <p className="details-artist">{selectedPiece.artist_title}</p>
            <p className="details-place"> {selectedPiece.place_of_origin}</p>
            <p className="details-years"> {selectedPiece.date_display}</p>
            {selectedPiece.description && (
              <div className="details-description">
                {ReactHtmlParser(description1)}
              </div>
            
            )}
            </div>
            <div className="details-large-image">
            <img src={`https://www.artic.edu/iiif/2/${selectedPiece.image_id}/full/843,/0/default.jpg`} onLoad={handleImageLoad}></img>
            </div>
            </div>
            {/* )} */}
            <div className="details-lower-section">

            <h1 className="details-lower-heading">Artwork details</h1>
            <h2  className="details-lower-subheading">Overview:</h2>
            <p className="details-lower-section-title">Title: {selectedPiece.title}</p>
            <p className="details-lower-section-artist">Artist:{selectedPiece.artist_title}</p>
            <p className="details-lower-section-date">Date: {selectedPiece.date_display}</p>
            <p className="details-lower-section-medium">Medium: {selectedPiece.medium_display}</p>
            <p  className="details-lower-section-dims">Dimensions: {selectedPiece.dimensions}</p>
            <p></p>
            <p></p>
            </div>
        </div>
    )
}
export default ArtworkDetails
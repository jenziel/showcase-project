import './RandomDetails.css'
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function RandomDetails({selectedPiece}){
  console.log('selectedPiece2', selectedPiece)
  const description1 = selectedPiece.description
    return(
        <div className="details-page">
            <div className="details-top-section">
            <div className="details-short-info">
              <Link  to={`/`}
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
            <img src={`https://www.artic.edu/iiif/2/${selectedPiece.image_id}/full/843,/0/default.jpg`} alt={`${selectedPiece.alt}`}></img>
            </div>
            </div>
            <div className="details-lower-section">

            <h1 className="details-lower-heading">Artwork details</h1>
            <h2  className="details-lower-subheading">Overview:</h2>
            <p className="details-lower-section-title">Title: {selectedPiece.title}</p>
            <p className="details-lower-section-artist">Artist:{selectedPiece.artist_title}</p>
            <p className="details-lower-section-date">Date: {selectedPiece.date_display}</p>
            <p className="details-lower-section-medium">Medium: {selectedPiece.medium_display}</p>
            <p  className="details-lower-section-dims">Dimensions: {selectedPiece.dimensions}</p>
            </div>
        </div>
    )
}
export default RandomDetails

RandomDetails.propTypes = {
  selectedPiece: PropTypes.object,
};

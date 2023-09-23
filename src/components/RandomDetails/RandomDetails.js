import './RandomDetails.css'
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

function RandomDetails({selectedPiece}){

  const description1 = selectedPiece[0].description
    return(
        <div className="details-page">
            <div className="details-top-section">
            <div className="details-short-info">
              <Link  to={`/`}
        style={{ color: "inherit", textDecoration: "inherit" }}>
              <button>←</button>
              </Link>
            <p className="details-title"> {selectedPiece[0].title}</p>
            <p className="details-artist">{selectedPiece[0].artist_title}</p>
            <p className="details-place"> {selectedPiece[0].place_of_origin}</p>
            <p className="details-years"> {selectedPiece[0].date_display}</p>
            {selectedPiece[0].description && (
              <div className="details-description">
                {ReactHtmlParser(description1)}
              </div>
            
            )}
            </div>
            <div className="details-large-image">
            <img src={`https://www.artic.edu/iiif/2/${selectedPiece[0].image_id}/full/843,/0/default.jpg`}></img>
            </div>
            </div>
            <div className="details-lower-section">

            <h1 className="details-lower-heading">Artwork details</h1>
            <h2  className="details-lower-subheading">Overview:</h2>
            <p className="details-lower-section-title">Title: {selectedPiece[0].title}</p>
            <p className="details-lower-section-artist">Artist:{selectedPiece[0].artist_title}</p>
            <p className="details-lower-section-date">Date: {selectedPiece[0].date_display}</p>
            <p className="details-lower-section-medium">Medium: {selectedPiece[0].medium_display}</p>
            <p  className="details-lower-section-dims">Dimensions: {selectedPiece[0].dimensions}</p>
            </div>
        </div>
    )
}
export default RandomDetails
import "./SearchResults.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import ArtworkCards from "../ArtworkCards/ArtworkCards";
import SearchForm from "../SearchForm/SearchForm";
// import glassesGuy from "../../images/glasses-guy.png"

function SearchResults({
  results,
  getArtworkById,
  getImageId,
  setIsLoading,
  searchTerm,
  setError,
  updateSearchResults,
}) {
 const [noResults, setNoResults] = useState(false)

 useEffect(() => {
  setNoResults(results.length === 0);
}, [results]);

  return (
    <div>
      <div className='results-search-bar'>
        <div className='results-top-row'>
          <h1>Search The Collection</h1>
          <Link to='/showcase-project' className="button-placement" style={{ color: "inherit", textDecoration: "inherit" }}>
            <button className='back-to-search-btn'>Back to Home</button>
          </Link>
        </div>
        <SearchForm
          setError={setError}
          setIsLoading={setIsLoading}
          updateSearchResults={updateSearchResults}
        />
      </div>
      <div className='results-header'>
        <h3>{`Showing ${results.length} results for ${searchTerm}`}</h3>
        </div>
         {noResults ? ( <div className="no-results-msg">
          {/* <img src={glassesGuy} alt="little cartoon of a cursor wearing glasses and smiling"></img> */}
          <h3>Nothing in our collection matches that search.  Try something else! </h3>
        </div> )
         : (
           <div className='results-container'>
           {results.map((result) => (
             <ArtworkCards
               setIsLoading={setIsLoading}
               getImageId={getImageId}
               title={result.title}
               alt={result.thumbnail?.alt_text || "No Alt Text Available"}
               id={result.id}
               key={result.id}
               getArtworkById={getArtworkById}
               searchTerm={searchTerm}
             />
           ))}
         </div>
        )}
     </div>
  );
}

export default SearchResults;


SearchResults.propTypes = {
results: PropTypes.array.isRequired,
getArtworkById: PropTypes.func.isRequired,
getImageId: PropTypes.func.isRequired,
setIsLoading: PropTypes.func.isRequired,
searchTerm: PropTypes.string.isRequired,
setError: PropTypes.func.isRequired,
updateSearchResults: PropTypes.func.isRequired
}
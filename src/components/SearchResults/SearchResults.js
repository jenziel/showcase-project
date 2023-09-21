import './SearchResults.css'
import ArtworkCards from '../ArtworkCards/ArtworkCards'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function SearchResults({results, getArtworkById, getImageId, setIsLoading, searchTerm}){
  console.log("resultsss", results)
  console.log(getArtworkById)

    return (
        <div> 
          <div className='results-header'>
            <Link to='/'>
        <button className='back-to-search-btn'>Back to Search</button>
            </Link>
        <h1>{`Showing ${results.length} results for ${searchTerm}`}</h1>

          </div>
        <div className="results-container">
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
        </div>
      );
}
export default SearchResults
import './SearchResults.css'
import ArtworkCards from '../ArtworkCards/ArtworkCards'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

function SearchResults({results, getArtworkById, getImageId, setIsLoading, searchTerm, setError, updateSearchResults}){
  console.log("resultsss", results)
  console.log(getArtworkById)

    return (
        <div> 
          <div className='results-search-bar'>
            <div className='results-top-row'>
            <h1>Search The Collection</h1>
            <Link to='/'>
        <button className='back-to-search-btn'>Back to Home</button>
            </Link>
            </div>
            <SearchForm setError={setError} setIsLoading={setIsLoading} updateSearchResults={updateSearchResults}/>
          </div>
          <div className='results-header'>
        <h3>{`Showing ${results.length} results for ${searchTerm}`}</h3>

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
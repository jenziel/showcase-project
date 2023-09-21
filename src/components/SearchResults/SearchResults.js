import './SearchResults.css'
import ArtworkCards from '../ArtworkCards/ArtworkCards'
import { useEffect } from 'react'

function SearchResults({results, getArtworkById, getImageId, setIsLoading}){
  console.log("resultsss", results)
  console.log(getArtworkById)

    return (
        <div> 
        <h1>{`Showing ${results.length} results`}</h1>
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
            />
            ))}
        </div>
        </div>
      );
}
export default SearchResults
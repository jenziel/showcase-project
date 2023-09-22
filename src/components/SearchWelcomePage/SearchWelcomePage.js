import './SearchWelcomePage.css'
import SearchForm from '../SearchForm/SearchForm'

function SearchWelcomePage({setError, setIsLoading, updateSearchResults}){


return (
    <div className='search-page'>
      <h1>The Art Institute of Chicago Collection</h1>
      <h2 className="search-instructions">Enter a keyword to search from over 100,000 artworks:</h2>
    <SearchForm setError={setError} setIsLoading={setIsLoading} updateSearchResults={updateSearchResults}/>
    <button className='random-btn'>random artwork</button>
     </div>
      )
}
 export default SearchWelcomePage
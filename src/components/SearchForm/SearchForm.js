import { useState, useEffect } from "react";
import "./SearchForm.css";
import {fetchSearchResults} from "../../apiCalls"
import {Link} from "react-router-dom"

function SearchForm({setError, setIsLoading, updateSearchResults}) {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); 
  const currentSearch = searchQuery
  setIsLoading(false)

  const handleSearch = () => {
    setIsLoading(true)
    fetchSearchResults(searchQuery)
    .then((data)=>{
      console.log("data", data.data)
      setSearchResults(data.data);
      setIsLoading(false)
      updateSearchResults(data.data, currentSearch)
    })
    .catch((response) => {
      setError(response || "failed to fetch collection!");
    });
    clearInput();
  };

  const clearInput = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    console.log(searchQuery)
  }, [searchQuery])


  return (
    <div className='search-page'>
      <h1>The Art Institute of Chicago Collection</h1>
      <h2 className="search-instructions">Enter a keyword to search from over 100,000 artworks:</h2>
      <div className='search-bar-box'>
        <input
          className='search-bar'
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <Link to={`/search/${searchQuery}`}>
        <button className='search-btn' onClick={handleSearch}>
          go
        </button>
        </Link>
      </div>
      <button className='random-btn'>random artwork</button>
    </div>
  );
}
export default SearchForm;

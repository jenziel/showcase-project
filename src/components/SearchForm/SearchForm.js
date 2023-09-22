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
  );
}
export default SearchForm;

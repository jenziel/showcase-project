import { useState } from "react";
import "./SearchForm.css";
import { fetchSearchResults } from "../../apiCalls";
import { Link } from "react-router-dom";

function SearchForm({ setError, setIsLoading, updateSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const currentSearch = searchQuery;

  const handleSearch = () => {
    setIsLoading(true);
    fetchSearchResults(searchQuery)
      .then((data) => {
        setSearchResults(data.data);
        updateSearchResults(data.data, currentSearch);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((response) => {
        setError(response || "failed to fetch collection!");
      });
    clearInput();
  };

  const clearInput = () => {
    setSearchQuery("");
  };

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


import { useState } from 'react';
import './SearchForm.css'


function SearchForm(){
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {

    clearInput()
  }
  const clearInput = () => {
    setSearchQuery("")
  }
    return (
        <div className="homepage">
          <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={handleSearch}>go</button>
        </div>
    )
}
export default SearchForm

import './SearchWelcomePage.css'
import SearchForm from '../SearchForm/SearchForm'
import { fetchRandomArtwork } from '../../apiCalls';
import { Link } from 'react-router-dom'
import {useState} from 'react'
function SearchWelcomePage({setError, setIsLoading, updateSearchResults, updateSelectedPiece, randomNum}){

  const [randomizedId, setRandomizedId] = useState('')
  const [randomPiece, setRandomPiece] = useState(null)



function getRandomArtwork(){
  setIsLoading(true)
  fetchRandomArtwork(randomNum)
  .then((data)=>{
    console.log("data", data)
    updateSelectedPiece(data.data);
    setRandomizedId(`${data.data['id']}`)
    setIsLoading(false);
  })
  .catch((response) => {
    setError(response || "failed to fetch collection!");
  });
}
////

return (
    <div className='search-page'>
      <h1>The Art Institute of Chicago Collection</h1>
      <h2 className="search-instructions">Enter a keyword to search from over 100,000 artworks:</h2>
    <SearchForm setError={setError} setIsLoading={setIsLoading} updateSearchResults={updateSearchResults}/>
    <Link to={`/artwork/${randomizedId}`}>
    <button className='random-btn' onClick={getRandomArtwork()}>random artwork</button>
    </Link>
      
  
     </div>
      )
}
 export default SearchWelcomePage
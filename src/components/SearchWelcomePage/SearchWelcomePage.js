import './SearchWelcomePage.css'
import SearchForm from '../SearchForm/SearchForm'
// import { fetchRandomArtwork } from '../../apiCalls';
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
function SearchWelcomePage({setError, setIsLoading, selectedPiece, updateSearchResults, updateSelectedPiece}){

  const [randomizedId, setRandomizedId] = useState("")
  
  const [randomNumString, setRandomNum] = useState("")
  const [randomNumberFetched, setRandomNumberFetched] = useState(false);

  function generateRandomNum() {
    const min = 0; 
    const max = 122737;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(()=>{
    const newRandomNum = generateRandomNum()
    const randomNumString = newRandomNum.toString()
    setRandomNum(randomNumString)
  }, [])
  console.log("randomNumString", randomNumString)

  // useEffect(() => {
  //   if (randomNumString) {
  //     setIsLoading(true);
  //     fetch(`https://api.artic.edu/api/v1/artworks?page=${randomNumString}&limit=1`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`Error ${response.status}: ${response.statusText}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("data", data);
  //         updateSelectedPiece(data.data);
  //         console.log("data.data[0].id", (data.data[0].id).toString());
  //         setRandomizedId((data.data[0].id).toString());
  //         setIsLoading(false);
  //         setRandomNumberFetched(true);
  //       })
  //       .catch((response) => {
  //         setError(response || "failed to fetch collection!");
  //       });
  //   }
  // }, [randomNumString]);


  function getRandomArtwork(){
    setIsLoading(true)
    console.log("hi")
   fetch(`https://api.artic.edu/api/v1/artworks?page=${randomNumString}&limit=1`)
      .then((response) => {
        console.log('response', response)
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
    .then((data)=>{
      console.log("data", data)
      updateSelectedPiece(data.data);
      console.log("data.data[0].id", (data.data[0].id).toString())
      setRandomizedId((data.data[0].id).toString())
      setIsLoading(false);
      setRandomNumberFetched(true);
    })
    .then(() => {
     console.log(randomizedId)
    })
    .catch((response) => {
      setError(response || "failed to fetch collection!");
    });
  }


return (
    <div className='search-page'>
      <h1>The Art Institute of Chicago Collection</h1>
      <h2 className="search-instructions">Enter a keyword to search from over 100,000 artworks:</h2>
    <SearchForm setError={setError} setIsLoading={setIsLoading} updateSearchResults={updateSearchResults}/>
    <Link to={`/random`}>
    <button className='random-btn' onClick={getRandomArtwork} disabled={randomNumberFetched}>random artwork</button>
    </Link>
      
  
     </div>
      )
}
 export default SearchWelcomePage
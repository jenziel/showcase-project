import './App.css';
import { Routes, Route } from "react-router-dom";
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import {  fetchSelectedArtwork, fetchSearchResults, fetchImageById } from '../../apiCalls';
import Header from '../Header/Header'
import {useState, useEffect} from 'react'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import ArtworkDetails from '../ArtworkDetails/ArtworkDetails'
import ArtworkCards from '../ArtworkCards/ArtworkCards';
import SearchWelcomePage from '../SearchWelcomePage/SearchWelcomePage'

function App() {
  const [newError, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [randomNum, setRandomNum] = useState(0)

  function generateRandomNum() {
    const min = 0; 
    const max = 122737;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  useEffect(() => {
    setRandomNum(generateRandomNum)
  })
  useEffect(() => {
    console.log("selectedPiece:", selectedPiece)
  }, [selectedPiece])
  
  function getArtworkById(id){
    fetchSelectedArtwork(id)
    .then((data)=>{
      console.log("data", data.data)
      setSelectedPiece(data.data);
      setIsLoading(false);
    })
    .catch((response) => {
      setError(response || "failed to fetch collection!");
    });
  }

  function getImageId(id){
    fetchImageById(id)
    .then((data)=>{
      console.log("data", data)
      setIsLoading(false);
    })
    .catch((response) => {
      setError(response || "failed to fetch collection!");
    });
  }
  useEffect(() => {
    console.log("newError:", newError)
  }, [newError])

  const resetError = () => {
    setError(null);
  };

  const resetLoading = () => {
    setIsLoading(false);
  };

  const updateSelectedPiece = (artObject) => {
    setSelectedPiece(artObject)
  }
  const updateSearchResults = (results, currentSearchQuery) => {
    setSearchResults(results);
    setSearchTerm(currentSearchQuery)
  };
  

  return (
    <div className="App">
      <Header />
      {newError? (
        <ErrorComponent newError={newError}
        resetError={resetError}
        resetLoading={resetLoading}/>
      ) : 
      isLoading ? (
        <LoadingComponent/> 
      ) : (
        <Routes>
          <Route path='/' 
          element={<SearchWelcomePage setIsLoading={setIsLoading} setError={setError} updateSearchResults={updateSearchResults} updateSelectedPiece={updateSelectedPiece} randomNum={randomNum}/>}/>
          <Route path='/search/:searchTerm' element={<SearchResults results={searchResults} getArtworkById={getArtworkById} getImageId={getImageId} setIsLoading={setIsLoading} setError={setError} updateSearchResults={updateSearchResults} searchTerm={searchTerm}/>}/>
           <Route path='artworks/:id' element={<ArtworkDetails selectedPiece={selectedPiece} searchTerm={searchTerm}/>}/>
           <Route
              path='*'
              element={
                <ErrorComponent
                  newError={newError}
                  resetError={resetError}
                  resetLoading={resetLoading}
                />}/>
        </Routes>
      )}
    
    </div>
  );
}

export default App;

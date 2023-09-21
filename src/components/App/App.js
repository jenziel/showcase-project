import './App.css';
import { Routes, Route } from "react-router-dom";
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { fetchCollection, fetchSelectedArtwork, fetchSearchResults, fetchImageById } from '../../apiCalls';
import Header from '../Header/Header'
import {useState, useEffect} from 'react'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import ArtworkDetails from '../ArtworkDetails/ArtworkDetails'
import ArtworkCards from '../ArtworkCards/ArtworkCards';

function App() {
  const [collection, setCollection] = useState([]);
  const [newError, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log("selectedPiece:", selectedPiece)
  }, [selectedPiece])
  // function getCollectionInfo(){
  //   fetchCollection()
  //   .then((data)=>{
  //     console.log("data", data.data[0])
  //     setCollection(data.data[0]);
  //     setIsLoading(false);
  //   })
  //   .catch((response) => {
  //     setError(response || "failed to fetch collection!");
  //   });
  // }

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

  // useEffect(()=>{
  //   getCollectionInfo()
  // }, [])

  const resetError = () => {
    setError(null);
  };

  const resetLoading = () => {
    setIsLoading(false);
  };

  const updateSelectedPiece = (artObject) => {
    setSelectedPiece(artObject)
  }
  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <Header />
      {/* {newError? (
        <ErrorComponent />
      ) :  */}
      {isLoading ? (
        <LoadingComponent/> 
      ) : (
        <Routes>
          <Route path='/' 
          element={<SearchForm setIsLoading={setIsLoading} setError={setError} updateSearchResults={updateSearchResults} />}/>
          <Route path='/search/:searchTerm' element={<SearchResults results={searchResults} getArtworkById={getArtworkById} getImageId={getImageId} setIsLoading={setIsLoading}/>}/>
           <Route path='artworks/:id' element={<ArtworkDetails selectedPiece={selectedPiece}/>}/>
           {/* <Route
              path='*'
              element={
                <ErrorComponent
                  message={newError}
                  resetError={resetError}
                  resetLoading={resetLoading}
                />}/> */}
        </Routes>
      )}
    
    </div>
  );
}

export default App;

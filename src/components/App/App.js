import './App.css';
import { Routes, Route } from "react-router-dom";
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { fetchCollection, fetchSelectedArtwork } from '../../apiCalls';
import Header from '../Header/Header'
import {useState, useEffect} from 'react'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import WelcomeSearchPage from '../SearchForm/SearchForm'

function App() {
  const [collection, setCollection] = useState([]);
  const [newError, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPiece, setSelectedPiece] = useState(null);

  function getCollectionInfo(){
    fetchCollection()
    .then((data)=>{
      console.log("data", data.data[0])
      setCollection(data.data[0]);
      setIsLoading(false);
    })
    .catch((response) => {
      setError(response || "failed to fetch collection!");
    });
  }

  useEffect(()=>{
    getCollectionInfo()
  }, [])

  const resetError = () => {
    setError(null);
  };

  const resetLoading = () => {
    setIsLoading(false);
  };
  return (
    <div className="App">
      <Header />
      {newError? (
        <ErrorComponent />
      ) : isLoading ? (
        <LoadingComponent/>
        
      ): (
        <Routes>
          <Route path='/' 
          element={<WelcomeSearchPage/>}/>
           <Route
              path='*'
              element={
                <ErrorComponent
                  message={newError}
                  resetError={resetError}
                  resetLoading={resetLoading}
                />}/>
        </Routes>
      )}
    
    </div>
  );
}

export default App;

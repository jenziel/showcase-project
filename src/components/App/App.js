import './App.css';
import { Routes, Route } from "react-router-dom";
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { fetchCollection, fetchSelectedArtwork } from '../../apiCalls';
import Header from '../Header/Header'
import {useState, useEffect} from 'react'

function App() {
  const [collection, setCollection] = useState([]);
  const [newError, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPiece, setSelectedPiece] = useState(null);

  function getCollectionInfo(){
    fetchCollection()
    .then((data)=>{
      setCollection(data);
      setIsLoading(false);
    })
    .catch((response) => {
      setError(response || "failed to fetch collection!");
    });
  }
  useEffect(()=>{
    getCollectionInfo()
  }, [])

  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
      </header> */}
      <LoadingComponent/>
    </div>
  );
}

export default App;

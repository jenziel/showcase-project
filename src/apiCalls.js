
function fetchSearchResults(query){
  return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=20`)
  // return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${query}`)
  // ?limit=100&page=100
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    console.log(query)
    return response.json();
  })
}

    function fetchSelectedArtwork(id){
    return fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
   .then((response) => {
     if (!response.ok) {
       throw new Error(`Error ${response.status}: ${response.statusText}`);
     }
     return response.json();
   })
 }
 
 function fetchImageById(id){
  return fetch(`https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  })
 }

 function fetchRandomArtwork(num){
  return fetch(`https://api.artic.edu/api/v1/artworks?page=${num}&limit=1`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  })
 }

    export {  fetchSearchResults, fetchSelectedArtwork, fetchImageById, fetchRandomArtwork }

    
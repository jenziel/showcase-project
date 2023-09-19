function fetchCollection (){
    return fetch('https://api.artic.edu/api/v1/artworks')
    .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
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
    export { fetchCollection, fetchSelectedArtwork }
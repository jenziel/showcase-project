import './ArtworkDetails.css'
import {useEffect, useState} from "react"

function ArtworkDetails({selectedPiece}){
    // const [bigImage, setBigImage] = useState("")
    // setBigImage(`https://www.artic.edu/iiif/2/${selectedPiece.image_id}/full/843,/0/default.jpg`)
    console.log("hi", selectedPiece)

//    useEffect(()=> {
//     console.log("hi2", selectedPiece)
//    }, [selectedPiece])
    return(
        <div>
            <img src={`https://www.artic.edu/iiif/2/${selectedPiece.image_id}/full/843,/0/default.jpg`}></img>
            <h1>Here are the details</h1>
            <p>artist:{selectedPiece.artist_title}</p>
            <p>year: {selectedPiece.date_display}</p>
            <p>medium: {selectedPiece.medium_display}</p>
            <p>country: {selectedPiece.place_of_origin}</p>
            <p>title: {selectedPiece.title}</p>
            <p>dimensions: {selectedPiece.dimensions}</p>
            <p></p>
            <p></p>
        </div>
    )
}
export default ArtworkDetails
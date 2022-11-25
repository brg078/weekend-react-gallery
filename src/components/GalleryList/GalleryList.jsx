// import react, { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
// import Axios from "axios";



function GalleryList (props) {


    return (

        <ul className="ul">

            {props.galleryDrill.map(gallery => 
            // (<li key={gallery.id}><img src={gallery.path}/><button id={gallery.id}>I love this!</button> This many people love this: {gallery.likes}</li>)
            (<GalleryItem key={gallery.id} gallery={gallery}/>)
            
            )}

            {/* (<GalleryItem />) */}
        </ul>
    );



}


export default GalleryList

// 
//  gallery={gallery}
import { useState } from "react";


function GalleryItem (gallery){

    const [isClicked, setIsClicked] = useState(false);

    return(
        <>

            <li key={gallery.gallery.id} onClick={() => setIsClicked(!isClicked)}>
            <img src={gallery.gallery.path}/><button id={gallery.gallery.id}>I love this!</button> This many people love this: {gallery.gallery.likes}
            {isClicked && <p>{gallery.gallery.description}</p>}

            </li>    
        
        </>
    )

}


export default GalleryItem;
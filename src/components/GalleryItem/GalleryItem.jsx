import { useState } from "react";
import './GalleryItem.css';
import Axios from "axios";

function GalleryItem ({image, fetchGallery}){

    const [isClicked, setIsClicked] = useState(false);

    function likeButton (data){

        console.log(data)
        Axios.put('/gallery/like/' + data)
        .then(res => {
            console.log('liked successfully');
            fetchGallery();
        })
        .catch(err => {console.log('error in axios.put:', err)
        });
    }    

    return(

        <>

            <li className="listitem" key={image.id} onClick={() => setIsClicked(!isClicked)}>
                {isClicked ? <p>{image.description}</p> : <p><img src={image.path}/></p>}         
            </li>    
            <button id={image.id} onClick={() => likeButton(image.id)}>I love this!</button> This many people love this: {image.likes}

        </>
    )

}


export default GalleryItem;
import { useState } from "react";
import './GalleryItem.css';
import Axios from "axios";

function GalleryItem (gallery){

    const [isClicked, setIsClicked] = useState(false);
    // const [setButton, setButtonClicked] = useState('')

    // function likeClicked(){

    //     console.log('Add a like to',gallery.gallery.id)

    //     // Axios.put('/gallery/like/' + gallery.gallery.id)
    //     // .then(res => {
    //     // console.log('liked successfully');
    //     // })
    //     // .catch(err => {
    //     // console.log('error in axios.put:', err);
    //     // })
    // }



    return(

        <>

            <li className="listitem" key={gallery.gallery.id} onClick={() => setIsClicked(!isClicked)}>
                {isClicked ? <p>{gallery.gallery.description}</p> : <p><img src={gallery.gallery.path}/></p>}         
            </li>    
            <button id={gallery.gallery.id} onClick={() => console.log(gallery.gallery.id)}>I love this!</button> This many people love this: {gallery.gallery.likes}

        </>
    )

}


export default GalleryItem;
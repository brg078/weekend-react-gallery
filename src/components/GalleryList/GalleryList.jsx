import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList (props) {

    return (
        <ul className="ul">
            {props.galleryDrill.map(
                gallery => 
                (<GalleryItem key={gallery.id} gallery={gallery}/>)
            )}
        </ul>
    );

}


export default GalleryList
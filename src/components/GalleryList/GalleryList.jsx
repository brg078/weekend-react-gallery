import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList (props) {

    // props.fetchGallery=fetchGallery

    return (
        <ul className="ul">
            {props.images.map(
                image => 
                (<GalleryItem
                    key={image.id}
                    image={image}
                    fetchGallery={props.fetchGallery}
                    />)
            )}
        </ul>
    );

}


export default GalleryList
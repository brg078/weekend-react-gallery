import React, {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios';


function App() {


  const [gallery, setGallery] = useState([]);


  useEffect( () => {                                      //Initial Page onLoad
    fetchGallery();
  }, [])


  const fetchGallery = () => {                            //GET(setGallery)

    Axios({
      method: 'GET',
      url: '/gallery'
    })
      .then( (response) => {
        console.log('Just the data:', response.data);
        setGallery(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  console.log('This is the gallery',gallery);






  return (
    <div className="App">

      <div className="header">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
      </div>

      <div className="gallery">
        {/* <p>test</p> */}
        <GalleryList galleryDrill={gallery}/>

      </div>





      {/* <p>{galleryList[0].id}</p>
      <p><img src={galleryList[0].path}></img></p> */}

      <div className="footer">
        <footer className="App-footer">
          <h1 className="noneyet">BRG</h1>
        </footer>
      </div>

    </div>
  
  
  
  );
  
}

export default App;

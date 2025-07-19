import React, { useState } from 'react';
import './Gallery.css';
import { GalleryList } from './Utils/Gallerylist';
import Zoom from 'react-reveal/Zoom';
import Bounce from "react-reveal/Bounce";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const handleViewMore = () => {
    setVisibleImages(GalleryList.length); 
  };

  return (
    <div className='gallery-container' id='gallery'>
      <h1> Gallery </h1>
      <div className='gallery-images'>
        <Zoom>      
        {GalleryList.slice(0, visibleImages).map((item) => (
          <img 
            key={item._id} 
            src={item.image} 
            alt={`Gallery Image ${item._id}`} 
            className='gallery-image'
          />
        ))}</Zoom>
      </div> 
      

      {visibleImages < GalleryList.length && (
        <Bounce>
        <button className='view-more-btn' onClick={handleViewMore}>
          View More
        </button></Bounce>
      )} 
    </div>
  );
};

export default Gallery;

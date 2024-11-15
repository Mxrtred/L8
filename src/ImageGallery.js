import React from 'react';
import './App.css';

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`Gallery image ${index + 1}`} />
      ))}
    </div>
  );
}

export default ImageGallery;
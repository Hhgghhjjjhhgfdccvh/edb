import React, { useState, useEffect } from 'react';
function Random() {
    const [photos, setPhotos] = useState([
      './images/arun.jpg',
      './images/img.jpg',
      './images/adc.jpg',
      // Add more image URLs here
    ]);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
    useEffect(() => {
      // Set up a timer to change the photo every 5 seconds
      const timer = setInterval(() => {
        // Generate a random index for the next photo
        const randomIndex = Math.floor(Math.random() * photos.length);
        setCurrentPhotoIndex(randomIndex);
      }, 5000); // Change photo every 5 seconds
  
      // Clear the timer when the component unmounts
      return () => clearInterval(timer);
    }, [photos]);
  
    return (
      <div className="random-photo-slider">
        <img
          src={photos[currentPhotoIndex]}
          alt={`Slide ${currentPhotoIndex + 1}`}
          className="slide"
        />
      </div>
    );
  }
  
  export default Random;
  
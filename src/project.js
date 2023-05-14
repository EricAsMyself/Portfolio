
import React, { useState } from 'react';
import "./styles.css";

function Project() {
  const [imageSize, setImageSize] = useState('100%');

  // Function to handle button click and shrink the image
  const shrinkImage = () => {
    setImageSize('50%'); // Set the new size of the image (e.g., 50%)
  };

  return (
      <div key={index} className='innerContainer'>
        <div className='overlayText'>{item.name}</div>
        <img src={item.image} alt="portfolio Picture" className='portImg'/>
      </div>
  );
}

export default Project;

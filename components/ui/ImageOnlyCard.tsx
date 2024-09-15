import React, { useState, useEffect } from 'react';

interface ImageOnlyCardProps {
  images: string[]; // Array of image URLs
  className?: string;
  interval?: number; // Interval for changing images in milliseconds
}

const ImageOnlyCard: React.FC<ImageOnlyCardProps> = ({ images, className = '', interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; 

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageInterval); 
  }, [images.length, interval]);

  return (
    <div className={`${className} relative`}>
      <img 
        src={images[currentImageIndex]} 
        alt="Card Image" 
        className='w-full h-full object-cover' 
      />
    </div>
  );
};

export default ImageOnlyCard;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageOnlyCardProps {
  images: string[]; 
  className?: string;
  interval?: number;
}

const ImageOnlyCard: React.FC<ImageOnlyCardProps> = ({ images, className = '', interval = 4000 }) => {
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
      <Image
        src={images[currentImageIndex]} 
        alt="Card Image" 
        className='w-full h-full object-cover' 
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageOnlyCard;

import React from 'react';

interface ImageOnlyCardProps {
    imageUrl: string;
    className?: string; 
}

const ImageOnlyCard: React.FC<ImageOnlyCardProps> = ({ imageUrl, className }) => {
    return (
        <div className={`${className}`}>
            <img src={imageUrl} alt="Card Image" className='w-full h-full object-contain' />
        </div>
    );
};

export default ImageOnlyCard;

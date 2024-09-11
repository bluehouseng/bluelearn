import React from 'react'

const CustomCard = ({ title, description, imageUrl }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray">
        {imageUrl && (
          <img className="w-full" src={imageUrl} alt={title} />
        )}
        <div className="pl-8 pr-7 py-16">
          <h2 className="font-bold w-72 mb-2">{title}</h2>
          <p className="w-90  text-[#282938] text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          
        </div>
      </div>
    );
  };
export default CustomCard

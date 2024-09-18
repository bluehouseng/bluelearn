"use client";
import Image from "next/image";
import { FaClock, FaVideo, FaUsers, FaStar } from "react-icons/fa";
import React from "react";


type CustomCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const CustomCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className=" p-4 w-96 rounded-md">
      {/* Image component (uncomment if using an image) */}
      {/* <Image 
        src={imageUrl} 
        alt={title} 
        width={500} 
        height={300} 
        className="rounded-md mb-4" 
      /> */}
      
      <h3 className="text-xl font-bold mt-2 text-start">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm text-start">{description}</p>

      <div className="flex justify-start text-xs mt-4">
        <div className="flex items-center mr-4">
          <FaClock className="mr-1" />
          <span>4 hours</span>
        </div>
        <div className="flex items-center mr-4">
          <FaVideo className="mr-1" />
          <span>32 videos</span>
        </div>
        <div className="flex items-center">
          <FaUsers className="mr-1" />
          <span>300 users</span>
        </div>
      </div>
      
      <div className="mt-4 text-start">
        <p className="text-xs">Reviews</p>
        <div className="flex items-center mt-1">
          <FaStar className="text-yellow-500 text-xs mr-1" />
          <FaStar className="text-yellow-500 text-xs mr-1" />
          <FaStar className="text-yellow-500 text-xs mr-1" />
          <FaStar className="text-yellow-500 text-xs mr-1" />
          <FaStar className="text-gray-300 text-xs mr-1" />
          <span className="text-xs ml-2">(4.0)</span>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;


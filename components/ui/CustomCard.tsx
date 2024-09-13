
"use client";
import Image from 'next/image';
import { FaClock, FaVideo, FaUsers } from 'react-icons/fa';
import React from 'react';

// Define a type for the props
type CustomCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const CustomCard: React.FC<CustomCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gray rounded-lg shadow-md p-2 w-96 ">
      <Image src={imageUrl} 
      alt={title} 
      width={500} 
      height={300} 
      className="rounded-md  " />
      <h3 className="text-xl font-bold mt-4 ">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>

      <div className="flex items-center justify-between text-xs mt-4 mx-2 ">
        <div className="flex items-center">
          <FaClock className="mr-1" />
          <span>4 hours</span>
        </div>
        <div className="flex items-center">
          <FaVideo className="mr-1" />
          <span>32 videos</span>
        </div>
        <div className="flex items-center">
          <FaUsers className="mr-1" />
          <span>300 users</span>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;


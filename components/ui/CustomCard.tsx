// import React from 'react'

// type Props = {
//   title: string,
//   description: string,
//   imageUrl: string
// }

// const CustomCard = ({ title, description, imageUrl }: Props) => {
//     return (
//       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray">
//         {imageUrl && (
//           <img className="w-full" src={imageUrl} alt={title} />
//         )}
//         <div className="pl-8 pr-7 py-16">
//           <h2 className="font-bold w-72 mb-2">{title}</h2>
//           <p className="w-90  text-[#282938] text-base">{description}</p>
//         </div>
//         <div className="px-6 pt-4 pb-2">
          
//         </div>
//       </div>
//     );
//   };
// export default CustomCard
// import Image from 'next/image';
// import { FaClock, FaVideo, FaUsers } from 'react-icons/fa';
// import React from 'react';

// const CustomCard = ({ imageUrl, title, description }) => {
//   return (
//     <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
//       <Image
//         src={imageUrl}
//         alt={title}
//         width={320}
//         height={200}
//         className="object-cover"
//       />
//       <div className="p-5">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4">{description}</p>

//         <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
//           <div className="flex items-center">
//             <FaClock className="mr-1" />
//             <span>4 hours</span>
//           </div>
//           <div className="flex items-center">
//             <FaVideo className="mr-1" />
//             <span>32 videos</span>
//           </div>
//           <div className="flex items-center">
//             <FaUsers className="mr-1" />
//             <span>300 users</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomCard;
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
    <div className="bg-gray rounded-lg shadow-md p-2 w-80 ">
      <Image src={imageUrl} alt={title} width={500} height={300} className="rounded-md" />
      <h3 className="text-xl font-bold mt-4 ">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>

      <div className="flex items-center justify-between text-xs mt-4 ">
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


// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Mousewheel, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         direction={'vertical'}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
// "use client"
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// function Mentors() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div className="w-full mt-16">
//       <div>
//         <h2>Meet Our Inatructors</h2>
//       </div>
//       <Swiper
//         direction={'vertical'}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className=" w-full "
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Mentors;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// function Mentors() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div className="w-full  mt-10 flex flex-col items-center justify-center">
//       <div className="mb-6 text-center">
//         <h2 className="text-4xl font-bold">Meet Our Instructors</h2>
//       </div>
//       <Swiper
//         direction={"vertical"}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="w-full h-[700px]"
//       >
//         <SwiperSlide  className="flex items-center justify-center  bg-gray-800 w-full ">
//           <video className="h-full w-full" controls>
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-300">
//           Slide 2
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-400">
//           Slide 3
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-500">
//           Slide 4
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-600">
//           Slide 5
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-700">
//           Slide 6
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-800">
//           Slide 7
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-900">
//           Slide 8
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-black text-white">
//           Slide 9
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Mentors;
// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// function Mentors() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div className="w-full mt-10 flex flex-col items-center justify-center">
//       <div className="mb-6 text-center">
//         <h2 className="text-4xl font-bold">Meet Our Instructors</h2>
//       </div>
//       <Swiper
//         direction={"vertical"}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="w-full "
//       >
//         <SwiperSlide className="flex items-center justify-center w-full">
//   <video
//     className="h-full w-full object-cover" 
//     controls
//   >
//     <source src="/video.mp4" type="video/mp4" />
//   </video>
// </SwiperSlide>

//         <SwiperSlide className="flex items-center justify-center bg-gray-300">
//           Slide 2
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-400">
//           Slide 3
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-500">
//           Slide 4
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-600">
//           Slide 5
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-700">
//           Slide 6
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-800">
//           Slide 7
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-gray-900">
//           Slide 8
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center bg-black text-white">
//           Slide 9
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Mentors;

"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Mentors() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full  mt-10 flex flex-col items-center justify-center">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold">Meet Our Instructors</h2>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="w-full h-full p-10" 
      >
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-cente">
        <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
        <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
        <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
        <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-700">
        <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-800">
        <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-900">
        <video
            className="h-[200px] w-[800px] object-cover" 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
        <video
            className="h-[200px] w-[800px] object-cover " 
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Mentors;


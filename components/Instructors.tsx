

// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// function Instructors() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div className="w-full  mt-10 flex flex-col items-center justify-center ">
//       <div className="mb-6 text-center">
//         <h2 className="text-4xl font-bold">Meet Our Instructors</h2>
//       </div>
//       <Swiper
//         direction={"vertical"}
//         slidesPerView={1}
//         spaceBetween={40}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="h-screen p-32" 
//       >
//         <SwiperSlide className="flex items-center justify-center w-full h-full  ">
//           <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>

//         <SwiperSlide className="flex items-center justify-cente">
//         <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//         <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//         <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//         <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//         <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//         <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//         <video
//             className=" object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide className="flex items-center justify-center">
//         <video
//             className=" object-cover " 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Instructors;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// function Instructors() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div className="w-full  flex flex-col items-center justify-center mt-10">
//       <div className="mb-6 text-center">
//         <h2 className="text-4xl font-bold">Meet Our Instructors</h2>
//       </div>
//       <Swiper
//         direction={"vertical"}
//         slidesPerView={1}
//         spaceBetween={40}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="w-full h-full" 
//       >
//         <SwiperSlide className="flex items-center justify-center w-full h-full">
//           <video
//             className="w-full h-full  object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>

//         <SwiperSlide className="flex items-center justify-center w-full h-full">
//           <video
//             className="w-full h-full object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>

//         <SwiperSlide className="flex items-center justify-center w-full h-full">
//           <video
//             className="w-full h-full object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>

//         <SwiperSlide className="flex items-center justify-center w-full h-full">
//           <video
//             className="w-full h-full object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>

//         <SwiperSlide className="flex items-center justify-center w-full h-full">
//           <video
//             className="w-full h-full object-cover" 
//             controls
//           >
//             <source src="/video.mp4" type="video/mp4" />
//           </video>
//         </SwiperSlide>

        
//       </Swiper>
//     </div>
//   );
// }

// export default Instructors;
"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Instructors() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold">Meet Our Instructors</h2>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={40}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        style={{
          width: '100%',
          height: '80vh', 
        }}
      >
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <video
            style={{
              width: '70%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <video
            style={{
              width: '70%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <video
            style={{
              width: '70%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <video
            style={{
              width: '70%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <video
            style={{
              width: '70%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Instructors;

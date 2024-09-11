

// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const Partners = () => {
//   return (
//     <div 
//       className="bg-[#EEF4FA] flex w-full p-4"
//       style={{ overflow: 'hidden' }} 
//     >
//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={5}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         style={{
//           width: '100%', 
//           height: '100px', 
//         }}
//       >
//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl bg-microsoft bg-no-repeat bg-cover bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-datadotorg bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-techsynergy bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-widb bg-black bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-ilo bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
          
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-unijos bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-openai bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
          
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-github bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <div 
//             className="font-bold h-full w-full text-2xl p-4 bg-koenig bg-no-repeat bg-contain bg-center"
//             style={{
//               width: '100%',
//               height: '100%', 
//             }}
//           >
            
//           </div>
//         </SwiperSlide>
        
//       </Swiper>
//     </div>
//   );
// };

// export default Partners;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Partners = () => {
  return (
    <div 
      className="bg-[#EEF4FA] flex w-full p-4"
      style={{ overflow: 'hidden' }} 
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl bg-microsoft bg-no-repeat bg-cover bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-datadotorg bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-techsynergy bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-widb bg-black bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-ilo bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
          
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-unijos bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-openai bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
          
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-github bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div 
            className="font-bold text-2xl p-4 bg-koenig bg-no-repeat bg-contain bg-center"
            style={{
              width: '100%',
              height: '100%', 
            }}
          >
            
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Partners;

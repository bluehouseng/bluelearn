"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Partners = () => {
  return (
    <div className="bg-[#EEF4FA]   flex w-full p-4">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        <SwiperSlide className=" ">
          <div className="font-bold  h-full w-full text-2xl bg-microsoft bg-no-repeat bg-cover bg-center">
            {"   "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="font-bold h-full w-full  text-2xl p-4   bg-datadotorg bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center px-4">
          <div className="font-bold h-full w-full  text-2xl p-4  bg-techsynergy bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center">
          <div className="font-bold h-full w-full  text-2xl p-4  bg-widb bg-black bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center">
          <div className="font-bold h-full w-full  text-2xl p-4  bg-ilo bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center">
          <div className="font-bold h-full w-full  text-2xl p-4  bg-unijos bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center">
          <div className="font-bold h-full w-full  text-2xl p-4  bg-openai bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center">
          <div className="font-bold h-full w-full  text-2xl p-4  bg-github bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center items-center">
          <div className="font-bold h-full w-full  text-2xl p-4  bg-koenig bg-no-repeat bg-contain bg-center">
            {"  "}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="bg-gray-400 flex justify-center items-center">
          <p className="font-bold text-2xl">Microsoft</p>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Partners;

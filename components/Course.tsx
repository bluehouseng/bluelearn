"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomCard from "@/components/ui/CustomCard";

function Course() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null
  }

  return (

<div className="w-full flex flex-col items-center justify-center mt-10">
  <div className="mb-6 text-center">
    <h2 className="text-4xl font-bold"> Our Courses</h2>
  </div>
  <div className="relative w-full">
    <Swiper
      direction={"horizontal"}
      slidesPerView={1}
      spaceBetween={40}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      modules={[Mousewheel, Pagination, Navigation]}
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
        <CustomCard
          imageUrl={"/customCardsvg/unsplash_m_HRfLhgABo.svg"}
          title={"Basic WEB Programming"}
          description={
            "Learning materials on creating websites for beginners"
          }
        />
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
        <CustomCard
          imageUrl={"/customCardsvg/pexels-lukas-590016 1.svg"}
          title={"Digital Marketing 101"}
          description={
            "Materials on marketing strategies and concepts for beginners"
          }
        />
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
        <CustomCard
          imageUrl={"/customCardsvg/pexels-olya-kobruseva-5561923 1.svg"}
          title={"Fundamentals of Data Science"}
          description={"Learning materials on the basics of data science"}
        />
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
        <CustomCard
          imageUrl={"/customCardsvg/unsplash_m_HRfLhgABo.svg"}
          title={"Basic WEB Programming"}
          description={
            "Learning materials on creating websites for beginners"
          }
        />
      </SwiperSlide>
    </Swiper>

    {/* Left Navigation Button */}
    <div className="swiper-button-prev absolute  top-1/2 transform -translate-y-1/2 z-10 rounded-full p-3 cursor-pointer text-4xl">
  
</div>

{/* Right Navigation Button */}
<div className="swiper-button-next absolute  top-1/2 transform -translate-y-1/2 z-10 rounded-full p-3 cursor-pointer text-4xl">
  
</div>

  </div>
</div>

  );
}

export default Course;


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
    <div className="w-full flex flex-col items-center justify-center my-20">
      <div className="mb-10 text-center">
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
          width: "100%",
          height: "80vh",
        }}
      >
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <video
            style={{
              width: "70%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
            muted
            loop
            autoPlay
          >
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <video
            style={{
              width: "70%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
            muted
            loop
            autoPlay
          >
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <video
            style={{
              width: "70%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
            muted
            loop
            autoPlay
          >
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <video
            style={{
              width: "70%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
            muted
            loop
            autoPlay
          >
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <video
            style={{
              width: "70%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
            muted
            loop
            autoPlay
          >
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Instructors;

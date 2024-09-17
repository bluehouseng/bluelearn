"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomCard from "@/components/ui/CustomCard";
import ImageOnlyCard from "./ui/ImageOnlyCard";
import AnimatedComponent from "./common/AnimatedScrollComponent";
import AnimatedTitle from "./common/AnimatedTitle";

function Course() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mb-6 flex flex-col items-center gap-1.5 text-center">
        <AnimatedTitle title="Our Courses" styles={"text-4xl font-semibold"} />
        <AnimatedTitle title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod enim similique vel, incidunt odio." styles={"text-lg w-2/3 text-gray-700"} />
        

      </div>
      <AnimatedComponent id="course">
        <div className="relative w-full">
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            spaceBetween={40}
            mousewheel={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Mousewheel, Pagination, Navigation]}
            style={{
              width: "100%",
              height: "80vh",
            }}
          >
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "100%",
              }}
            >
              <CustomCard
                imageUrl={"/customCardsvg/unsplash_m_HRfLhgABo.svg"}
                title={"Basic WEB Programming"}
                description={
                  "Learn web development basics. Create websites from scratch and build a solid foundation in web design."
                }
              />
              <ImageOnlyCard
                images={[
                  "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726352882/CYF_0288_quqwvp.jpg",
                ]}
                className="w-1/2 p-5"
              />
            </SwiperSlide>

            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "100%",
              }}
            >
              <CustomCard
                imageUrl={"/customCardsvg/pexels-lukas-590016 1.svg"}
                title={"Digital Marketing 101"}
                description={
                  "Explore digital marketing strategies. Perfect for beginners to learn effective online marketing techniques."
                }
              />
              <ImageOnlyCard
                images={[
                  "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726352896/CYF_0341_umqchd.jpg",
                ]}
                className="w-1/2 p-5"
              />
            </SwiperSlide>

            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "100%",
              }}
            >
              <CustomCard
                imageUrl={"/customCardsvg/pexels-olya-kobruseva-5561923 1.svg"}
                title={"Data Analytics"}
                description={
                  "Understand the fundamentals of data analytics and gain key insights into data science."
                }
              />
              <ImageOnlyCard
                images={[
                  "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726352891/CYF_0324_i0vmc4.jpg",
                ]}
                className="w-1/2 p-5"
              />
            </SwiperSlide>

            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "100%",
              }}
            >
              <CustomCard
                imageUrl={"/customCardsvg/unsplash_m_HRfLhgABo.svg"}
                title={"Cyber Security"}
                description={
                  "Explore basic concepts of cyber security to safeguard your digital presence."
                }
              />
              <ImageOnlyCard
                images={[
                  "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726352886/CYF_0358_wuan33.jpg",
                ]}
                className="w-1/2 p-5"
              />
            </SwiperSlide>
          </Swiper>

          {/* Left Navigation Button */}
          <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 z-10 rounded-full p-3 cursor-pointer text-4xl "></div>

          {/* Right Navigation Button */}
          <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 z-10 rounded-full p-3 cursor-pointer text-4xl "></div>
        </div>
      </AnimatedComponent>
    </div>
  );
}

export default Course;

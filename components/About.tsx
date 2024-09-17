"use client";
import { motion } from "framer-motion";
import React from "react";
import ImageOnlyCard from "./ui/ImageOnlyCard";
import useInView from "@/hooks/useInView";
import AnimatedTitle from "./common/AnimatedTitle";

function About() {

  const { ref, isInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="flex justify-center items-center md:h-screen mt-10 mb-20 py-6">
      <div className="flex flex-col gap-6 md:flex-row justify-center items-center space-x-16 px-6 md:px-20 ">
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold text-[#1A6BA6]">About Our Community</h2>
          <p className="font-semibold text-2xl md:text-3xl md:leading-normal mt-2">
            We’ve empowered over 1000 individuals across Africa to upskill,
            secure internships, and land remote jobs.
          </p>
          <p className="mt-4 text-lg">
            Our vibrant community is dedicated to helping you advance your
            career or explore new passions. With access to essential tools,
            resources, and a supportive network, Blulearn provides everything
            you need to succeed.
          </p>
          <div className="flex w-full gap-6 mt-6">
            <motion.button
              className="py-2 md:py-3 px-10 md:text-lg flex items-center justify-center text-white rounded bg-[#1A6BA6]"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#007BFF",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Learn More!
            </motion.button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {/* <video
            width="800"
            height="1000"
            className="h-full w-full rounded-lg"
            controls
            autoPlay
            loop
            muted
          >
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video> */}
          {/* <ImageOnlyCard
            images={[
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357542/CYF_3559_m8xtj8.jpg",
              // "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726358169/CYF_6745_lg2yvs.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357544/CYF_3536_ryusrf.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357544/CYF_3548_d8oulg.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357542/CYF_0238_vl4ef5.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357540/CYF_3557_maeocr.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726358171/CYF_6617._bak4dh.jpg",
            ]}
              
          /> */}
          <img src="/images/about.png" alt="" className="w-full rounded-xl" />

        </div>
      </div>
    </div>
  );
}
export default About;

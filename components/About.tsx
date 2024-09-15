"use client";
import { motion } from "framer-motion";
import React from "react";
import ImageOnlyCard from "./ui/ImageOnlyCard";

function About() {
  return (
    <div className="flex justify-center items-center h-screen  bg-secondary mb-20">
      <div className="flex justify-center space-x-16 h-1/2 mx-20 ">
        <div className="w-1/2">
          <h2 className="text-lg font-bold">About Our Community</h2>
          <p className="font-semibold text-3xl mt-4">
            We’ve empowered over 1000 individuals across Africa to upskill,
            secure internships, and land remote jobs.
          </p>
          <p className="text-sm font-semibold mt-4">
            Our vibrant community is dedicated to helping you advance your
            career or explore new passions. With access to essential tools,
            resources, and a supportive network, Blulearn provides everything
            you need to succeed.
          </p>
          <div className="flex gap-6 mt-6">
            <motion.button
              className="md:py-2 py-3 px-8 md:text-xl flex items-center justify-center bg-primary text-white rounded-md border-none"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#007BFF",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Apply Now
            </motion.button>
          </div>
        </div>

        <div className="w-1/2">
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
          <ImageOnlyCard
            images={[
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357542/CYF_3559_m8xtj8.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726358169/CYF_6745_lg2yvs.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357544/CYF_3536_ryusrf.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357544/CYF_3548_d8oulg.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357542/CYF_0238_vl4ef5.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726357540/CYF_3557_maeocr.jpg",
              "https://res.cloudinary.com/dr2ipw7nb/image/upload/v1726358171/CYF_6617._bak4dh.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default About;

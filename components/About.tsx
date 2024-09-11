/* eslint-disable react/no-unescaped-entities */
import React from "react";

function About() {
  return (
   
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#2E3192] to-[ #1BFFFF]  mb-20">
  <div className="flex justify-center space-x-6 h-1/2">
    <div className="w-1/3 mt-16">
      <h2 className="text text-center text-white">About us</h2>
      <p className="font-semibold text-3xl text-center text-white">
        We've helped 1000+ across Africa upskill, get internship roles and
        land remote jobs.
      </p>
    </div>
    <div className="w-1/2">
      {/* <Image
        src="/video.png"
        alt=""
        width={500}
        height={500}
        className="h-full w-10/12"
      /> */}
      <video
    width="500"
    height="500"
    className="h-full w-10/12"
    controls
  >
    <source src="/video.mp4" type="video/mp4" />
    
  </video>
    </div>
  </div>
</div>

  );
}
export default About;

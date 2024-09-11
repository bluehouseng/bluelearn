/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="flex justify-center items-center  h-screen bg-secondary mb-20">
      <div className="flex justify-center space-x-6 h-1/2">
        <div className="w-1/3 mt-36">
          <h2 className="text text-center">About us</h2>
          <p className="font-bold text-3xl text-center">
            We've helped 1000+ across Africa upskill, get internship roles and
            land remote jobs.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/video.png"
            alt=""
            width={500}
            height={500}
            className="h-full w-10/12"
          />
        </div>
      </div>
    </div>
  );
}
export default About;

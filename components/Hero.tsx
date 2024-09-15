'use client'
import React from "react";
import UnderlineElipse from "./common/icons/UnderlineElipse";
import { motion } from "framer-motion";
import AnimatedComponent from "./common/AnimatedScrollComponent";

const Hero = () => {
  return (
   <AnimatedComponent id="hero">
     <div className="h-screen bg-laptop_boy bg-cover bg-no-repeat bg-center relative">
      <div className="flex items-center px-4 md:px-20  py-16 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-cyan-200/10">
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="relative p-3 md:p-0 text-3xl md:text-5xl font-bold md:leading-[75px] text-white bg-primary/20 text-center rounded-lg">
            Helping Africans Upskill and Land Remote Jobs in Europe.
            <span className="hidden md:flex absolute top-16 right-40">
              {" "}
              <UnderlineElipse />{" "}
            </span>
          </h1>

          <p className="text-xl w-[90%] text-white">
            {" "}
            <span className="md:font-semibold text-white">*</span> Empowerment |
            Inclusivity | Global Connectivity
          </p>

          <div className="flex gap-6">
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.7 }}
              className="md:py-4 py-3 px-8 md:text-xl flex items-center justify-center bg-primary text-white rounded-md hover:bg-secondary md:font-bold border-none"
            >
              Apply Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
    </AnimatedComponent>
  );
};

export default Hero;

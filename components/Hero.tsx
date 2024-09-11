import React from "react";
import UnderlineElipse from "./common/icons/UnderlineElipse";

const Hero = () => {
  return (
    <div className="  h-screen bg-laptop_boy bg-cover bg-no-repeat relative">
      <div className="flex items-center px-20  py-16 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-cyan-200/10">
        <div className="w-1/2 flex flex-col gap-6">
          <h1 className="relative text-5xl font-bold leading-[75px] text-white bg-primary/20 text-center rounded-lg">
            Helping Africans Upskill and Land Remote Jobs in Europe.
            <span className="absolute top-16 right-40">
              {" "}
              <UnderlineElipse />{" "}
            </span>
          </h1>

          <p className="text-xl w-[90%] text-white">
            {" "}
            <span className="font-semibold text-white">*</span> Empowerment |
            Inclusivity | Global Connectivity
          </p>

          <div className="flex gap-6">
            <button className=" p-4 px-8 text-xl flex items-center justify-center bg-primary text-white rounded-md hover:bg-secondary font-bold border-none">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

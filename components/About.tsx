import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className=" mx-10 pt-[13%]  flex justify-between ">
      <div className="w-2/5 mt-20">
        <h2 className="text-xs">About us</h2>
        <p className="text-3xl font-bold mt-6">
            Bluelearn Free E-Learning Service To Help You Grow
        </p>
        
        </div>
        <div className="">
        <Image src="/video.png" alt="" width={550} height={500} />
        </div>
    </div>
  );
}
export default About;

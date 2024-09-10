import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className=" mx-10 mt-20  flex space-x-4">
      <div className="w-2/5 mt-16">
        <h2 className="text-xs">About us</h2>
        <p className="font-semibold text-2xl mt-6">
            Bluelearn Free E-Learning Service To Help You Grow
        </p>
        
        </div>
        <div className="pl-32">
        <Image src="/video.png" alt="" width={500} height={500} />
        </div>
    </div>
  );
}
export default About;

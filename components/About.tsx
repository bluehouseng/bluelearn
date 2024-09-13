
import React from "react";
import UnderlineElipse from "./common/icons/UnderlineElipse";

function About() {
  return (
   
    <div className="flex justify-center items-center h-screen  bg-secondary">
  <div className="flex justify-center space-x-6 h-1/2 mx-32">
    <div className="w-1/2 mt-10">
      <h2 className=" ">
        About us
        <span className="hidden  absolute top-16 right-40">
              {" "} 
              <UnderlineElipse />{" "}
            </span>
      </h2>
     
      <p className="font-semibold text-3xl mt-8 ">
        We've helped 1000+ across Africa upskill, get internship roles and
        land remote jobs.
      </p>
      <p className="text-sm font-semibold  mt-10 ">
      Whether you're upskilling for your career or exploring new passions,  Blulearn offers the tools and resources you need to thrive.
      </p>
    </div>
    <div className="w-1/2">
      
      <video
    width="500"
    height="500"
    className="h-full w-full"
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


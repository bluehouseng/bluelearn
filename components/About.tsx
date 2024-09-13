
import React from "react";
import UnderlineElipse from "./common/icons/UnderlineElipse";

function About() {
  return (
    <div className="flex justify-center items-center h-screen  bg-secondary mb-20">
      <div className="flex justify-center space-x-16 h-1/2 mx-20 ">
        <div className="w-1/2 mt-16">
          <h2 className="text-lg   ">About us</h2>
          <p className="font-semibold text-3xl  mt-6">
            We've helped 1000+ across Africa upskill, get internship roles and
            land remote jobs.
          </p>
          <p className="text-sm font-semibold mt-6">
          Whether you're upskilling for your career or exploring new passions, Blulearn offers the tools and resources you need to thrive.
          </p>
        </div>
        <div className="w-1/2">
       
          <video width="500" height="500" className="h-full w-10/12 rounded-lg" controls autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
export default About;


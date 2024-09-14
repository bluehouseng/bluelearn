
import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center h-screen  bg-secondary my-20">
      <div className="flex justify-center space-x-16 h-1/2 mx-20 ">
        <div className="w-1/2 mt-2">
          <h2 className="text-lg   ">About us</h2>
          <p className="font-semibold text-3xl  mt-4">
            We've helped 1000+ across Africa upskill, get internship roles and
            land remote jobs.
          </p>
          <p className="text-sm font-semibold mt-4">
          Whether you're upskilling for your career or exploring new passions, Blulearn offers the tools and resources you need to thrive.
          </p>
          <div className="flex gap-6 mt-6">
            <button className="md:py-2 py-3 px-8 md:text-xl flex items-center justify-center bg-primary text-white rounded-md hover:bg-secondary md:font-bold border-none">
              Apply Now
            </button>
          </div>
        </div>
        {/* <div className="w-1/2">
       
          <video width="500" height="500" className="h-full w-10/12 rounded-lg" controls autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4"
              type="video/mp4"
            />
          </video>
        </div> */}
        <div className="w-1/2"> 
  <video 
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
  </video>
</div>

      </div>
    </div>
  );
}
export default About;


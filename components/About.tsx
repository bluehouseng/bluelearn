import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center h-screen  bg-secondary my-20">
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
            <button className="md:py-2 py-3 px-8 md:text-xl flex items-center justify-center bg-primary text-white rounded-md hover:bg-white hover:text-primary md:font-bold border-none">
              Apply Now
            </button>
          </div>
        </div>

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

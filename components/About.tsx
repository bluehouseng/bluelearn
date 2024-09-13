
import React from "react";
import UnderlineElipse from "./common/icons/UnderlineElipse";

function About() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#FBB03B] to-[ #DECBA4] bg-secondary mb-20">
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
          <video width="500" height="500" className="h-full w-10/12" controls autoPlay loop muted>
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


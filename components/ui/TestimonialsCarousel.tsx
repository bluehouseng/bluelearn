"use client";

import React, { useState, useEffect } from "react";

type Testimonial = {
  text: string;
  image: string;
  user: string;
  role: string;
};

const testimonialsData: Testimonial[] = [
  {
    text: "The material presented is easy to understand, the quality of the instructors is excellent, and their response is quick. So, I highly recommend the courses here!!",
    image: "/svg/woman-writing-on-paper-3228878.svg", // replace with actual image path
    user: "Andrew Festus",
    role: "CEO/HOC",
  },
  {
    text: "Blulearn has really helped me in understanding complex concepts easily and quickly!",
    image: "/blog1.png",
    user: "Jane Doe",
    role: "Student",
  },
  // Add more testimonials here
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { text, image, user, role } = testimonialsData[currentIndex];

  return (
    <div className="w-full h-auto py-10 px-4 bg-[#EEF4FA] border border-gray-300 rounded-lg">
      {/* Main Content */}
      <div className="flex justify-between items-start gap-2"> {/* Reduced space */}
        {/* Left Section (Static Text) */}
        <div className="w-1/2 text-left">
          <h2 className="text-2xl font-bold pb-4">Testimonials</h2>
          <p className="text-gray-500">
            Blulearn has been trusted by more than 10,000 students
          </p>
        </div>

        {/* Right Section (Changing Testimonial) */}
        <div className="w-1/2 flex flex-col items-end space-y-4">
          {/* Testimonial Content */}
          <div className="max-w-lg text-right">
            <p className="italic text-gray-700 mb-4">{`"${text}"`}</p>
            <p className="font-bold">{user}</p>
            <p className="text-gray-500">{role}</p>
          </div>

          {/* Image + Dots Navigation */}
          <div className="flex items-center justify-end space-x-24"> {/* Increased space between image and circles */}
            {/* Image */}
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
              <img
                src={image}
                alt={user}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dots Navigation */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;

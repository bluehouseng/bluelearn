import React from "react";

function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen   w-full "> 
      <div className="flex justify-center   rounded-lg  w-full"> 
        <div className="relative max-w-lg flex-1">
          <img
            src="/svg/woman-writing-on-paper-3228878.svg"
            alt="Woman writing"
            className="opacity-95 w-[550px] h-auto"
          />
          <div className="absolute inset-0 flex flex-col justify-start items-start text-white text-left p-6 bg-[#1C1E5399] pl-12">
            <p className="text-3xl font-semibold max-w-[18rem] pt-20 pb-8">
              One Step Closer to Your Dreams
            </p>
            <p className="text-[13.7px] mt-10 w-10/12">
              A free E-Learning service ready to help you become an expert.
            </p>
          </div>
        </div>
        <div className="relative max-w-lg flex-1 bg-[#2489D3]  text-white flex items-center justify-center">
         

        
          <div className="max-w-md w-3/4 mx-auto p-4  rounded-lg shadow-lg ">
  <p className="text-2xl font-semibold mb-2 text-white">Register Yourself!</p>
  <p className="text-sm mb-6 text-gray-300">Prepare yourself for a future full of stars</p>
  <form action="" className="flex flex-col space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="p-3 bg-transparent text-white  placeholder-gray-400 border border-gray-400 rounded focus:outline-none focus:ring-2 "
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="p-3 bg-transparent text-white placeholder-gray-400  border  border-gray-400 rounded focus:outline-none focus:ring-2 "
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      className="p-3 bg-transparent text-white placeholder-gray-400 border  border-gray-400 rounded focus:outline-none focus:ring-2 "
      required
    />
    <button
      type="submit"
      className="p-3 bg-[#F0C932] text-white rounded hover:bg-[#d4b800] transition duration-200"
    >
      Register
    </button>
  </form>
</div>

        </div>
      </div>
    </div>
  );
}

export default ContactForm;

import React from "react";

function ContactForm() {
  return (
    <div className="flex p-8 space-x-0"> 
      <div className="relative max-w-lg flex-1"> 
        <img
          src="/svg/woman-writing-on-paper-3228878.svg"
          alt="Woman writing"
          className="opacity-95 w-[550px] h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start text-white text-left p-6 bg-[#1C1E5399] pl-12">
          <p className="text-3xl font-semibold max-w-[18rem] pt-8 pb-8">
            One Step Closer to Your Dreams
          </p>
          <p className="text-[17px] mt-4">
            A free E-Learning service ready to help you become an expert.
          </p>
        </div>
      </div>
      <div className="relative max-w-lg flex-1 bg-[#2489D3] p-6 text-white">
        <p className="text-xl font-semibold mb-2">Register Yourself!</p>
        <p className="text-md mb-4">Prepare yourself for a future full of stars</p>
        <form action="" className="flex flex-col space-y-4"> {/* Added space-y-4 for spacing between form elements */}
          <input
            type="text"
            name="Your Name"
            placeholder="Your Name"
            className="p-4 bg-transparent text-white placeholder-opacity-80 border border-white rounded w-full"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="p-4 bg-transparent text-white placeholder-opacity-80 border border-white rounded w-full"
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            className="p-4 bg-transparent text-white placeholder-opacity-80 border border-white rounded w-full"
          />
          <button
            type="submit"
            className="p-4 bg-[#F0C932] text-white rounded hover:bg-[#d4b800]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

import React from "react";

function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full py-20 bg-gray-100">
        <div className="flex w-full max-w-[60rem] shadow-custom-light ">
        {/* Image Section */}
        <div className="relative flex-1 rounded-l-lg  overflow-hidden">
          <img
            src="/svg/woman-writing-on-paper-3228878.svg"
            alt="Woman writing"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-start items-start text-white text-left p-6 bg-[#1C1E5399] pl-12">
            <p className="text-3xl font-semibold max-w-md pt-20 pb-8">
              Revolutionize Your Learning Journey
            </p>
            <p className="text-sm mt-10 max-w-xs">
              Unlock the potential of cutting-edge E-Learning technology. Prepare for a future where you lead the way with expertise and innovation.
            </p>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="relative flex-1 bg-[#2489D3] text-white flex items-center justify-center rounded-r-lg ">
          <div className="max-w-md w-3/4 mx-auto p-4">
            <p className="text-2xl font-semibold mb-2">
              Express Your Interest!
            </p>
            <p className="text-sm mb-6 text-gray-300">
              Fill out the form below to let us know you're interested. We'll keep you updated with the latest information and opportunities.
            </p>
            <form action="" className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 bg-transparent text-white placeholder-gray-400 border border-gray-400 rounded focus:outline-none focus:ring-2"
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 bg-transparent text-white placeholder-gray-400 border border-gray-400 rounded focus:outline-none focus:ring-2"
                required
                aria-label="Email"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-3 bg-transparent text-white placeholder-gray-400 border border-gray-400 rounded focus:outline-none focus:ring-2"
                required
                aria-label="Password"
              />
              <button
                type="submit"
                className="p-3 bg-[#F0C932] text-white rounded hover:bg-[#d4b800] transition duration-200"
              >
                Register Interest
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

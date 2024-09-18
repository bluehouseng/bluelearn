import { Montserrat } from "next/font/google";
import React from "react";
import ElipseIcon from "./icons/ElipseIcon";

const monsterat = Montserrat({
  subsets: ["latin"],
});

const Nav = () => {
  return (
    <nav className="w-full bg-white h-[55px] px-20 md:h-[90px] flex items-center sticky top-0 z-20 border shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative flex pr-4">
          <h2
            className={`${monsterat.className} text-xl md:text-[28px] font-bold text-primary `}
          >
            Blulearn
          </h2>
          <span className="absolute bottom-1 right-1">
            <ElipseIcon />
          </span>
        </div>

        <div className="hidden md:flex items-center gap-20">
          <ul className="flex text-primary gap-10 relative py-2 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Academy</li>
            <li className="flex gap-1 items-center">
              Blog
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
              </svg>

            </li>

            {/* <span className="absolute bottom-0 left-0">
              <YellowElipse />
            </span> */}
          </ul>

          <div className="flex gap-6">
            <button className="px-8 py-3 flex items-center justify-center text-primary border border-primary rounded">
              Login
            </button>
            <button className="px-6 py-3 flex items-center justify-center bg-primary text-white rounded">
              Apply Now!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

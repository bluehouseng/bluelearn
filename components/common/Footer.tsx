import { Montserrat } from "next/font/google";
import React from "react";
import ElipseIcon from "./icons/ElipseIcon";

type Props = {};
const monsterat = Montserrat({
  subsets: ["latin"],
});
function Footer(prop: Props) {
  return (
    <footer>
      <section className="bg-primary w-full pt-12">
        <div className="container mx-auto flex justify-between h-[340px] sm:w-full flex-col sm:flex-row">
          <aside className="flex flex-col justify-between w-full sm:w-1/2">
            <div className="space-y-4 px-4 sm:px-0">
              <div className="relative w-36 ">
                <h2
                  className={`${monsterat.className} text-[28px] font-bold text-white`}
                >
                  Blulearn
                </h2>
                <span className="absolute bottom-2.5 right-2">
                  <ElipseIcon />
                </span>
              </div>
              <p className="text-white w-96 text-[16px] font-thin">
                Build and realize dreams with BluLearn, the edtech platform
                empowering learners and creators.
              </p>
            </div>
            <div className="rounded-t-md bg-secondary flex flex-col sm:flex-row px-4 sm:px-8 py-4 w-full sm:w-[420px] justify-between">
              <div className="w-full sm:w-1/2 space-y-2">
                <h3 className="font-bold">Email</h3>
                <p className="text-sm">info@bluehouseng.com</p>
              </div>
              <div className="w-full sm:w-1/2 space-y-2">
                <h3 className="font-bold">Phone</h3>
                <p className="text-sm">+234 803 000 0000</p>
              </div>
            </div>
          </aside>
          <aside className="w-1/2 flex flex-col sm:flex-row sm:flex-wrap justify-evenly">
            <div className="space-y-6">
              <h3 className="text-white text-[20px] font-medium">Social Media</h3>
              <ul className="text-white text-sm space-y-2 cursor-pointer">
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-white text-[20px] font-medium">Programs</h3>
              <ul className="text-white text-sm space-y-2 cursor-pointer">
                <li>Independent Learning</li>
                <li>Entrepreneurship</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-white text-[20px] font-medium">Quick Links</h3>
              <ul className="text-white text-sm space-y-2 cursor-pointer">
                <li>Blog</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section className="text-center py-4">
        <p className="text-lg">© Bluelearn 2024</p>
      </section>
    </footer>
  );
}

export default Footer;

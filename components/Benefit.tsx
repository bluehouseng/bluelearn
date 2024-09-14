import React from "react";

import Image from "next/image";

function Benefit() {
  return (
    <div className="w-full my-20">
      <div className="flex justify-center ">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">Why Bluelearn?</h1>
      </div>
      <div className="mx-10 grid grid-cols-1 md:grid-cols-3  mt-10 gap-6 ">
        <div className="bg-[#F4F6FC] p-16 steps-card flex flex-col">
          <Image src="/one.png" alt="" width={40} height={40} />
          <div className="">
            <h2 className="font-bold mt-4 ">Free Courses</h2>
            <p className="mt-2 text-xs">
              We provide several free courses to support the availability of
              education for underprivileged communities.
            </p>
          </div>
          <Image
            src="/one.png"
            alt="image"
            className="steps-card-image absolute right-0 bottom-0"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-[#F4F6FC] p-16 steps-card">
          <Image src="/two.png" alt="" width={40} height={40} />
          <div className="">
            <h2 className="font-bold mt-4 ">Access Forever</h2>
            <p className="text-xs mt-2">
              All courses that you have registered can be accessed forever so
              that your learning is more comfortable and not rushed
            </p>
          </div>
          <Image
            src="/two.png"
            alt="image"
            className="steps-card-image absolute right-0 bottom-0"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-[#F4F6FC] p-16 steps-card">
          <Image src="/three.png" alt="" width={40} height={40} />
          <div className="">
            <h2 className="font-bold mt-4 ">Mentoring Sessions</h2>
            <p className="text-xs mt-2">
              Mentoring Sessions There is are mentoring sessions that are useful
              if you want to ask a questions and you can also start a new
              discussion.
            </p>
          </div>
          <Image
            src="/three.png"
            alt="image"
            className="steps-card-image absolute right-0 bottom-0"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-[#F4F6FC] p-16 steps-card">
          <Image src="/four.png" alt="" width={40} height={40} />
          <div className="">
            <h2 className="font-bold mt-4 ">Certificates and Portfolio</h2>
            <p className="text-xs mt-2">
              After completing the course, you will receive a certificate as
              well as a portfolio from the course projects that have been
              completed.
            </p>
          </div>
          <Image
            src="/four.png"
            alt="image"
            className="steps-card-image absolute right-0 bottom-0"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-[#F4F6FC] p-16 steps-card">
          <Image src="/five.png" alt="" width={40} height={40} />
          <div className="">
            <h2 className="font-bold mt-4 ">More Directed Learning</h2>
            <p className="text-xs mt-2">
              The course provides classes from basic to expert levels so that
              everyone can learn with the services we provide.
            </p>
          </div>
          <Image
            src="/five.png"
            alt="image"
            className="steps-card-image absolute right-0 bottom-0"
            width={50}
            height={50}
          />
        </div>
        <div className="bg-[#F4F6FC] p-16 steps-card">
          <Image src="/six.png" alt="" width={40} height={40} />
          <div className="">
            <h2 className="font-bold mt-4 ">Experience Mentors</h2>
            <p className="text-xs mt-2">
              Mentoring Sessions Experienced Mentors We have experienced mentors
              taken from the industry world whose experience is undoubtedly
              unquestionable.
            </p>
          </div>
          <Image
            src="/six.png"
            alt="image"
            className="steps-card-image absolute right-0 bottom-0"
            width={50}
            height={50}
          />
      </div>
        
      </div>
    </div>
  );
}

export default Benefit;

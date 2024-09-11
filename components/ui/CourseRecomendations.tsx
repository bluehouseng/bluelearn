import React from "react";
import Arrowdown from "../common/icons/Arrowdown";
import CustomCard from "./CustomCard";

function CourseRecomendations() {
  return (
    <div className="ml-5 p-16">
      <div className="flex justify-between pb-4 pr-5 border-b-2  ">
        <p className="w-[350px] text-2xl font-semibold text-[#282938]">Course Recommendations For You</p>
        <div className="flex">
          <div className="flex ">
            <button className="mr-9   ">Categories</button>
          <div className="pt-7 relative right-8 " > <Arrowdown  /></div> 
          </div>
          <button className="bg-[#F0C932] px-10 h-12 mt-2 ">View All</button>
        </div>
      </div>
      <div>
        <div className="w-full grid grid-cols-3 pt-11 ">
          <CustomCard
            imageUrl={"/customCardsvg/unsplash_m_HRfLhgABo.svg"}
            title={"Basic WEB Programming"}
            description={
              "Learning materials on creating websites for beginners"
            }
          />
          <CustomCard
            imageUrl={"/customCardsvg/pexels-lukas-590016 1.svg"}
            title={"Digital Marketing 101"}
            description={
              "Materials on marketing strategies and concepts for beginners"
            }
          />
          <CustomCard
            imageUrl={"/customCardsvg/pexels-olya-kobruseva-5561923 1.svg"}
            title={"Fundamentals of Data Science"}
            description={"Learning materials on the basics of data science"}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseRecomendations;

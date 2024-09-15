import Image, { StaticImageData } from "next/image";
import React from "react";
import ArrowRight from "../common/icons/ArrowRight";
import { truncate } from "@/utils/helpers";

type Props = {
  imageUrl: string | StaticImageData;
  title: string;
  date: string;
  description: string;
};

function BlogCard({ date, description, imageUrl, title }: Readonly<Props>) {
  
  return (
    <div className="w-full cursor-pointer">
      <Image src={imageUrl} alt={title} width={402} height={285} />
      <p className="text-lg font-medium mt-4 text-gray-500">{date}</p>
      <h3 className="text-xl font-medium text-wrap mt-4">{title}</h3>
      <p className="text-sm mt-4 text-gray-500">{truncate(description, 80)}</p>
      <button className="relative mt-6 font-medium text-[16px]">
        See More{" "}
        <span className="absolute top-0 left-20">
          <ArrowRight />
        </span>
      </button>
    </div>
  );
}

export default BlogCard;

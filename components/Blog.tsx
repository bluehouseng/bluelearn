'use client'
import React from "react";
import BlogCard from "./ui/BlogCard";
import { StaticImageData } from "next/image";
import AnimatedComponent from "./common/AnimatedScrollComponent";
import AnimatedTitle from "./common/AnimatedTitle";

function Blog() {
  const blogPosts = [
    {
      imageUrl: "/blog1.png", // Path to the blog image
      title: "Easy Ways to Start Learning Programming", // Blog title
      date: "Aug 19, 2024", // Publish date
      description:
        "Becoming a programmer nowadays is very easy to learn by anyone...", // Brief description
    },
    {
      imageUrl: "/blog2.png",
      title: "Tips for Creating a Business Landing Page Website",
      date: "Aug 19, 2024",
      description:
        "The importance of a website in building trust in business, creating...",
    },
    {
      imageUrl: "/blog3.png",
      title: "WordPress Installation Guide for Beginners",
      date: "Aug 19, 2024",
      description: "Creating a website nowadays can be done without coding...",
    },
  ];
  return (
    <section className="my-10">
      <div className="container mx-auto px-4 md:px-0">
        <AnimatedTitle
          title="Blog, News, and Events"
          styles="text-2xl text-center md:text-start md:text-4xl font-semibold"
        />
        <AnimatedComponent id="blog">
          <div className="grid grid-cols-1  md:grid-cols-3 justify-between gap-6 my-6 md:my-14">
            {blogPosts.map(
              (
                item: {
                  imageUrl: string | StaticImageData;
                  title: string;
                  date: string;
                  description: string;
                },
                index
              ) => (
                <BlogCard key={index + item.title} {...item} />
              )
            )}
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
}

export default Blog;

import React from "react";
import BlogCard from "./ui/BlogCard";
import { StaticImageData } from "next/image";

function Blog() {
    const blogPosts = [
        {
          imageUrl: '/blog1.png', // Path to the blog image
          title: 'Easy Ways to Start Learning Programming', // Blog title
          date: 'Aug 19, 2024', // Publish date
          description: 'Becoming a programmer nowadays is very easy to learn by anyone...', // Brief description
        },
        {
          imageUrl: '/blog2.png',
          title: 'Tips for Creating a Business Landing Page Website',
          date: 'Aug 19, 2024',
          description: 'The importance of a website in building trust in business, creating...',
        },
        {
          imageUrl: '/blog3.png',
          title: 'WordPress Installation Guide for Beginners',
          date: 'Aug 19, 2024',
          description: 'Creating a website nowadays can be done without coding...',
        },
      ];
  return (
    <section className="pt-[13%]">
      <div className="container mx-auto ">
        <h2 className="text-[38px] font-semibold">Blog, News, and Events</h2>

        <div className="flex flex-wrap justify-between mt-14">
            {
                blogPosts.map((item: {
                    imageUrl: string | StaticImageData;
                    title: string,
                    date: string,
                    description: string,
                  }, index) => <BlogCard key={index + item.title} {...item} />)
            }
        </div>
      </div>
    </section>
  );
}

export default Blog;

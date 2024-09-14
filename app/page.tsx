import About from "@/components/About";
import Benefit from "@/components/Benefit";
import Blog from "@/components/Blog";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import CourseRecomendations from "@/components/ui/CourseRecomendations";
import Hero from "@/components/Hero";
import Course from "@/components/Course";
// import Mentors from "@/components/Instructors";
import Partners from "@/components/Partners";
import Instructors from "@/components/Instructors";

import ContactForm from "@/components/ui/ContactForm";

import Faq from "@/components/Faq";


export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
      <Partners />
      <Benefit />
      <About />
      <Course />
      <Faq />
      <Instructors />
      <ContactForm />
      <Blog/>
      <Footer/> 
      
    </main>
  );
}

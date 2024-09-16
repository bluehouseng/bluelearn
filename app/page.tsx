import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Hero from "@/components/Hero";
import Course from "@/components/Course";
import Partners from "@/components/Partners";
import Instructors from "@/components/Instructors";
import ContactForm from "@/components/ui/ContactForm";
import Faq from "@/components/Faq";
import AnimatedComponent from "@/components/common/AnimatedScrollComponent";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";


export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* <Nav />
      <Hero />
      <AnimatedComponent id="partners">
      <Partners />
      </AnimatedComponent>
      <AnimatedComponent id="about">
        <About />
      </AnimatedComponent>
        <Course />
      <AnimatedComponent id="faq">
        <Faq />
      </AnimatedComponent>
      <AnimatedComponent id="instructors">
        <Instructors />
      </AnimatedComponent>
      <AnimatedComponent id="contact-form">
        <ContactForm />
      </AnimatedComponent>
        <Blog />
      <Footer/>  */}
      <TestimonialsCarousel/>
      
    </main>
  );
}

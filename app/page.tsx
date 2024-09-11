import About from "@/components/About";
import Benefit from "@/components/Benefit";
import Blog from "@/components/Blog";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import CourseRecomendations from "@/components/ui/CourseRecomendations";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
      <Partners />
      <About />
      <CourseRecomendations />
      <Benefit />
      <Blog/>
      <Footer/>
    </main>
  );
}

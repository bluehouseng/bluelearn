import About from "@/components/About";
import Benefit from "@/components/Benefit";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
      <Partners />
      <Benefit />
      <About />
      <Footer/>
    </main>
  );
}

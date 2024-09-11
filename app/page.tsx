import About from "@/components/About";
import Benefit from "@/components/Benefit";
import Blog from "@/components/Blog";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Benefit />
      <About />
      <Blog/>
      <Footer/>
    </main>
  );
}

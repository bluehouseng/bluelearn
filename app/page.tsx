import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="block w-full min-h-screen">
      <Nav />
      <Hero />
      <Footer/>
    </main>
  );
}

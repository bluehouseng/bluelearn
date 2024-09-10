import Benefit from "@/components/Benefit";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";

export default function Home() {
  return (
    <main className="block w-full min-h-screen">
      <Nav />
      <Benefit />
      <Footer/>
    </main>
  );
}

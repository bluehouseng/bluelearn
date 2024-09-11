import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import CourseRecomendations from "@/components/ui/CourseRecomendations";

export default function Home() {
  return (
    <main className="block w-full min-h-screen">
      <Nav />
      <CourseRecomendations />
      <Footer/>
      
      
    </main>
  );
}

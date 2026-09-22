import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Process from "@/components/Process";
import WorkGallery from "@/components/WorkGallery";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <WorkGallery />
        <Process />
        <Statement />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

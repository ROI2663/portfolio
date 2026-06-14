import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <CaseStudies />
        <Gallery />
        <Testimonials />
        <Process />
        <FAQ />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

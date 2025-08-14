import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import BeyondResearch from "@/components/BeyondResearch";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Research />
        <Projects />
        <BeyondResearch />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

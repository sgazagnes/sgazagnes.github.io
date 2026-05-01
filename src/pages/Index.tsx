
import Hero from "@/components/Hero";
import WorkGraph from "@/components/WorkGraph";
import Expertise from "@/components/Expertise";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="portfolio-container">
      <Hero />
      <WorkGraph />
      <Expertise />
      <Background /> 
      <Contact />
       <Footer />
    </div>
  );
};

export default Index;
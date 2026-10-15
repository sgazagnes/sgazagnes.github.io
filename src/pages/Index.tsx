
import Hero from "@/components/Hero";
import WorkGraph from "@/components/WorkGraph";
import TechnicalFocus from "@/components/Expertise";
import Engagements from "@/components/Engagements";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="portfolio-container">
      <Hero />
      <WorkGraph />
      <TechnicalFocus />
      <Engagements />
      <Background /> 
      <Contact />
       <Footer />
    </div>
  );
};

export default Index;
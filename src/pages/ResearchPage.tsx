import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import galaxyImage from "@/assets/galaxy-research.jpg";
import particleImage from "@/assets/particle-physics.jpg";

const ResearchPage = () => {
  const researchProjects = [
    {
      id: "galaxy-evolution",
      title: "Matching Real and Virtual Galaxies",
      subtitle: "Understanding Galaxy Evolution Through Simulation Comparison",
      date: "Jan 24 & May 24",
      field: "Astrophysics",
      description: "Advances in numerical simulations have enabled tremendous progress when simulating highly complex astrophysical processes. In two recent papers, I dive into how the comparison of observations and astrophysical simulations to improve our understanding of how galaxy evolves.",
      image: galaxyImage,
      tags: ["Galaxy Evolution", "Numerical Simulations", "Observational Astronomy", "Cosmology"],
      content: `
        <h3>Research Overview</h3>
        <p>This research focuses on bridging the gap between theoretical predictions from cosmological simulations and observational data from galaxy surveys. By developing novel comparison methods, we can better understand the physical processes that drive galaxy formation and evolution.</p>
        
        <h3>Key Findings</h3>
        <ul>
          <li>Developed new statistical methods for comparing simulated and observed galaxy populations</li>
          <li>Identified key discrepancies between theory and observations in low-mass galaxy populations</li>
          <li>Proposed new feedback mechanisms to improve simulation accuracy</li>
        </ul>
        
        <h3>Impact</h3>
        <p>This work contributes to our understanding of galaxy formation in the early universe and helps refine theoretical models used in cosmological studies.</p>
      `,
      link: "https://example.com/galaxy-paper",
    },
    {
      id: "particle-trajectories",
      title: "Reconstructing Charged-Particle Trajectories",
      subtitle: "Real-time Pattern Recognition for Nuclear Physics Experiments",
      date: "May 23",
      field: "Particle Physics",
      description: "For future nuclear physics experiments involving particle collisions at extreme rates, one need to reconstruct the particle trajectories in real time. In this paper, we designed a pattern recognition method that approaches the theoretical requirements.",
      image: particleImage,
      tags: ["Particle Physics", "Pattern Recognition", "Real-time Processing", "Nuclear Experiments"],
      content: `
        <h3>Research Challenge</h3>
        <p>Future nuclear physics experiments will generate particle collision data at unprecedented rates, requiring real-time trajectory reconstruction algorithms that can process thousands of events per second while maintaining high accuracy.</p>
        
        <h3>Methodology</h3>
        <ul>
          <li>Developed machine learning algorithms optimized for real-time processing</li>
          <li>Implemented parallel processing techniques for high-throughput data analysis</li>
          <li>Created novel track finding algorithms with improved efficiency</li>
        </ul>
        
        <h3>Results</h3>
        <p>Our method achieves near-theoretical performance requirements while maintaining computational efficiency suitable for real-time applications in next-generation particle physics experiments.</p>
      `,
      link: "https://example.com/particle-paper",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-ocean-primary mb-4">
                Research Publications
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Exploring the frontiers of astrophysics, particle physics, biology, and medical imaging.
              </p>
            </div>

            <div className="grid gap-8">
              {researchProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-accent/20 shadow-elegant">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-accent/10 text-teal-accent border border-teal-accent/20"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <CardTitle className="text-2xl md:text-3xl text-ocean-primary mb-2">
                          {project.title}
                        </CardTitle>
                        
                        <p className="text-lg font-medium text-teal-accent mb-3">
                          {project.subtitle}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            {project.field}
                          </span>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex gap-3">
                          <Link to={`/research/${project.id}`}>
                            <Button variant="default">
                              Read More
                            </Button>
                          </Link>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Paper
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 p-8 rounded-lg bg-secondary/30">
              <h3 className="text-2xl font-bold text-ocean-primary mb-4">
                Complete Research Portfolio
              </h3>
              <p className="text-muted-foreground mb-6">
                For a complete list of my research contributions and citations
              </p>
              <a 
                href="https://scholar.google.com/citations?user=simongazagnes" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Google Scholar Profile
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchPage;
import { ArrowLeft, ExternalLink, Github, Star, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import disccofanImage from "@/assets/disccofan-project.jpg";
import lotfImage from "@/assets/lotf-project.jpg";

const SoftwarePage = () => {
  const softwareProjects = [
    {
      id: "disccofan",
      title: "DISCCOFAN",
      subtitle: "High-Performance Image Processing for Scientific Computing",
      description: "A highly parallelized image processing tool optimized for analyzing morphological patterns in handling vast datasets. Deployed on high-performance computing clusters with substantial speed improvements for gigantic volumes of data.",
      image: disccofanImage,
      technologies: ["Python", "CUDA", "HPC", "Image Processing", "Machine Learning"],
      githubUrl: "https://github.com/simongazagnes/disccofan",
      liveUrl: "https://disccofan.example.com",
      stars: "45",
      content: `
        <h3>Project Overview</h3>
        <p>DISCCOFAN is a cutting-edge image processing framework designed specifically for scientific applications requiring analysis of massive datasets. The tool leverages parallel computing architectures to achieve unprecedented processing speeds.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>GPU-accelerated processing using CUDA for maximum performance</li>
          <li>Scalable architecture for distributed computing environments</li>
          <li>Advanced morphological analysis algorithms</li>
          <li>Support for various scientific image formats</li>
          <li>Real-time processing capabilities for streaming data</li>
        </ul>
        
        <h3>Performance Improvements</h3>
        <p>Benchmarks show 100x speed improvements over traditional CPU-based methods when processing large astronomical image datasets, making it possible to analyze petabyte-scale archives in reasonable timeframes.</p>
        
        <h3>Applications</h3>
        <ul>
          <li>Astronomical image surveys and galaxy morphology classification</li>
          <li>Medical imaging analysis for diagnostic applications</li>
          <li>Materials science microscopy data processing</li>
          <li>Environmental monitoring through satellite imagery</li>
        </ul>
      `,
      isHighlighted: true,
    },
    {
      id: "lotf",
      title: "LOTF - Local Track Finder",
      subtitle: "Real-time Particle Physics Pattern Recognition",
      description: "A pattern recognition method for future nuclear physics experiments involving particle collisions at extreme rates. Designed to reconstruct particle trajectories in real time with theoretical requirements.",
      image: lotfImage,
      technologies: ["C++", "ROOT", "Physics Simulation", "Pattern Recognition", "Real-time Processing"],
      githubUrl: "https://github.com/simongazagnes/lotf",
      stars: "28",
      content: `
        <h3>Project Background</h3>
        <p>LOTF addresses the critical challenge of real-time particle trajectory reconstruction in next-generation nuclear physics experiments where collision rates exceed millions per second.</p>
        
        <h3>Technical Innovation</h3>
        <ul>
          <li>Novel track finding algorithms optimized for high collision rates</li>
          <li>Efficient memory management for real-time processing constraints</li>
          <li>Machine learning-enhanced pattern recognition</li>
          <li>Integration with existing physics analysis frameworks</li>
        </ul>
        
        <h3>Performance Metrics</h3>
        <p>Achieves track reconstruction efficiency of >95% while maintaining processing times under 10 microseconds per event, meeting the stringent requirements for future accelerator experiments.</p>
        
        <h3>Impact</h3>
        <p>This tool is being evaluated for implementation in upcoming experiments at major particle physics facilities, potentially enabling new discoveries in nuclear physics research.</p>
      `,
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
                Software & Tools
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Developing cutting-edge computational solutions for complex scientific challenges across multiple disciplines.
              </p>
            </div>

            <div className="grid gap-8">
              {softwareProjects.map((project) => (
                <Card key={project.id} className={`overflow-hidden shadow-elegant ${
                  project.isHighlighted 
                    ? "border-teal-accent/30 bg-gradient-to-r from-teal-accent/5 to-transparent" 
                    : "border-accent/20"
                }`}>
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
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ocean-primary/10 text-ocean-primary border border-ocean-primary/20"
                            >
                              <Code className="w-3 h-3 mr-1" />
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl md:text-3xl text-ocean-primary">
                            {project.title}
                          </CardTitle>
                          {project.isHighlighted && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-accent text-white">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <p className="text-lg font-medium text-teal-accent mb-3">
                          {project.subtitle}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {project.stars} stars
                          </span>
                          <span className="flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            Open Source
                          </span>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex gap-3 flex-wrap">
                          <Link to={`/software/${project.id}`}>
                            <Button variant="default">
                              Learn More
                            </Button>
                          </Link>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="ghost">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 p-8 rounded-lg bg-secondary/30">
              <h3 className="text-2xl font-bold text-ocean-primary mb-4">
                Complete Software Portfolio
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore all my open-source projects and contributions
              </p>
              <a 
                href="https://github.com/simongazagnes" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
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

export default SoftwarePage;
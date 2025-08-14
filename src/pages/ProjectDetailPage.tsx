import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import disccofanImage from "@/assets/disccofan-project.jpg";
import lotfImage from "@/assets/lotf-project.jpg";
import galaxyImage from "@/assets/galaxy-research.jpg";
import particleImage from "@/assets/particle-physics.jpg";

const ProjectDetailPage = () => {
  const { type, id } = useParams();

  const allProjects = {
    research: {
      "galaxy-evolution": {
        title: "Matching Real and Virtual Galaxies",
        subtitle: "Understanding Galaxy Evolution Through Simulation Comparison",
        date: "Jan 24 & May 24",
        field: "Astrophysics",
        description: "Advances in numerical simulations have enabled tremendous progress when simulating highly complex astrophysical processes. In two recent papers, I dive into how the comparison of observations and astrophysical simulations to improve our understanding of how galaxy evolves.",
        image: galaxyImage,
        tags: ["Galaxy Evolution", "Numerical Simulations", "Observational Astronomy", "Cosmology"],
        content: `
          <div class="prose prose-lg max-w-none">
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Research Overview</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">This research focuses on bridging the gap between theoretical predictions from cosmological simulations and observational data from galaxy surveys. By developing novel comparison methods, we can better understand the physical processes that drive galaxy formation and evolution.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Methodology</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">Our approach combines advanced statistical techniques with machine learning algorithms to identify and quantify differences between simulated and observed galaxy populations. We developed new metrics that account for observational biases and selection effects.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Key Findings</h3>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Developed new statistical methods for comparing simulated and observed galaxy populations</li>
              <li>• Identified key discrepancies between theory and observations in low-mass galaxy populations</li>
              <li>• Proposed new feedback mechanisms to improve simulation accuracy</li>
              <li>• Demonstrated improved agreement between simulations and observations after model refinements</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Impact and Future Work</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">This work contributes to our understanding of galaxy formation in the early universe and helps refine theoretical models used in cosmological studies. The methodologies developed are now being applied to next-generation survey data from the James Webb Space Telescope and other facilities.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Publications</h3>
            <p class="text-muted-foreground leading-relaxed">Two peer-reviewed papers have been published based on this research, with additional publications in preparation as we extend the analysis to larger datasets and higher redshifts.</p>
          </div>
        `,
        link: "https://example.com/galaxy-paper",
      },
      "particle-trajectories": {
        title: "Reconstructing Charged-Particle Trajectories",
        subtitle: "Real-time Pattern Recognition for Nuclear Physics Experiments",
        date: "May 23",
        field: "Particle Physics",
        description: "For future nuclear physics experiments involving particle collisions at extreme rates, one need to reconstruct the particle trajectories in real time. In this paper, we designed a pattern recognition method that approaches the theoretical requirements.",
        image: particleImage,
        tags: ["Particle Physics", "Pattern Recognition", "Real-time Processing", "Nuclear Experiments"],
        content: `
          <div class="prose prose-lg max-w-none">
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Research Challenge</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">Future nuclear physics experiments will generate particle collision data at unprecedented rates, requiring real-time trajectory reconstruction algorithms that can process thousands of events per second while maintaining high accuracy.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Technical Innovation</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">Our solution combines advanced pattern recognition algorithms with optimized computational architectures specifically designed for real-time processing constraints.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Methodology</h3>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Developed machine learning algorithms optimized for real-time processing</li>
              <li>• Implemented parallel processing techniques for high-throughput data analysis</li>
              <li>• Created novel track finding algorithms with improved efficiency</li>
              <li>• Integrated with existing detector simulation frameworks</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Performance Results</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">Our method achieves near-theoretical performance requirements while maintaining computational efficiency suitable for real-time applications in next-generation particle physics experiments. Benchmark tests show >95% track reconstruction efficiency with processing times under 10 microseconds per event.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Future Applications</h3>
            <p class="text-muted-foreground leading-relaxed">This technology is being evaluated for implementation in upcoming experiments at major particle physics facilities, potentially enabling new discoveries in nuclear physics research.</p>
          </div>
        `,
        link: "https://example.com/particle-paper",
      },
    },
    software: {
      "disccofan": {
        title: "DISCCOFAN",
        subtitle: "High-Performance Image Processing for Scientific Computing",
        description: "A highly parallelized image processing tool optimized for analyzing morphological patterns in handling vast datasets. Deployed on high-performance computing clusters with substantial speed improvements for gigantic volumes of data.",
        image: disccofanImage,
        technologies: ["Python", "CUDA", "HPC", "Image Processing", "Machine Learning"],
        githubUrl: "https://github.com/simongazagnes/disccofan",
        liveUrl: "https://disccofan.example.com",
        content: `
          <div class="prose prose-lg max-w-none">
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Project Overview</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">DISCCOFAN is a cutting-edge image processing framework designed specifically for scientific applications requiring analysis of massive datasets. The tool leverages parallel computing architectures to achieve unprecedented processing speeds.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Technical Architecture</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">Built with a modular architecture that supports both CPU and GPU processing, DISCCOFAN can scale from single workstations to large HPC clusters.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Key Features</h3>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• GPU-accelerated processing using CUDA for maximum performance</li>
              <li>• Scalable architecture for distributed computing environments</li>
              <li>• Advanced morphological analysis algorithms</li>
              <li>• Support for various scientific image formats (FITS, HDF5, TIFF)</li>
              <li>• Real-time processing capabilities for streaming data</li>
              <li>• Comprehensive API for integration with existing workflows</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Performance Improvements</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">Benchmarks show 100x speed improvements over traditional CPU-based methods when processing large astronomical image datasets, making it possible to analyze petabyte-scale archives in reasonable timeframes. Memory usage has been optimized to handle images exceeding available RAM through intelligent streaming algorithms.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Applications</h3>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Astronomical image surveys and galaxy morphology classification</li>
              <li>• Medical imaging analysis for diagnostic applications</li>
              <li>• Materials science microscopy data processing</li>
              <li>• Environmental monitoring through satellite imagery</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Installation and Usage</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">DISCCOFAN is available as both a Python package and standalone executable. Comprehensive documentation and tutorials are provided for researchers new to high-performance computing.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Community and Support</h3>
            <p class="text-muted-foreground leading-relaxed">Active development continues with contributions from researchers worldwide. Regular workshops and tutorials help new users adopt the tool for their specific research needs.</p>
          </div>
        `,
        isHighlighted: true,
      },
      "lotf": {
        title: "LOTF - Local Track Finder",
        subtitle: "Real-time Particle Physics Pattern Recognition",
        description: "A pattern recognition method for future nuclear physics experiments involving particle collisions at extreme rates. Designed to reconstruct particle trajectories in real time with theoretical requirements.",
        image: lotfImage,
        technologies: ["C++", "ROOT", "Physics Simulation", "Pattern Recognition", "Real-time Processing"],
        githubUrl: "https://github.com/simongazagnes/lotf",
        content: `
          <div class="prose prose-lg max-w-none">
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Project Background</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">LOTF addresses the critical challenge of real-time particle trajectory reconstruction in next-generation nuclear physics experiments where collision rates exceed millions per second.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Algorithm Design</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">The core algorithm uses advanced pattern recognition techniques combined with geometric constraints to efficiently identify particle tracks in complex detector environments.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Technical Innovation</h3>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Novel track finding algorithms optimized for high collision rates</li>
              <li>• Efficient memory management for real-time processing constraints</li>
              <li>• Machine learning-enhanced pattern recognition</li>
              <li>• Integration with existing physics analysis frameworks (ROOT, Geant4)</li>
              <li>• Optimized data structures for minimal memory footprint</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Performance Metrics</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">Achieves track reconstruction efficiency of >95% while maintaining processing times under 10 microseconds per event, meeting the stringent requirements for future accelerator experiments. The algorithm maintains high performance even in high-multiplicity environments with hundreds of simultaneous particle tracks.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Validation and Testing</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">Extensive validation using Monte Carlo simulations and real experimental data from existing facilities demonstrates the robustness and reliability of the approach.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Future Experiments</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">This tool is being evaluated for implementation in upcoming experiments at major particle physics facilities, potentially enabling new discoveries in nuclear physics research. Collaborations are underway with several international research groups.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Open Source Commitment</h3>
            <p class="text-muted-foreground leading-relaxed">The complete source code is available under an open-source license, encouraging collaboration and further development by the nuclear physics community.</p>
          </div>
        `,
      },
    },
    outreach: {
      "epoch-reionization": {
        title: "Astrophysics: The First Galaxies During the Epoch of Reionization",
        subtitle: "Educational Content for Public Understanding",
        description: "A significant portion of my work is focused on the epoch of reionization and the properties of the first galaxies. This educational content helps make complex astrophysics concepts accessible to the general public.",
        image: "/lovable-uploads/9ba15330-dafb-4fca-8927-080d290fb109.png",
        content: `
          <div class="prose prose-lg max-w-none">
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Introduction: The Epoch of Reionization</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">Start with an introduction into what is the Epoch of Reionization and what questions are we trying to answer. The Epoch of Reionization represents one of the most significant transitions in cosmic history, when the first stars and galaxies began to illuminate the universe. This period, occurring roughly 400 million to 1 billion years after the Big Bang, marked the end of the cosmic "Dark Ages."</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">The Cosmic Timeline</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">To understand the epoch of reionization, we must first place it in the context of cosmic history:</p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• <strong>Big Bang (t=0):</strong> The universe begins in a hot, dense state</li>
              <li>• <strong>Recombination (t≈380,000 years):</strong> Electrons and protons combine to form neutral hydrogen</li>
              <li>• <strong>Dark Ages (380,000 - 400 million years):</strong> Universe filled with neutral hydrogen, no light sources</li>
              <li>• <strong>Cosmic Dawn (400-600 million years):</strong> First stars and galaxies form</li>
              <li>• <strong>Epoch of Reionization (400 million - 1 billion years):</strong> First galaxies ionize surrounding gas</li>
            </ul>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Key Concepts Explained</h3>
            <h4 class="text-lg font-semibold text-teal-accent mb-2">Cosmic Dawn: The First Light</h4>
            <p class="text-muted-foreground leading-relaxed mb-4">The formation of the very first stars and galaxies in the universe represents the end of the cosmic Dark Ages. These primordial objects were fundamentally different from galaxies we see today - they were composed almost entirely of hydrogen and helium, with no heavy elements.</p>
            
            <h4 class="text-lg font-semibold text-teal-accent mb-2">The Reionization Process</h4>
            <p class="text-muted-foreground leading-relaxed mb-4">As the first stars formed, they began producing intense ultraviolet radiation. This radiation was energetic enough to ionize the neutral hydrogen gas surrounding these early galaxies, creating expanding bubbles of ionized gas around each galaxy.</p>
            
            <h4 class="text-lg font-semibold text-teal-accent mb-2">Observable Evidence</h4>
            <p class="text-muted-foreground leading-relaxed mb-6">We study this period using several observational techniques: observations of distant quasars, measurements of the cosmic microwave background, and direct observations of high-redshift galaxies with space telescopes like the James Webb Space Telescope.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Modern Research Approaches</h3>
            <p class="text-muted-foreground leading-relaxed mb-4">Contemporary research combines observations with sophisticated computer simulations to understand this period. These simulations model the formation of dark matter structures, gas dynamics, star formation, and the propagation of ionizing radiation.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Why This Matters</h3>
            <p class="text-muted-foreground leading-relaxed mb-6">Understanding the epoch of reionization helps us comprehend how the universe evolved from a simple, uniform state to the complex structure we observe today. This research contributes to our fundamental understanding of cosmic evolution and the formation of the first galaxies, providing insights into the conditions that eventually led to the formation of galaxies like our own Milky Way.</p>
            
            <h3 class="text-2xl font-bold text-ocean-primary mb-4">Research Impact</h3>
            <p class="text-muted-foreground leading-relaxed">My work in this field contributes to international collaborations studying early universe physics, helping to answer fundamental questions about how cosmic structures first formed and evolved. This research is particularly relevant as new telescopes like JWST provide unprecedented views of the early universe.</p>
          </div>
        `,
      },
    },
  };

  const project = allProjects[type as keyof typeof allProjects]?.[id as string];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-ocean-primary mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The requested project could not be found.</p>
              <Link to="/">
                <Button>Return Home</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to={`/${type}`}>
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {type?.charAt(0).toUpperCase() + type?.slice(1)}
                </Button>
              </Link>
            </div>

            {/* Header Section */}
            <div className="mb-12">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant mb-8"
              />
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-ocean-primary">
                  {project.title}
                </h1>
                
                <p className="text-xl font-medium text-teal-accent">
                  {project.subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Metadata */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {project.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                  )}
                  {project.field && (
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {project.field}
                    </span>
                  )}
                </div>

                {/* Tags */}
                {(project.tags || project.technologies) && (
                  <div className="flex flex-wrap gap-2">
                    {(project.tags || project.technologies)?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ocean-primary/10 text-ocean-primary border border-ocean-primary/20"
                      >
                        <Code className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
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
                  )}
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
              </div>
            </div>

            {/* Content Section */}
            <Card className="border-accent/20 shadow-elegant">
              <CardContent className="p-8">
                <div 
                  dangerouslySetInnerHTML={{ __html: project.content }}
                  className="project-content"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
import ResearchCard from "./ResearchCard";
import galaxyImage from "@/assets/galaxy-research.jpg";
import particleImage from "@/assets/particle-physics.jpg";

const Research = () => {
  const researchProjects = [
    {
      title: "Matching Real and Virtual Galaxies",
      description: "Advances in numerical simulations have enabled tremendous progress when simulating highly complex astrophysical processes. In two recent papers, I dive into how the comparison of observations and astrophysical simulations to improve our understanding of how galaxy evolves.",
      date: "Jan 24 & May 24",
      field: "Astrophysics",
      image: galaxyImage,
      link: "https://example.com/galaxy-paper",
    },
    {
      title: "Reconstructing Charged-Particle Trajectories",
      description: "For future nuclear physics experiments involving particle collisions at extreme rates, one need to reconstruct the particle trajectories in real time. In this paper, we designed a pattern recognition method that approaches the theoretical requirements.",
      date: "May 23",
      field: "Particle Physics",
      image: particleImage,
      link: "https://example.com/particle-paper",
    },
  ];

  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-primary mb-6">
            Research Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring the frontiers of astrophysics, particle physics, biology, and medical imaging through innovative research and computational methods.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {researchProjects.map((project, index) => (
            <ResearchCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            For a complete list of my research contributions,{" "}
            <a 
              href="https://scholar.google.com/citations?user=simongazagnes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-accent hover:text-teal-light transition-colors duration-300 font-medium"
            >
              visit my Google Scholar profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
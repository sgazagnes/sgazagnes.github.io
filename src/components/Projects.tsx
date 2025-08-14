import ProjectCard from "./ProjectCard";
import disccofanImage from "@/assets/disccofan.png";
import lotfImage from "@/assets/lotf.jpg";
import melanomaImage from "@/assets/melanoma.png";

const Projects = () => {
  const projects = [
    {
      title: "Melanoma Detection",
      description: "Ongoing project to develop a machine learning model for detecting melanoma in skin cancer, and embed it in a mobile application.",
      image: melanomaImage,
      technologies: ["Python", "PyTorch", "Machine Learning"],
      githubUrl: "https://github.com/sgazagnes/melanoma-detection",
      // documentationUrl: "https://disccofan.readthedocs.io/en/latest/",
      isHighlighted: true,
    },
    {
      title: "DISCCOFAN",
      description: "A highly parallelized image processing tool optimized for analyzing morphological patterns in handling vast datasets. Deployed on high-performance computing clusters with substantial speed improvements for gigantic volumes of data.",
      image: disccofanImage,
      technologies: ["Python", "CUDA", "HPC", "Image Processing", "Machine Learning"],
      githubUrl: "https://github.com/sgazagnes/disccofan",
      documentationUrl: "https://disccofan.readthedocs.io/en/latest/",
      isHighlighted: true,
    },
    {
      title: "LOTF - Local Track Finder",
      description: "A pattern recognition method for future nuclear physics experiments involving particle collisions at extreme rates. Designed to reconstruct particle trajectories in real time with theoretical requirements.",
      image: lotfImage,
      technologies: ["C++", "ROOT", "Physics Simulation", "Pattern Recognition", "Real-time Processing"],
      githubUrl: "https://github.com/sgazagnes/lotf",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-primary mb-6">
            Software & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Developing cutting-edge computational solutions for complex scientific challenges across multiple disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Looking for a complete list?{" "}
            <a 
              href="https://github.com/simongazagnes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-accent hover:text-teal-light transition-colors duration-300 font-medium"
            >
              Visit my GitHub profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
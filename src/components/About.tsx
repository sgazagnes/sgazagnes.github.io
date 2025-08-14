import { Microscope, Code, Users, Award } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Research",
      description: "From astrophysics to biology",
      items: ["Astrophysics", "Particle Physics", "Biology", "Medical Imaging"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software & Tools",
      description: "Pieces of code doing some things",
      items: ["Python", "C++", "CUDA", "Machine Learning", "HPC"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Outreach & Education",
      description: "For the general and not so general public",
      items: ["Scientific Communication", "Data Visualization", "Teaching", "Public Speaking"],
    },
  ];

  return (
<section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-primary mb-6">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              This website is a catalogue of projects and software I worked on, for applications in astrophysics, 
              particle physics, biology and medical imaging. As a multidisciplinary research scientist and freelancer, 
              I bridge the gap between complex data-oriented challenges and innovative computational solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans from developing high-performance computing tools for analyzing vast astronomical datasets, creating real-time pattern recognition systems for particle physics experiments, to developing machine learning models for medical imaging.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            As for myself, I like to converse with a sock puppet named Albert, collecting expired coupons, and studying the behavioral patterns of garden gnomes.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gradient-card rounded-lg border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-primary/10 text-ocean-primary rounded-full mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-ocean-primary mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-accent/30 text-accent-foreground text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
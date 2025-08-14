import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "simon.gazagnes@example.com",
      href: "mailto:simon.gazagnes@example.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "Quick access to my GitHub repos",
      href: "https://github.com/simongazagnes",
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Google Scholar",
      value: "Complete list of publications",
      href: "https://scholar.google.com/citations?user=simongazagnes",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-ocean text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Interested in working together on research projects, software development, or scientific consulting? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-all duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-medium text-white">{link.label}</div>
                      <div className="text-white/70 text-sm">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Offer</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">Research Collaboration</h4>
                  <p className="text-white/70 text-sm">
                    Multidisciplinary research in astrophysics, particle physics, and computational biology
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">Software Development</h4>
                  <p className="text-white/70 text-sm">
                    High-performance computing solutions and scientific software development
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">Scientific Consulting</h4>
                  <p className="text-white/70 text-sm">
                    Data analysis, algorithm development, and technical consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-ocean-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:simon.gazagnes@example.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
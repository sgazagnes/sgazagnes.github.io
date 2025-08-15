import { ArrowLeft, ExternalLink, Users, Calendar, BookOpen, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OutreachPage = () => {
  const outreachActivities = [
    {
      id: "epoch-reionization",
      title: "Astrophysics: The First Galaxies During the Epoch of Reionization",
      subtitle: "Educational Content for Public Understanding",
      description: "A significant portion of my work is focused on the epoch of reionization and the properties of the first galaxies. This educational content helps make complex astrophysics concepts accessible to the general public.",
      date: "2024",
      type: "Educational Content",
      audience: "General Public",
      content: `
        <h3>About the Epoch of Reionization</h3>
        <p>The Epoch of Reionization represents one of the most significant transitions in cosmic history, when the first stars and galaxies began to illuminate the universe. This period, occurring roughly 400 million to 1 billion years after the Big Bang, marked the end of the cosmic "Dark Ages."</p>
        
        <h3>Key Concepts Explained</h3>
        <ul>
          <li><strong>Cosmic Dawn:</strong> The formation of the very first stars and galaxies in the universe</li>
          <li><strong>Reionization Process:</strong> How early galaxies ionized the surrounding hydrogen gas</li>
          <li><strong>Observable Evidence:</strong> How we study this period using advanced telescopes and techniques</li>
          <li><strong>Modern Implications:</strong> What this tells us about galaxy formation and evolution</li>
        </ul>
        
        <h3>Why This Matters</h3>
        <p>Understanding the epoch of reionization helps us comprehend how the universe evolved from a simple, uniform state to the complex structure we observe today. This research contributes to our fundamental understanding of cosmic evolution and the formation of the first galaxies.</p>
        
        <h3>Research Impact</h3>
        <p>My work in this field contributes to international collaborations studying early universe physics, helping to answer fundamental questions about how cosmic structures first formed and evolved.</p>
      `,
      image: "/lovable-uploads/9ba15330-dafb-4fca-8927-080d290fb109.png",
    },
    {
      id: "science-communication",
      title: "Science Communication Workshops",
      subtitle: "Bridging the Gap Between Research and Public Understanding",
      description: "Regular workshops and presentations designed to make complex scientific concepts accessible to diverse audiences, from high school students to science enthusiasts.",
      date: "Ongoing",
      type: "Workshops & Presentations",
      audience: "Students & Educators",
      content: `
        <h3>Workshop Objectives</h3>
        <p>These interactive sessions aim to demystify complex scientific concepts and inspire the next generation of scientists and science enthusiasts.</p>
        
        <h3>Topics Covered</h3>
        <ul>
          <li>Introduction to computational astrophysics and simulations</li>
          <li>How modern telescopes observe distant galaxies</li>
          <li>The role of machine learning in scientific research</li>
          <li>Career paths in scientific research and academia</li>
        </ul>
        
        <h3>Impact</h3>
        <p>These outreach activities have reached over 500 students and educators, fostering scientific curiosity and providing insights into modern research methods.</p>
      `,
    },
    {
      id: "open-science",
      title: "Open Science Initiative",
      subtitle: "Making Research Accessible and Reproducible",
      description: "Promoting open access to research data, code, and methodologies to advance scientific progress and enable collaboration across institutions.",
      date: "2023-Present",
      type: "Open Access & Collaboration",
      audience: "Research Community",
      content: `
        <h3>Open Science Principles</h3>
        <p>Committed to making research outputs freely accessible and reproducible, following FAIR (Findable, Accessible, Interoperable, Reusable) data principles.</p>
        
        <h3>Contributions</h3>
        <ul>
          <li>All research code published under open-source licenses</li>
          <li>Data sets made available through established repositories</li>
          <li>Detailed documentation and tutorials for research methods</li>
          <li>Active participation in scientific software communities</li>
        </ul>
        
        <h3>Community Impact</h3>
        <p>These efforts support reproducible science and enable other researchers to build upon published work, accelerating scientific progress.</p>
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
                Outreach & Education
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Making science accessible through education, public engagement, and open research practices.
              </p>
            </div>

            <div className="grid gap-8">
              {outreachActivities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden border-accent/20 shadow-elegant">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 border border-purple-500/20">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {activity.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 border border-green-500/20">
                        <Users className="w-3 h-3 mr-1" />
                        {activity.audience}
                      </span>
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl text-ocean-primary mb-2">
                      {activity.title}
                    </CardTitle>
                    
                    <p className="text-lg font-medium text-teal-accent mb-3">
                      {activity.subtitle}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {activity.date}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div className="flex gap-3">
                      <Link to={`/outreach/${activity.id}`}>
                        <Button variant="default">
                          Learn More
                        </Button>
                      </Link>
                      {activity.id === "epoch-reionization" && (
                        <Button variant="outline">
                          <Video className="w-4 h-4 mr-2" />
                          Watch Presentation
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-teal-accent/20 bg-gradient-to-br from-teal-accent/5 to-transparent">
                <h3 className="text-xl font-bold text-ocean-primary mb-4">
                  Speaking Engagements
                </h3>
                <p className="text-muted-foreground mb-4">
                  Available for conferences, workshops, and educational events
                </p>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Request Speaker
                </Button>
              </Card>
              
              <Card className="p-6 border-ocean-primary/20 bg-gradient-to-br from-ocean-primary/5 to-transparent">
                <h3 className="text-xl font-bold text-ocean-primary mb-4">
                  Educational Resources
                </h3>
                <p className="text-muted-foreground mb-4">
                  Free materials and tutorials for educators and students
                </p>
                <Button variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Access Resources
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OutreachPage;
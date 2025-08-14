import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isHighlighted?: boolean;
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl, isHighlighted }: ProjectCardProps) => {
  return (
    <Card className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 ${isHighlighted ? 'ring-2 ring-teal-accent/30' : ''}`}>
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-ocean-primary group-hover:text-teal-accent transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-ocean-primary/20 hover:bg-ocean-primary/5"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              className="flex-1 bg-ocean-primary hover:bg-ocean-light"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
import { Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResearchCardProps {
  title: string;
  description: string;
  date: string;
  field: string;
  image: string;
  link?: string;
}

const ResearchCard = ({ title, description, date, field, image, link }: ResearchCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="aspect-square md:aspect-auto md:h-full overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 bg-teal-accent/10 text-teal-accent text-sm rounded-full font-medium">
                {field}
              </span>
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {date}
              </div>
            </div>
            <CardTitle className="text-xl text-ocean-primary group-hover:text-teal-accent transition-colors duration-300">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              {description}
            </CardDescription>
          </CardHeader>
          {link && (
            <CardContent className="mt-auto">
              <Button
                variant="outline"
                size="sm"
                className="border-ocean-primary/20 hover:bg-ocean-primary/5"
                onClick={() => window.open(link, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Paper
              </Button>
            </CardContent>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ResearchCard;
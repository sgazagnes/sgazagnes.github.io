// src/components/BeyondResearch/ShowcaseCard.tsx
import { useState } from "react";
import { Calendar, ExternalLink, Images, Info, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

type LinkItem = {
  label: string;
  url: string;
  icon?: "external" | "mail" | "info" | "images";
  variant?: "default" | "outline";
};

interface ShowcaseCardProps {
  title: string;
  subtitle?: string;          // e.g., “Mobile App”, “Outreach Talk”, “Teaching”
  date?: string;              // optional date/badge row
  image: string;              // cover image
  images?: string[];          // extra images for the gallery in modal
  description: string;        // short text on the card
  contentHtml?: string;       // rich HTML for modal body
  tags?: string[];
  links?: LinkItem[];         // CTA buttons (Code, Live, Contact, Docs, Trivia...)
  highlight?: boolean;
}

const iconMap = {
  external: ExternalLink,
  mail: Mail,
  info: Info,
  images: Images,
};

const ShowcaseCard = ({
  title,
  subtitle,
  date,
  image,
  images = [],
  description,
  contentHtml,
  tags = [],
  links = [],
  highlight = false,
}: ShowcaseCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className={`h-full flex flex-col group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 ${
          highlight ? "ring-2 ring-teal-accent/30" : ""
        }`}
      >
        {/* Cover */}
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Body */}
        <CardHeader className="flex-1">
          <div className="flex items-center justify-between mb-2">
            {subtitle && (
              <span className="px-3 py-1 bg-teal-accent/10 text-teal-accent text-sm rounded-full font-medium">
                {subtitle}
              </span>
            )}
            {date && (
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {date}
              </div>
            )}
          </div>
          <CardTitle className="text-xl text-ocean-primary group-hover:text-teal-accent transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Tags + Actions pinned to bottom */}
        <CardContent className="mt-auto">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {/* Primary: open modal */}
            <Button
              size="sm"
              className="bg-ocean-primary hover:bg-ocean-light"
              onClick={() => setOpen(true)}
            >
              <Info className="w-4 h-4 mr-2" />
              Learn more
            </Button>

            {/* Extra links */}
            {links.map(({ label, url, icon = "external", variant = "outline" }) => {
              const Icon = iconMap[icon] ?? ExternalLink;
              return (
                <Button
                  key={label}
                  size="sm"
                  variant={variant}
                  className={variant === "outline" ? "border-ocean-primary/20 hover:bg-ocean-primary/5" : ""}
                  onClick={() => window.open(url, "_blank")}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-6">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="flex items-center gap-3 text-sm text-muted-foreground">
              {subtitle && (
                <span className="px-3 py-1 bg-teal-accent/10 text-teal-accent rounded-full">
                  {subtitle}
                </span>
              )}
              {date && (
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" /> {date}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          {/* Gallery */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mt-2">
              {images.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg">
                  <img src={src} alt={`${title} ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Rich content */}
          {contentHtml && (
            <div
              className="prose prose-sm sm:prose lg:prose-lg max-w-none mt-4"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          )}

          {/* Modal footer actions */}
          {links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {links.map(({ label, url, icon = "external", variant = "outline" }) => {
                const Icon = iconMap[icon] ?? ExternalLink;
                return (
                  <Button
                    key={`modal-${label}`}
                    size="sm"
                    variant={variant}
                    className={variant === "outline" ? "border-ocean-primary/20 hover:bg-ocean-primary/5" : ""}
                    onClick={() => window.open(url, "_blank")}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </Button>
                );
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShowcaseCard;

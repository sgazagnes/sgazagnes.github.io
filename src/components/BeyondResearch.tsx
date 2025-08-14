// src/pages/BeyondResearch.tsx
import ShowcaseCard from "@/components/ShowcaseCard";

// Example images (replace with yours)
import feelGoodCover from "@/assets/logoGP.png";
import fgnShot2 from "@/assets/FGN_entry.jpg";
import fgnShot1 from "@/assets/FGN_black.jpg";
import fgnShot3 from "@/assets/FGN_news.jpg";

import outreachCover from "@/assets/educ.png";
import outreach1 from "@/assets/IMG-20240621-WA0015.jpg";
import outreach2 from "@/assets/IMG-20240711-WA0017.jpg";

// import teachingCover from "@/assets/teaching/cover.jpg";
// import teaching1 from "@/assets/teaching/shot1.jpg";
// import teaching2 from "@/assets/teaching/shot2.jpg";

import { Calendar, ExternalLink, BookOpen, Users, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const beyondProjects = [
  {
    id: "feel-good-news",
    type: "Mobile App",
    audience: "General Public",
    title: "FeelGoodNews",
    subtitle: "Your daily dose of uplifting news",
    date: "2025",
    description: "A mobile app delivering good news every day...",
    image: feelGoodCover, // right-side hero image
    images: [feelGoodCover, fgnShot1, fgnShot3, fgnShot2], // gallery thumbnails under date
    actions: [
      {
        label: "Download App",
        variant: "default",
        url: "https://play.google.com/store/apps/details?id=com.simongazagnes.feelgoodnews",
        icon: <ExternalLink className="w-4 h-4 mr-2" />,
      },
    ],
  },
  {
    id: "outreach-talks",
    type: "Public Speaking",
    audience: "Students & General Public",
    title: "AI & Astrophysics Outreach",
    subtitle: "Public Talks & Science Events",
    date: "2023–2025",
    description:
      "Delivered talks on astrophysics and AI to schools or public events. Available for conferences, workshops, and educational events",
    image: outreachCover,
    images: [outreach1, outreach2],
    actions: [
      {
        label: "Request Speaker",
        variant: "outline",
        url: "mailto:sgazagnes@gmail.com",
        icon: <ExternalLink className="w-4 h-4 mr-2" />,
      },
    ],
  },
  //   {
  //     id: "teaching-physics",
  //     type: "Teaching",
  //     audience: "Students & Educators",
  //     title: "Physics & Data Science Education",
  //     subtitle: "Mentoring and course design",
  //     date: "Ongoing",
  //     description:
  //       "Course design and mentoring in physics, Python, and machine learning. From fundamentals to applied research projects, with problem-solving workshops.",
  //     actions: [
  //       { label: "Contact", url: "mailto:youremail@example.com?subject=Teaching%20Inquiry", variant: "default", icon: <ExternalLink className="w-4 h-4 mr-2" /> },
  //       { label: "Syllabus", url: "/beyond/teaching", variant: "outline" },
  //     ],
  //   },
];

export default function BeyondResearch() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImages(null);
  };
  // const openLightbox = (imgs: string[], idx: number) => {
  //   setLightboxImages(imgs);
  //   setLightboxIndex(idx);
  //   setLightboxOpen(true);
  // };

  const prevImage = () =>
    setLightboxIndex(
      (i) => (i - 1 + lightboxImages.length) % lightboxImages.length
    );
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % lightboxImages.length);
  return (
    <section id="beyond" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-primary mb-6">
            Beyond Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Apps, outreach, and teaching—turning ideas into tools, talks, and
            learning experiences.
          </p>
        </div>

        {/* Main list */}
        <div className="grid gap-8">
          {beyondProjects.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-accent/20 shadow-elegant"
            >
              <CardHeader>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 border border-purple-500/20">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {item.type}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 border border-green-500/20">
                    <Users className="w-3 h-3 mr-1" />
                    {item.audience}
                  </span>
                </div>

                {/* Title + subtitle */}
                <CardTitle className="text-2xl md:text-3xl text-ocean-primary mb-2">
                  {item.title}
                </CardTitle>
                <p className="text-lg font-medium text-teal-accent mb-3">
                  {item.subtitle}
                </p>

                {/* Date */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </span>
                </div>

                {/* inline gallery under the date */}
                {item.images?.length > 0 && (
                  <div className="mb-5 flex flex-wrap items-start gap-3">
                    {item.images.map((src: string, i: number) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => openLightbox(item.images!, i)}
                        className="group rounded-md bg-muted/50 hover:bg-muted transition-colors p-0"
                      >
                        <div className="h-32 w-44 sm:h-36 sm:w-52 md:h-40 md:w-60 rounded-md overflow-hidden flex items-center justify-center">
                          <img
                            src={src}
                            alt={`${item.title} ${i + 1}`}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {lightboxImages && (
                  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    {/* Close button */}
                    <button
                      onClick={closeLightbox}
                      className="absolute top-4 right-4 text-white text-3xl font-bold"
                    >
                      ×
                    </button>

                    {/* Image */}
                    <div className="max-w-full max-h-full flex items-center justify-center">
                      <img
                        src={lightboxImages[currentIndex]}
                        alt="Expanded"
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                      />
                    </div>

                    {/* Navigation */}
                    {lightboxImages.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setCurrentIndex((prev) =>
                              prev === 0 ? lightboxImages.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-4 text-white text-4xl"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() =>
                            setCurrentIndex((prev) =>
                              prev === lightboxImages.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="absolute right-4 text-white text-4xl"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {item.actions.map((action) => (
                    <Button
                      key={action.label}
                      variant={action.variant}
                      onClick={() => window.open(action.url, "_blank")}
                    >
                      {action.icon}
                      {action.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA cards */}
        {/* <div className="mt-12 grid md:grid-cols-2 gap-8"> */}
        {/* <Card className="p-6 border-teal-accent/20 bg-gradient-to-br from-teal-accent/5 to-transparent">
            <h3 className="text-xl font-bold text-ocean-primary mb-4">
              Speaking Engagements
            </h3>
            <p className="text-muted-foreground mb-4">
              Available for conferences, workshops, and educational events
            </p>
            <Button
              variant="outline"
              onClick={() => window.open("mailto:youremail@example.com?subject=Speaking%20Request", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Request Speaker
            </Button>
          </Card> */}

        {/* <Card className="p-6 border-ocean-primary/20 bg-gradient-to-br from-ocean-primary/5 to-transparent">
            <h3 className="text-xl font-bold text-ocean-primary mb-4">
              Educational Resources
            </h3>
            <p className="text-muted-foreground mb-4">
              Free materials and tutorials for educators and students
            </p>
            <Button variant="outline" onClick={() => window.open("/resources", "_blank")}>
              <BookOpen className="w-4 h-4 mr-2" />
              Access Resources
            </Button>
          </Card> */}
        {/* </div> */}
      </div>
    </section>
  );
}

import { BrainCircuit, Layers3, Network, type LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  "heterogeneous compute": Layers3,
  ai: BrainCircuit,
  "large computational problems": Network,
};

const focusAreas = [
  {
    category: "heterogeneous compute",
    title: "Hardware–software co-design",
    description:
      "Work across models, software, and compute architecture, with attention to the constraints of the target system.",
    evidence: "TNO · heterogeneous compute orchestration | Hoursec · FPGA inference",
  },
  {
    category: "ai",
    title: "AI systems & harnesses",
    description:
      "Connect AI development with the surrounding tools and practices, from edge inference to company AI adoption.",
    evidence: "TNO · AI harnesses | Asteria · company AI practices",
  },
  {
    category: "large computational problems",
    title: "Computational science at scale",
    description:
      "Apply high-performance computing and statistical methods to data-intensive scientific problems in astronomy and particle physics.",
    evidence: "LOTF · particle tracking | DISCCOFAN · distributed image processing",
  },
];

const TechnicalFocus = () => (
  <section className="section focus-section" id="focus" aria-labelledby="focus-heading">
    <div className="focus-heading">
      <h2 className="sec-label" id="focus-heading">
        TECHNICAL FOCUS
      </h2>
      {/* <p className="focus-intro">
        I work at the intersection of compute architectures, AI, and large scientific problems.
      </p> */}
    </div>

    <div className="focus-flow">
      <svg className="focus-contours" viewBox="0 0 560 420" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M570 20C470 5 406 39 398 96c-8 58-67 90-130 65-62-25-124-16-164 20-36 33-70 40-116 27" />
        <path d="M570 55C478 40 427 67 416 121c-12 58-73 93-137 67-61-25-119-13-159 27-35 35-78 44-132 26" />
        <path d="M570 91C487 76 446 101 433 149c-15 58-78 96-144 70-60-23-113-8-152 33-34 37-84 50-149 29" />
        <path d="M570 128C498 114 464 138 449 179c-18 53-80 99-148 73-58-22-107-4-145 39-34 39-91 55-168 32" />
        <path d="M570 166C512 153 480 175 464 211c-22 49-84 99-151 77-59-20-102 2-142 45-35 38-97 59-183 36" />
      </svg>
      <div className="focus-list">
        {focusAreas.map((area) => {
          const Icon = categoryIcons[area.category.toLowerCase()];

          return (
            <article className="focus-entry" key={area.category}>
              <span className="focus-entry-index" aria-hidden="true">
                {Icon && <Icon size={18} strokeWidth={1.7} aria-hidden="true" />}
              </span>
              <div className="focus-entry-copy">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <div className="focus-evidence">
                <span className="focus-evidence-label">Projects</span>
                <p>{area.evidence}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default TechnicalFocus;
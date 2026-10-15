const engagements = [
  {
    number: "01",
    field: "Astronomy & science",
    title: "Workshops",
    description:
      "Astronomy-rooted sessions drawn from my research: how we move from observation to a model, and test an explanation against evidence.",
    linkLabel: "See workshops at Asteria",
    href: "https://asteria-education.com/workshops",
    external: true,
  },
  {
    number: "02",
    field: "AI practice for companies",
    title: "Consultancy",
    description:
      "For teams deciding where AI belongs: define the problem, choose a credible way to test it, and set practices before adoption.",
    linkLabel: "Discuss an AI-practice engagement",
    href: "mailto:simon.gazagnes@tno.nl?subject=AI%20practice%20consultancy",
    external: false,
  },
];

const Engagements = () => (
  <section className="section mission-section" id="practice" aria-labelledby="practice-heading">
    <div className="sec-label">WORKSHOPS &amp; CONSULTANCY</div>
    {/* <div className="mission-lede">
      <h2 id="practice-heading">Everything starts with curiosity.</h2>
      <p>
        Through Asteria Education, I bring astronomy research into science workshops and help companies think carefully about where AI fits. 
      </p>
    </div> */}
    <div className="mission-paths">
      {engagements.map((engagement) => (
        <article className="mission-path" key={engagement.number}>
          <span className="mission-field">
            {engagement.field}
          </span>
          <h3>{engagement.title}</h3>
          <p>{engagement.description}</p>
          <a
            className="mission-link"
            href={engagement.href}
            target={engagement.external ? "_blank" : undefined}
            rel={engagement.external ? "noopener noreferrer" : undefined}
          >
            {engagement.linkLabel}
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Engagements;

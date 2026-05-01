const Background = () => {
  const experience = [
    { 
      role: "Edge AI Engineer", 
      company: "Hoursec", 
      date: "Nov 2025 – Present" 
    },
    { 
      role: "Technical PM — Software & Systems", 
      company: "Terma GmbH, Vienna", 
      date: "Feb 2025 – May 2025" 
    },
    { 
      role: "AI Consultant (ML, Deep Learning, Agentic)", 
      company: "Freelance", 
      date: "Oct 2024 – Present" 
    },
    { 
      role: "Research Fellow — Computational AI for Astrophysics", 
      company: "UT Austin", 
      date: "Oct 2021 – Oct 2024" 
    },
    { 
      role: "Doctoral Researcher — High-Performance Algorithms", 
      company: "University of Groningen", 
      date: "Sept 2017 – Sept 2021" 
    }
  ];

  const education = [
    { 
      degree: "Ph.D. Data Science & Systems Complexity", 
      institution: "Univ. of Groningen", 
      date: "2017 – 2021" 
    },
    { 
      degree: "MSc Astrophysics & Space Science", 
      institution: "Univ. of Toulouse III", 
      date: "2016 – 2017" 
    },
    { 
      degree: "Double MSc Electrical Engineering & Signal Processing", 
      institution: "INSA Lyon", 
      date: "2011 – 2016" 
    }
  ];

  const awards = [
    { 
      title: "Postdoctoral Excellence Award", 
      issuer: "UT Austin", 
      date: "2023" 
    },
    { 
      title: "Ph.D. Cum Laude Distinction (Top 5%)", 
      issuer: "Univ. of Groningen", 
      date: "2021" 
    }
  ];

  return (
    <div className="section" id="background">
      <div className="sec-label">BACKGROUND</div>

      {/* High-Impact Stat Grid */}
      <div className="stat-grid" style={{ marginBottom: '48px' }}>
        <div className="stat-card">
          <span className="stat-number">30</span>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block' }}>
            Publications spanning CS, Astro, Physics & BioMed<br/>
            (12 first-author)
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-number">$350k+</span>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', whiteSpace: 'pre-line' }}>
            Research grants{"\n"}as Lead PI
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-number">Ph.D.</span>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', whiteSpace: 'pre-line' }}>
            Cum laude (Top 5%){"\n"}Univ. of Groningen
          </span>
        </div>
      </div>

      {/* Experience Timeline */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Experience
        </h3>
        {/* Added Flex/Gap to tightly control the spacing between rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '00px' }}>
          {experience.map((item, index) => (
            <div className="tl-row" key={index} style={{ margin: 0, paddingBottom: '8px', paddingTop: '8px' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)' }}>
                  {item.role}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  {' — '}{item.company}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-mono)', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Education
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          {education.map((item, index) => (
            <div className="tl-row" key={index} style={{ margin: 0, paddingBottom: '8px', paddingTop: '8px' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)' }}>
                  {item.degree}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  {' — '}{item.institution}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-mono)', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Timeline */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Awards & Recognition
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          {awards.map((item, index) => (
           <div className="tl-row" key={index} style={{ margin: 0, paddingBottom: '8px', paddingTop: '8px' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)' }}>
                  {item.title}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  {' — '}{item.issuer}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-mono)', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Background;
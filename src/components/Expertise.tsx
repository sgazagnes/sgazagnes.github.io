const Expertise = () => {
  const skills = [
    { 
      category: "Machine Learning & Computer Vision", 
      level: "95%", 
      tech: "PyTorch · TensorFlow · Computer Vision · Mathematical Morphology · Edge AI (Quantization, Pruning, Model Optimization)" 
    },
    { 
      category: "Statistical Modeling & Inference", 
      level: "95%", 
      tech: "MCMC · Bayesian Inference · Regression · Statistical Modeling" 
    },
    { 
      category: "High-Performance Computing", 
      level: "90%", 
      tech: "C / C++ · MPI · OpenMP · Slurm · Linux · Bash" 
    },
    { 
      category: "Systems & Application Engineering", 
      level: "85%", 
      tech: "LLM Agents (CrewAI, LangChain) · React (Native) · TypeScript · Next.js" 
    },
  ];

  return (
    <div className="section" id="expertise">
      <div className="sec-label">EXPERTISE — Core Methodologies & Stack</div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px 48px' 
      }}>
        
        {skills.map((skill) => (
          <div key={skill.category} style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Header row: Category */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text-main)' }}>
                {skill.category}
              </span>
            </div>

            {/* BULLETPROOF BAR */}
            <div style={{ 
              width: '100%', 
              height: '6px', 
              backgroundColor: 'var(--color-bg-card)', 
              borderRadius: '4px', 
              marginBottom: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: skill.level, 
                height: '100%', 
                backgroundColor: 'var(--color-accent-sage)', 
                borderRadius: '4px',
                transition: 'width 1s ease-in-out'
              }}></div>
            </div>

            {/* Tech Stack Footer */}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              {skill.tech}
            </span>
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default Expertise;
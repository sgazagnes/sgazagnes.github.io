import { Mail, Github, Linkedin, Smartphone } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "sgsgazagnes@gmail.com",
      href: "mailto:sgsgazagnes@gmail.com",
      icon: <Mail size={20} strokeWidth={1.5} />
    },
    {
      label: "GitHub",
      value: "github.com/sgazagnes",
      href: "https://github.com/sgazagnes",
      icon: <Github size={20} strokeWidth={1.5} />
    },
    {
      label: "LinkedIn",
      value: "in/sgazagnes",
      href: "https://linkedin.com/in/sgazagnes",
      icon: <Linkedin size={20} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="section" id="contact" style={{ marginBottom: '120px' }}>
      <div className="sec-label">CONTACT — Let's build something</div>

      <div style={{ maxWidth: '900px' }}>
        <p style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: '16px', 
          lineHeight: 1.6, 
          color: 'var(--color-text-main)', 
          marginBottom: '32px' 
        }}>
          Currently open for technical consulting, algorithm optimization, and edge AI opportunities. Whether you need to compress a neural network, scale an HPC pipeline, or build a proof-of-concept from scratch, I can help.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {contactLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-bg-card)',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-bg-card)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: 'var(--color-text-muted)' }}>
                  {link.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 500 }}>
                  {link.label}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {link.value}
              </span>
            </a>
          ))}

          {/* Phone Number (Non-link item)
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--color-bg-card)',
            color: 'var(--color-text-main)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ color: 'var(--color-text-muted)' }}>
                <Smartphone size={20} strokeWidth={1.5} />
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 500 }}>
                Phone (NL / EU)
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
              +33 6 82 77 67 92
            </span>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default Contact;
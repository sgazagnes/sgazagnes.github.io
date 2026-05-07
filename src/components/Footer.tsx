import { Github, Linkedin, BookOpen, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      borderTop: '1px solid var(--color-border)', 
      padding: '64px 24px 32px 24px',
      marginTop: '24px',
      backgroundColor: 'var(--color-bg-main)' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '64px' 
      }}>
        
        {/* Top Section */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          flexWrap: 'wrap', 
          gap: '40px' 
        }}>
          
          {/* Left — Name & Tagline */}
          <div>
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '24px', 
              color: 'var(--color-text-main)', 
              display: 'block', 
              marginBottom: '8px' 
            }}>
              Simon Gazagnes
            </span>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '11px', 
              letterSpacing: '0.1em', 
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase'
            }}>
              AI Engineer & Researcher · Ph.D.
            </span>
          </div>

          {/* Right — Links Grid */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            
            {/* Index Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '10px', 
                letterSpacing: '0.15em', 
                color: 'var(--color-text-muted)', 
                textTransform: 'uppercase' 
              }}>
                Index
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Work', 'Expertise', 'Background', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'var(--color-text-main)',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '10px', 
                letterSpacing: '0.15em', 
                color: 'var(--color-text-muted)', 
                textTransform: 'uppercase' 
              }}>
                Connect
              </span>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://github.com/sgazagnes" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com/in/sgazagnes" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
                <a href="https://scholar.google.com/citations?user=simongazagnes" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <BookOpen size={18} strokeWidth={1.5} />
                </a>
                <a href="mailto:sgazagnes@gmail.com" style={iconStyle}>
                  <Mail size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section — Copyright & Location */}
        <div style={{ 
          borderTop: '1px solid var(--color-border)', 
          paddingTop: '24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '11px', 
            color: 'var(--color-text-muted)',
            letterSpacing: '0.05em'
          }}>
            © {currentYear} SIMON GAZAGNES. ALL RIGHTS RESERVED.
          </span>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '11px', 
            color: 'var(--color-text-muted)',
            letterSpacing: '0.05em'
          }}>
            GRONINGEN, NL 
          </span>
        </div>

      </div>
    </footer>
  );
};

// Reusable inline style for the social icons
const iconStyle = {
  color: 'var(--color-text-muted)',
  transition: 'color 0.2s',
  display: 'inline-flex',
};

export default Footer;
// 1. Import the image at the top of your file
// (Make sure the filename matches exactly what you saved)
import profilePic from '@/assets/simon.JPG'; 

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section" id="hero">
      <div className="hero-header">
        <div className="profile-group">
          {/* 2. Replace the hardcoded URL with your imported variable */}
          <img 
            src={profilePic} 
            alt="Simon Gazagnes" 
            className="profile-img" 
          />
          <div>
            <h1 className="name-title">Simon Gazagnes</h1>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent-sage)', letterSpacing: '0.05em' }}>
              AI Engineer & Researcher
            </span>
          </div>
        </div>
        
        <div className="nav-links">
          <span onClick={() => scrollToSection('work')}>work</span>
          <span onClick={() => scrollToSection('expertise')}>expertise</span>
          <span onClick={() => scrollToSection('background')}>background</span>
          <span onClick={() => scrollToSection('contact')}>contact</span>
        </div>
      </div>
      
      <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '540px', marginTop: '24px' }}>
        I build computational systems designed for massive data scale, and optimize existing architectures for radical energy efficiency
      </p>
    </div>
  );
};

export default Hero;
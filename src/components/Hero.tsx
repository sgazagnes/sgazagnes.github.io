// 1. Import the image at the top of your file
// (Make sure the filename matches exactly what you saved)
import profilePic from '@/assets/simon.JPG'; 

const Hero = () => {
  return (
    <section className="section hero-section" id="hero" aria-labelledby="hero-title">
      <header className="hero-header">
        <div className="profile-group">
          <img
            src={profilePic}
            alt="Simon Gazagnes"
            className="profile-img"
          />
          <div className="profile-copy">
            <h1 className="name-title" id="hero-title">Simon Gazagnes</h1>
            <span className="hero-role">Scientist at TNO</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#focus">focus</a>
          <a href="#practice">practice</a>
          <a href="#background">background</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <div className="hero-copy">
        <h4 className="hero-statement">I work on computing, AI, and the problems they can solve.</h4>
        <p className="hero-intro">
          At TNO, I work on hardware–software co-design, heterogeneous compute, and AI harnesses. Through Asteria, I deliver astronomy-based science workshops and advise companies on AI practices.
        </p>
      </div>
      <div className="hero-actions">
        <a className="hero-action-primary" href="#contact">Discuss leadership &amp; advisory</a>
        <a className="hero-action-secondary" href="#work">Explore selected work <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
};

export default Hero;
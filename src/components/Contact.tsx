import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section" id="contact" style={{ marginBottom: '0px' }}>
      <h2 className="sec-label">CONTACT</h2>
      <div className="contact-panel">
        <div className="contact-copy">
          <span className="contact-kicker">Technical leadership · AI strategy · Advisory</span>
          <h3>Preparing what comes next.</h3>
          <p>For conversations about technology direction, AI practice, or collaboration, get in touch.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-action contact-action-primary" href="mailto:simon.gazagnes@tno.nl">
            <Mail size={19} strokeWidth={1.7} aria-hidden="true" />
            <span>
              <span className="contact-action-label">Email</span>
              <span className="contact-action-value">simon.gazagnes@tno.nl</span>
            </span>
          </a>
          <a className="contact-action contact-action-secondary" href="https://linkedin.com/in/sgazagnes" target="_blank" rel="noopener noreferrer">
            <Linkedin size={19} strokeWidth={1.7} aria-hidden="true" />
            <span>Connect on LinkedIn</span>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
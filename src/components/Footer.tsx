const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-semibold">Simon Gazagnes</span>
          </div>
          <p className="text-white/70 mb-4">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
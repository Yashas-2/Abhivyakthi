import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 

        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content fade-in">
        <div className="hero-logo">
          <img 
            src="/abhivyakti-logo.jpg" 
            alt="Abhivyakthi Logo" 
            className="hero-logo-img"
          />
        </div>
        <h1 className="hero-title">ABHIVYAKTHI</h1>
        <p className="hero-subtitle">Cultural Association of Malnad College of Engineering</p>
        <p className="hero-description">
          Where talent finds a stage and culture finds heart.
        </p>
        <button 
          className="hero-cta-btn btn"
          onClick={() => {
            const aboutElement = document.getElementById('about');
            if (aboutElement) {
              aboutElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Explore Abhivyakthi
        </button>
      </div>
      
      {/* Scroll indicator with arrow */}
      <div 
        className="scroll-indicator"
        onClick={() => {
          const aboutElement = document.getElementById('about');
          if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span>↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
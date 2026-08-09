import React, { useEffect, useState } from 'react';
import Icon from './Icons';

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 15;
      const moveY = (clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section awwwards-hero">
      {/* Immersive Edge-to-Edge Background Artwork with Parallax & Lighting */}
      <div 
        className="hero-artwork-background"
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0) scale(1.04)`
        }}
      >
        <div className="artwork-layer-image"></div>
        <div className="artwork-vignette-overlay"></div>
        <div className="artwork-god-rays"></div>
        <div className="artwork-film-grain"></div>

        {/* Floating Gold Embers & Dust Particles */}
        <div className="floating-embers">
          <span className="ember e1"></span>
          <span className="ember e2"></span>
          <span className="ember e3"></span>
          <span className="ember e4"></span>
          <span className="ember e5"></span>
          <span className="ember e6"></span>
          <span className="ember e7"></span>
          <span className="ember e8"></span>
        </div>
      </div>

      {/* Main Center Content Wrapper */}
      <div 
        className="hero-content awwwards-content"
        style={{
          transform: `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px, 0)`
        }}
      >
        {/* Above Title: Golden Divider & Glowing Diamond Ornament */}
        <div className="awwwards-ornament-header">
          <span className="thin-gold-line-left"></span>
          <div className="glowing-diamond">
            <span className="diamond-icon">❖</span>
          </div>
          <span className="thin-gold-line-right"></span>
        </div>

        {/* Hero Main Title */}
        <h1 className="hero-title-cinzel">ABHIVYAKTHI</h1>

        {/* Under Title Section */}
        <div className="hero-under-title">
          <span className="under-title-white">CULTURAL ASSOCIATION OF</span>
          <span className="under-title-gold">MALNAD COLLEGE OF ENGINEERING</span>
        </div>

        {/* Tagline */}
        <p className="hero-tagline-serif">
          Where <span className="tagline-gold-highlight">talent</span> finds a stage<br />
          and <span className="tagline-gold-highlight">culture</span> finds heart.
        </p>

        {/* 56px Height Premium Pill Button */}
        <div className="hero-cta-box">
          <button className="awwwards-pill-button" onClick={scrollToAbout}>
            <div className="button-icon-circle">
              <Icon name="arrow-right" size={16} color="#F7D76B" />
            </div>
            <span className="button-label">Explore Abhivyakthi</span>
            <div className="button-flare-sweep"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator-awwwards" onClick={scrollToAbout}>
          <div className="scroll-glass-circle">
            <span className="scroll-arrow-icon">∨</span>
          </div>
          <div className="glowing-dots-column">
            <span className="dot-node d1"></span>
            <span className="dot-node d2"></span>
            <span className="dot-node d3"></span>
            <span className="dot-node d4"></span>
          </div>
        </div>
      </div>

      {/* Bottom Flowing Golden Light Waves & Mandala Pattern */}
      <div className="hero-bottom-mandala-horizon">
        <div className="golden-light-wave"></div>
        <div className="mandala-pattern-overlay"></div>
      </div>
    </section>
  );
};

export default HeroSection;

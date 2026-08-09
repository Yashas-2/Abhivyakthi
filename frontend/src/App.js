import React, { useState, useEffect } from "react";
import './App.css';
import './premium-theme.css';


// Import components for different sections
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WingsSection from './components/WingsSection';
import CoordinatorsSection from './components/CoordinatorsSection';
import EventsGallery from './components/EventsGallery';
import AchievementsSection from './components/AchievementsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

import Icon from './components/Icons';
import GlobalBackground from './components/GlobalBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section when activeSection is set manually by clicking
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy: auto-detect active section as user scrolls down the page
  useEffect(() => {
    const sectionIds = ['home', 'about', 'wings', 'achievements', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <GlobalBackground />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <img src="/new_logo.jpg" alt="Abhivyakthi Logo" className="logo" />
          <div className="nav-brand-text">
            <img src="/abhivyakthi_gold.png" alt="abhivyakthi" className="brand-title-img" />
            <p className="brand-subtitle">CULTURAL ASSOCIATION</p>
          </div>
        </div>
        
        {/* Mobile Circular 48x48px Glass Hamburger Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only-nav">
          <button onClick={() => handleNavClick('home')} className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}>
            <span className="nav-icon"><Icon name="home" size={16} /></span>
            <span>Home</span>
          </button>
          <button onClick={() => handleNavClick('about')} className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}>
            <span className="nav-icon"><Icon name="about" size={16} /></span>
            <span>About</span>
          </button>
          <button onClick={() => handleNavClick('wings')} className={`nav-btn ${activeSection === 'wings' ? 'active' : ''}`}>
            <span className="nav-icon"><Icon name="wings" size={16} /></span>
            <span>Wings</span>
          </button>
          <button onClick={() => handleNavClick('achievements')} className={`nav-btn ${activeSection === 'achievements' ? 'active' : ''}`}>
            <span className="nav-icon"><Icon name="achievements" size={16} /></span>
            <span>Achievements</span>
          </button>
          <button onClick={() => handleNavClick('gallery')} className={`nav-btn ${activeSection === 'gallery' ? 'active' : ''}`}>
            <span className="nav-icon"><Icon name="gallery" size={16} /></span>
            <span>Gallery</span>
          </button>
          <button onClick={() => handleNavClick('contact')} className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`}>
            <span className="nav-icon"><Icon name="contact" size={16} /></span>
            <span>Contact</span>
          </button>
        </div>
      </nav>

      {/* Premium Mobile Full-Screen Glass Menu Overlay */}
      <div className={`mobile-fullscreen-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="overlay-header">
          <div className="nav-brand">
            <img src="/new_logo.jpg" alt="Abhivyakthi Logo" className="logo" />
            <div className="nav-brand-text">
              <img src="/abhivyakthi_gold.png" alt="abhivyakthi" className="brand-title-img" />
              <p className="brand-subtitle">CULTURAL ASSOCIATION</p>
            </div>
          </div>
          <button 
            className="mobile-close-btn" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        <div className="overlay-menu-items">
          <button onClick={() => handleNavClick('home')} className={`mobile-overlay-btn ${activeSection === 'home' ? 'active' : ''}`}>
            <span className="overlay-icon"><Icon name="home" size={20} /></span>
            <span>Home</span>
          </button>
          <button onClick={() => handleNavClick('about')} className={`mobile-overlay-btn ${activeSection === 'about' ? 'active' : ''}`}>
            <span className="overlay-icon"><Icon name="about" size={20} /></span>
            <span>About</span>
          </button>
          <button onClick={() => handleNavClick('wings')} className={`mobile-overlay-btn ${activeSection === 'wings' ? 'active' : ''}`}>
            <span className="overlay-icon"><Icon name="wings" size={20} /></span>
            <span>Wings</span>
          </button>
          <button onClick={() => handleNavClick('achievements')} className={`mobile-overlay-btn ${activeSection === 'achievements' ? 'active' : ''}`}>
            <span className="overlay-icon"><Icon name="achievements" size={20} /></span>
            <span>Achievements</span>
          </button>
          <button onClick={() => handleNavClick('gallery')} className={`mobile-overlay-btn ${activeSection === 'gallery' ? 'active' : ''}`}>
            <span className="overlay-icon"><Icon name="gallery" size={20} /></span>
            <span>Gallery</span>
          </button>
          <button onClick={() => handleNavClick('contact')} className={`mobile-overlay-btn ${activeSection === 'contact' ? 'active' : ''}`}>
            <span className="overlay-icon"><Icon name="contact" size={20} /></span>
            <span>Contact</span>
          </button>
        </div>

        <div className="overlay-footer">
          <div className="overlay-social-links">
            <a href="https://instagram.com/abhivyakthi_mce" target="_blank" rel="noopener noreferrer" className="overlay-social-btn">
              <span>Instagram</span>
            </a>
            <a href="https://youtube.com/@abhivyakthi_mce" target="_blank" rel="noopener noreferrer" className="overlay-social-btn">
              <span>YouTube</span>
            </a>
          </div>
          <p className="overlay-copyright">Copyright © Abhivyakthi. All rights reserved.</p>
        </div>
      </div>
      
      <main>
        <section id="home" className="section" style={{ padding: 0, minHeight: 'auto' }}>
          <HeroSection />
        </section>
        
        {/* Divider after Hero */}
        <div className="section-divider"></div>
        
        <section id="about" className="section">
          <AboutSection />
        </section>
        
        {/* Divider after About */}
        <div className="section-divider"></div>
        
        <section id="coordinators" className="section">
          <CoordinatorsSection />
        </section>
        
        {/* Divider after Coordinators */}
        <div className="section-divider"></div>
        
        <section id="wings" className="section">
          <WingsSection />
        </section>
        
        {/* Divider after Wings */}
        <div className="section-divider"></div>
        
        {/* Temporarily hidden as requested
        <section id="events" className="section">
          <EventsGallery />
        </section>
        
        <div className="section-divider"></div>
        */}
        
        <section id="achievements" className="section">
          <AchievementsSection />
        </section>
        
        {/* Divider after Achievements */}
        <div className="section-divider"></div>

        <section id="gallery" className="section">
          <GallerySection />
        </section>

        {/* Divider after Gallery */}
        <div className="section-divider"></div>
        
        <section id="contact" className="section">
          <ContactSection />
        </section>
      </main>
      
      <footer>
        <p>&copy; 2026 Abhivyakthi - Cultural Association of MCE</p>
      </footer>
    </div>
  );
}

export default App;
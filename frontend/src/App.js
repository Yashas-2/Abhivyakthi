import React, { useState, useEffect } from "react";
import './App.css';

// Import components for different sections
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WingsSection from './components/WingsSection';
import CoordinatorsSection from './components/CoordinatorsSection';
import EventsGallery from './components/EventsGallery';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section when it changes
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after selection
    setIsMenuOpen(false);
  }, [activeSection]);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <img src="/new_logo.jpg" alt="Abhivyakthi Logo" className="logo" />
          <div className="nav-brand-text">
            <img src="/abhivyakthi_gold.png" alt="abhivyakthi" className="brand-title-img" />
            <p className="brand-subtitle">CULTURAL ASSOCIATION</p>
          </div>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => setActiveSection('home')} className="nav-btn">
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </button>
          <button onClick={() => setActiveSection('about')} className="nav-btn">
            <span className="nav-icon">ℹ️</span>
            <span>About</span>
          </button>
          <button onClick={() => setActiveSection('wings')} className="nav-btn">
            <span className="nav-icon">🎭</span>
            <span>Wings</span>
          </button>
          <button onClick={() => setActiveSection('coordinators')} className="nav-btn">
            <span className="nav-icon">👥</span>
            <span>Team</span>
          </button>
          <button onClick={() => setActiveSection('events')} className="nav-btn">
            <span className="nav-icon">📅</span>
            <span>Events</span>
          </button>
          <button onClick={() => setActiveSection('achievements')} className="nav-btn">
            <span className="nav-icon">🏆</span>
            <span>Achievements</span>
          </button>
          <button onClick={() => setActiveSection('contact')} className="nav-btn">
            <span className="nav-icon">📞</span>
            <span>Contact</span>
          </button>
        </div>
      </nav>
      
      <main>
        <section id="home" className="section">
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
        
        <section id="events" className="section">
          <EventsGallery />
        </section>
        
        {/* Divider after Events */}
        <div className="section-divider"></div>
        
        <section id="achievements" className="section">
          <AchievementsSection />
        </section>
        
        {/* Divider after Achievements */}
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
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
        </div>
        
        <div className="nav-brand-text">
          <h1 className="brand-title">ABHIVYAKTHI</h1>
          <p className="brand-subtitle">Cultural Association</p>
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
          <div className="cultural-roaming-elements">
            <div className="cultural-element music" style={{ top: '10%', left: '5%' }}>♪</div>
            <div className="cultural-element dance" style={{ top: '20%', left: '85%' }}>💃</div>
            <div className="cultural-element art" style={{ top: '70%', left: '15%' }}>🎨</div>
            <div className="cultural-element drama" style={{ top: '40%', left: '75%' }}>🎭</div>
            <div className="cultural-element cultural" style={{ top: '15%', left: '25%' }}>🌟</div>
            <div className="cultural-element performance" style={{ top: '60%', left: '90%' }}>🎤</div>
            <div className="cultural-element focus" style={{ top: '85%', left: '50%' }}></div>
          </div>
          <HeroSection />
        </section>
        
        {/* Divider after Hero */}
        <div className="section-divider"></div>
        
        <section id="about" className="section">
          <div className="cultural-roaming-elements">
            <div className="cultural-element music" style={{ top: '10%', left: '5%' }}>♪</div>
            <div className="cultural-element dance" style={{ top: '20%', left: '85%' }}>💃</div>
            <div className="cultural-element art" style={{ top: '70%', left: '15%' }}>🎨</div>
            <div className="cultural-element drama" style={{ top: '40%', left: '75%' }}>🎭</div>
            <div className="cultural-element cultural" style={{ top: '15%', left: '25%' }}>🌟</div>
            <div className="cultural-element performance" style={{ top: '60%', left: '90%' }}>🎤</div>
            <div className="cultural-element focus" style={{ top: '85%', left: '50%' }}>🖌️</div>
          </div>
          <AboutSection />
        </section>
        
        {/* Divider after About */}
        <div className="section-divider"></div>
        
        <section id="coordinators" className="section">
          <div className="cultural-roaming-elements">
            <div className="cultural-element music" style={{ top: '10%', left: '5%' }}>♪</div>
            <div className="cultural-element dance" style={{ top: '20%', left: '85%' }}>💃</div>
            <div className="cultural-element art" style={{ top: '70%', left: '15%' }}>🎨</div>
            <div className="cultural-element drama" style={{ top: '40%', left: '75%' }}>🎭</div>
            <div className="cultural-element cultural" style={{ top: '15%', left: '25%' }}>🌟</div>
            <div className="cultural-element performance" style={{ top: '60%', left: '90%' }}>🎤</div>
            <div className="cultural-element focus" style={{ top: '85%', left: '50%' }}></div>
            <div className="cultural-element heritage" style={{ top: '30%', left: '40%' }}>🕉️</div>
          </div>
          <CoordinatorsSection />
        </section>
        
        {/* Divider after Coordinators */}
        <div className="section-divider"></div>
        
        <section id="wings" className="section">
          <div className="cultural-roaming-elements">
            <div className="cultural-element music" style={{ top: '10%', left: '5%' }}>♪</div>
            <div className="cultural-element dance" style={{ top: '20%', left: '85%' }}>💃</div>
            <div className="cultural-element art" style={{ top: '70%', left: '15%' }}>🎨</div>
            <div className="cultural-element drama" style={{ top: '40%', left: '75%' }}>🎭</div>
            <div className="cultural-element cultural" style={{ top: '15%', left: '25%' }}>🌟</div>
            <div className="cultural-element performance" style={{ top: '60%', left: '90%' }}>🎤</div>
            <div className="cultural-element focus" style={{ top: '85%', left: '50%' }}></div>
            <div className="cultural-element heritage" style={{ top: '30%', left: '40%' }}>🕉️</div>
          </div>
          <WingsSection />
        </section>
        
        {/* Divider after Wings */}
        <div className="section-divider"></div>
        
        <section id="events" className="section">
          <div className="cultural-roaming-elements">
            <div className="cultural-element music" style={{ top: '10%', left: '5%' }}>♪</div>
            <div className="cultural-element dance" style={{ top: '20%', left: '85%' }}>💃</div>
            <div className="cultural-element art" style={{ top: '70%', left: '15%' }}>🎨</div>
            <div className="cultural-element drama" style={{ top: '40%', left: '75%' }}>🎭</div>
            <div className="cultural-element cultural" style={{ top: '15%', left: '25%' }}>🌟</div>
            <div className="cultural-element performance" style={{ top: '60%', left: '90%' }}>🎤</div>
            <div className="cultural-element focus" style={{ top: '85%', left: '50%' }}></div>
            <div className="cultural-element heritage" style={{ top: '30%', left: '40%' }}>🕉️</div>
          </div>
          <EventsGallery />
        </section>
        
        {/* Divider after Events */}
        <div className="section-divider"></div>
        
        <section id="achievements" className="section">
          <div className="cultural-roaming-elements">
            <div className="cultural-element music" style={{ top: '10%', left: '5%' }}>♪</div>
            <div className="cultural-element dance" style={{ top: '20%', left: '85%' }}>💃</div>
            <div className="cultural-element art" style={{ top: '70%', left: '15%' }}>🎨</div>
            <div className="cultural-element drama" style={{ top: '40%', left: '75%' }}>🎭</div>
            <div className="cultural-element cultural" style={{ top: '15%', left: '25%' }}>🌟</div>
            <div className="cultural-element performance" style={{ top: '60%', left: '90%' }}>🎤</div>
            <div className="cultural-element focus" style={{ top: '85%', left: '50%' }}></div>
            <div className="cultural-element heritage" style={{ top: '30%', left: '40%' }}>🕉️</div>
          </div>
          <AchievementsSection />
        </section>
        
        {/* Divider after Achievements */}
        <div className="section-divider"></div>
        
        <section id="contact" className="section">
          <div className="cultural-roaming-elements">
            <div className="cultural-element music" style={{ top: '10%', left: '5%' }}>♪</div>
            <div className="cultural-element dance" style={{ top: '20%', left: '85%' }}>💃</div>
            <div className="cultural-element art" style={{ top: '70%', left: '15%' }}>🎨</div>
            <div className="cultural-element drama" style={{ top: '40%', left: '75%' }}>🎭</div>
            <div className="cultural-element cultural" style={{ top: '15%', left: '25%' }}>🌟</div>
            <div className="cultural-element performance" style={{ top: '60%', left: '90%' }}>🎤</div>
            <div className="cultural-element focus" style={{ top: '85%', left: '50%' }}></div>
            <div className="cultural-element heritage" style={{ top: '30%', left: '40%' }}>🕉️</div>
          </div>
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
import React from 'react';
import Icon from './Icons';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title fade-in">Contact Us</h2>
        <p className="section-subtitle slide-in">
          Reach out to us for collaborations, event bookings, or queries
        </p>
        
        <div className="contact-main-grid">
          {/* Left Side: Contact Information Cards */}
          <div className="contact-details-panel">
            <h3 className="panel-title">Get In Touch</h3>
            
            <div className="contact-info-cards">
              {/* Phone Card */}
              <div className="contact-info-card">
                <div className="card-icon-box">
                  <span className="info-icon"><Icon name="phone" size={22} color="#D4AF37" /></span>
                </div>
                <div className="card-content-box">
                  <h4 className="info-title">Phone Support</h4>
                  <p className="info-text">
                    <a href="tel:+918431627346" className="highlight-link">Varsha Shashikumar : +91 84316 27346</a>
                  </p>
                  <p className="info-caption">Co-ordinator, Abhivyakthi</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-info-card">
                <div className="card-icon-box">
                  <span className="info-icon"><Icon name="email" size={22} color="#D4AF37" /></span>
                </div>
                <div className="card-content-box">
                  <h4 className="info-title">Official Email</h4>
                  <p className="info-text">
                    <a href="mailto:culturalteam.mce@gmail.com" className="highlight-link">culturalteam.mce@gmail.com</a>
                  </p>
                  <p className="info-caption">For fests, sponsorships & collaborations</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-info-card">
                <div className="card-icon-box">
                  <span className="info-icon"><Icon name="location" size={22} color="#D4AF37" /></span>
                </div>
                <div className="card-content-box">
                  <h4 className="info-title">Our Location</h4>
                  <p className="info-text">
                    Malnad College of Engineering, Salagame Road, Hassan, Karnataka, India - 573202
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="social-connection-panel">
              <h4 className="social-panel-title">Connect with our Community</h4>
              <div className="social-buttons-row">
                <a href="https://www.instagram.com/mce_abhivyakthi" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                  <span className="btn-icon"><Icon name="instagram" size={20} /></span> Instagram
                </a>
                <a href="https://youtube.com/@mce_abhivyakthi?si=DokANwZZ2DVqoX3i" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
                  <span className="btn-icon"><Icon name="youtube" size={20} /></span> YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Instagram Portal / QR Code Scan */}
          <div className="contact-qr-panel">
            <h3 className="panel-title">Instagram Scan</h3>
            <p className="qr-description">
              Scan our official Instagram QR code to stay updated with fests, announcements, achievements, and live coverage!
            </p>
            
            <div className="qr-frame-wrapper">
              <img src="/images/insta.jpg" alt="Abhivyakthi Instagram QR Code" className="premium-qr-code" />
              <div className="qr-glow-effect"></div>
            </div>
            
            <span className="qr-scan-tagline">Scan Code • Explore Gallery • Connect</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
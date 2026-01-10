import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title fade-in">Contact Us</h2>
        <p className="section-subtitle slide-in">
          Reach out to us for collaborations, events, or any queries
        </p>
        
        <div className="contact-info">
          <div className="contact-details card">
            <h3>Contact Information</h3>
            
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h4>Phone</h4>
                <p><a href="tel:+919632311957">Bhuvan Sharma : +91 96323 11957</a></p>
              </div>
              
        
              
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h4>Location</h4>
                <p>Malnad College of Engineering Hassan, Karnataka, India</p>
                   
              </div>
            </div>
            
            <div className="social-links">
              <h4>Connect With Us</h4>
              <div className="social-link-item">
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/mce_abhivyakthi" target="_blank" rel="noopener noreferrer">@mce_abhivyakthi</a></p>
              </div>
              <div className="social-link-item">
                <p><strong>YouTube:</strong> <a href="https://www.youtube.com/@malnadculturalteam4265" target="_blank" rel="noopener noreferrer">@malnadculturalteam4265</a></p>
              </div>
              <div className="qr-code-container">
                <p><strong>Scan our Instagram QR Code:</strong></p>
                <img src="/images/insta.jpg" alt="Instagram QR Code" className="qr-code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
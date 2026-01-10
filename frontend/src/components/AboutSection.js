import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title fade-in">About Abhivyakthi</h2>
        <div className="about-content">
          <p className="about-description slide-in">
            Abhivyakthi, the Cultural Association of Malnad College of Engineering, stands as a beacon of creativity, 
            artistic expression, and cultural celebration. For over a decade, we have been nurturing talent, 
            fostering artistic growth, and creating memorable experiences that define the cultural landscape 
            of our institution.
          </p>
          
          <div className="vision-mission">
            <div className="vision">
              <h3 className="slide-in">VISION</h3>
              <p className="slide-in">
                ENRICH THE COLLEGE EXPERIENCE BY CELEBRATING THE WORLD OF ARTS AND FOSTERING AN INCLUSIVE, CREATIVE COMMUNITY.
              </p>
            </div>
            
            <div className="mission">
              <h3 className="slide-in">MISSION</h3>
              <ol className="mission-list slide-in">
                <li>CULTIVATE ARTISTIC TALENT IN DANCE, BAND, ART, AND DRAMA.</li>
                <li>UNITE STUDENTS FROM DIVERSE BACKGROUNDS THROUGH CULTURAL EVENTS.</li>
              </ol>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3>600+</h3>
              <p>Students Engaged</p>
            </div>

            <div className="stat-item">
              <h3>5</h3>
              <p>Wings</p>
            </div>
          </div>
          
          <div className="about-impact">
            <h3 className="slide-in">Our Impact on Student Life</h3>
            <p className="slide-in">
              Abhivyakthi plays a pivotal role in shaping the holistic development of students at MCE. 
              We provide platforms for self-expression, build confidence, enhance communication skills, 
              and create lasting memories. We bring together diverse talents from across the campus, 
              fostering unity and cultural appreciation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
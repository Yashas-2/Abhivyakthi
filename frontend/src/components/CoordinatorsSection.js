import React, { useState, useEffect } from 'react';
import API from '../services/api';

// Removed filters and Faculty Coordinator placeholder as per requirements

const CoordinatorsSection = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch members data
    API.get("/members/")
      .then(res => {
        setMembers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching members:", err);
        // In case of error, we'll continue with empty data
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading coordinators...</div>;
  }

  return (
    <section className="coordinators-section" id="coordinators">
      <div className="container">
        <h2 className="section-title fade-in">Our Co-ordinators</h2>
        
        <div className="coordinators-grid">
          
          <div className="coordinator-card card fade-in">
            <div className="coordinator-photo">
              <img src="/images/poorvi.jpg" alt="Poorvi Vasista" />
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Poorvi Vasista U N</h3>
              <p className="coordinator-role">Main Co-ordinator</p>
              
              <div className="coordinator-details">
                <p className="coordinator-wing">Wing: Cultural</p>
                <p className="coordinator-year">Department: CSE</p>
                <p className="coordinator-contact">Contact: poorvi@example.com</p>
              </div>
              

            </div>
          </div>
          
          <div className="coordinator-card card fade-in">
            <div className="coordinator-photo">
              <img src="/images/bhuvan.jpg" alt="Bhuvan Sharma H V" />
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Bhuvan Sharma H V</h3>
              <p className="coordinator-role">Co Co-ordinator</p>
              
              <div className="coordinator-details">
                <p className="coordinator-wing">Wing: Cultural</p>
                <p className="coordinator-year">Department: ECE</p>
                <p className="coordinator-contact">Contact: bhuvan@example.com</p>
              </div>
              

            </div>
          </div>
          
          <div className="coordinator-card card fade-in">
            <div className="coordinator-photo">           
              <img src="/images/kishore.jpg" alt="Kishore Kumar N S" />                                                    
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Kishore Kumar N S</h3>
              <p className="coordinator-role">Treasurer</p>
                        
              <div className="coordinator-details">
                <p className="coordinator-wing">Wing: Cultural</p>
                <p className="coordinator-year">Department: MECH</p>
                <p className="coordinator-contact">Contact: kishore@example.com</p>
              </div>
                        

            </div>
          </div>

                    <div className="coordinator-card card fade-in">
            <div className="coordinator-photo">           
              <img src="/images/khushi.jpg" alt="Khushi" />                                                    
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Khushi</h3>
              <p className="coordinator-role">Event co-ordinator</p>
                        
              <div className="coordinator-details">
                <p className="coordinator-wing">Wing: Cultural</p>
                <p className="coordinator-year">Department: CSE</p>
                <p className="coordinator-contact">Contact: khushi@example.com</p>
              </div>
                        

            </div>
          </div>

          
          
          {/* All members from API */}
          {members.filter(member => member.member.name !== 'Yashas H K').map((member, index) => (
            <div key={index} className="coordinator-card card fade-in">
              <div className="coordinator-photo">
                {member.photo ? (
                  <img src={member.photo} alt={member.member.name} />
                ) : (
                  <div className="placeholder-avatar">👤</div>
                )}
              </div>
              <div className="coordinator-info">
                <h3 className="coordinator-name">{member.member.name}</h3>
                <p className="coordinator-role">{member.member.role.title}</p>
                
                <div className="coordinator-details">
                  <p className="coordinator-wing">Wing: {member.wing.name}</p>
                  <p className="coordinator-year">Year: {member.year}</p>
                  <p className="coordinator-contact">Contact: {member.contact}</p>
                </div>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
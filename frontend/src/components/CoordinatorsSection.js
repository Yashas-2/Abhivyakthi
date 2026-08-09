import React, { useState, useEffect } from 'react';
import API from '../services/api';
import Icon from './Icons';

// Removed filters and Faculty Coordinator placeholder as per requirements

const CoordinatorsSection = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Set loading to false immediately to show hardcoded coordinators
    setLoading(false);
    
    // Fetch members data in background
    API.get("/members/")
      .then(res => {
        setMembers(res.data);
      })
      .catch(err => {
        console.error("Error fetching members:", err);
        // In case of error, keep empty API members
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading coordinators...</div>;
  }

  return (
    <section className="coordinators-section" id="coordinators">
      <div className="container">
        <h2 className="section-title fade-in">Our Faculty Coordinators</h2>
        
        <div className="coordinators-grid" style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
          
          <div className="coordinator-card card fade-in">
            <div className="coordinator-photo" style={{ position: 'relative' }}>
              <img 
                src="/images/niharika.jpg" 
                alt="Niharika Hegde M" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-avatar" style={{ display: 'none' }}>
                N
              </div>
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Niharika Hegde M</h3>
              <p className="coordinator-role">Faculty Coordinator</p>
              
              <div className="coordinator-details">
                <p className="coordinator-wing">Department: To Be Updated</p>
                <p className="coordinator-contact">Contact: pending</p>
              </div>
            </div>
          </div>
          
          <div className="coordinator-card card fade-in">
            <div className="coordinator-photo" style={{ position: 'relative' }}>
              <img 
                src="/images/aditya.jpg" 
                alt="Dr. Adithya G N" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-avatar" style={{ display: 'none' }}>
                D
              </div>
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Dr. Adithya G N</h3>
              <p className="coordinator-role">Faculty Coordinator</p>
              
              <div className="coordinator-details">
                <p className="coordinator-wing">Department: To Be Updated</p>
                <p className="coordinator-contact">Contact: pending</p>
              </div>
            </div>
          </div>

        </div>

        <h2 className="section-title fade-in">Our Team Coordinators</h2>
        
        <div className="coordinators-grid">
          
          {/* Main Coordinator & Event Manager */}
          <div className="coordinator-card card fade-in">
            <div className="coordinator-photo">
              <img 
                src="/images/varsha.jpg" 
                alt="Varsha Shashikumar" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-avatar" style={{ display: 'none' }}>V</div>
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Varsha Shashikumar</h3>
              <p className="coordinator-role">Main Coordinator & Event Manager</p>
              <div className="coordinator-details">
                <p className="coordinator-wing">Role: Leadership & Management</p>
                <p className="coordinator-contact">Contact: +91 84316 27346</p>
              </div>
            </div>
          </div>

          {/* Co Coordinator */}
          <div className="coordinator-card card fade-in">
            <div className="coordinator-photo">
              <img 
                src="/images/sunil.jpg" 
                alt="Sunil K P" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-avatar" style={{ display: 'none' }}>S</div>
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Sunil K P</h3>
              <p className="coordinator-role">Co Coordinator</p>
              <div className="coordinator-details">
                <p className="coordinator-wing">Role: Cultural Coordination</p>
              </div>
            </div>
          </div>

          {/* Treasurer - Centered on bottom row with identical width as top 2 cards */}
          <div className="coordinator-card card fade-in" style={{ gridColumn: '1 / -1', justifySelf: 'center' }}>
            <div className="coordinator-photo">           
              <img 
                src="/images/giridhar.jpg" 
                alt="Giridhar Gowda G A" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-avatar" style={{ display: 'none' }}>G</div>
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Giridhar Gowda G A</h3>
              <p className="coordinator-role">Treasurer</p>
              <div className="coordinator-details">
                <p className="coordinator-wing">Role: Finance & Accounts</p>
              </div>
            </div>
          </div>

          {/* All members from API */}
          {members.filter(member => member?.member?.name && member.member.name !== 'Yashas H K').map((member, index) => (
            <div key={`api-${index}`} className="coordinator-card card fade-in">
              <div className="coordinator-photo">
                {member.photo ? (
                  <img src={member.photo} alt={member.member?.name || 'Member'} />
                ) : (
                  <div className="placeholder-avatar"><Icon name="user" size={36} color="#d4af37" /></div>
                )}
              </div>
              <div className="coordinator-info">
                <h3 className="coordinator-name">{member.member?.name || 'Name Not Available'}</h3>
                <p className="coordinator-role">{member.member?.role?.title || 'Role Not Available'}</p>
                <div className="coordinator-details">
                  <p className="coordinator-wing">Wing: {member.wing?.name || 'Wing Not Specified'}</p>
                  <p className="coordinator-contact">Contact: {member.contact || 'Contact Not Available'}</p>
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
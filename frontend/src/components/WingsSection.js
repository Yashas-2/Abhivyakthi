import React, { useState, useEffect } from 'react';

const WingsSection = () => {
  const [expandedWing, setExpandedWing] = useState(null);
  const [wingCoordinators, setWingCoordinators] = useState({});
  const [isAnimating, setIsAnimating] = useState({});
  const [digitalCoordinatorIndex, setDigitalCoordinatorIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const wings = [
    {
  id: 1,
  name: "Band",
  description: "Collaborating in harmony to compose and perform original and cover music — showcasing talent across college events, competitions, and festivals.",
  purpose: "Musical Performance & Harmony",
  activities: [
    "Live Performances",
    "Original Composition",
    "Cover Music",
    "Battle of Bands",
  ],
  impact: "Creating unforgettable musical experiences and nurturing talent.",
  icon: "🎵",
  color: "#D4AF37"
},

{
  id: 2,
  name: "Dance",
  description: "Step into the spotlight with our dynamic dance team. From classical to contemporary, we express culture, creativity, and teamwork through every move.",
  purpose: "Dance Excellence & Expression",
  activities: [
    "Classical Dance",
    "Contemporary",
    "Hip-Hop",
    "Folk",
  ],

  impact: "Inspiring audiences and celebrating the beauty of dance through powerful performances.",
  icon: "💃",
  color: "#FF6B6B"
},

    {
      id: 3,
      name: "Drama",
      description: "To explore and express diverse narratives through theatrical performance.",
      purpose: "Opportunities in acting, directing, stage design, and scriptwriting.",
      activities: [
        "Stage Plays",
        "Street Plays",
        "Short Films",
        "Skits"
      ],

      impact: "We perform to inspire and entertain.",
      icon: "🎭",
      color: "#4ECDC4"
    },

   {
  id: 4,
  name: "Art & Literary",
  description: "The Art and Literary Team promotes creativity through artistic and literary activities, encouraging students to express themselves through writing, drawing, painting, and more.",
  purpose: "Creative Expression & Artistic Growth",
  activities: [
    "Writing",
    "Drawing",
    "Painting",
    "Poster Design",
  ],

  impact: "Inspiring imagination, creativity, and self-expression across the campus.",
  icon: "🎨",
  color: "#45B7D1"
},

{

  
  id: 5,
  name: "Digital & Editorial",
  description: "Creates posters, videos, and digital content while developing creative and technical skills.",
  purpose: "Creative Communication & Visual Storytelling",
  activities: [
    "Photography",
    "Videography",
    "Poster Design",
    "Video Editing",
    "Content Creation",
    "Social Media Campaigns"
  ],

  impact: "Building Abhivyakthi’s digital identity and sharing our culture with the world.",
  icon: "📱",
  color: "#96CEB4"
}



  ];
  
  // Fetch coordinators for each wing when a wing is expanded
  useEffect(() => {
    if (expandedWing && !wingCoordinators[expandedWing]) {
      // Simulating API call - in a real app this would fetch from API
      // For now, we'll create mock coordinator data based on wing ID
      const mockCoordinators = {
        1: [
          { name: "Giridhar Gowda", role: "Band Co-ordinator" ,image: "/images/giri.jpg" },
          { name: "Dhathri Vasista", role: "Band Co-ordinator", image: "/images/Dhathri.jpg" }
        ],
        2: [
          { name: "Abhishek", role: "Dance Co-ordinator", image: "/images/Abhi.jpg" },
          { name: "Mouna", role: "Dance Co-ordinator", image: "/images/Mouna.jpg" }
        ],
        3: [
          { name: "Kushal Gowda", role: "Drama Co-ordinator", image: "/images/kushal.jpg" },
          { name: "Poorvitha", role: "Drama Co-ordinator", image: "/images/poorvitha.jpg" }
        ],
        4: [
          { name: "Ankith", role: "Art Co-ordinator", image: "/images/ankith.jpg" },
          { name: "Varsha", role: "Art Co-ordinator", image: "/images/varsha.jpg" }
        ],
        5: [
          { name: "Rohan Joel", role: "Digital Co-ordinator", image: "/images/rohan.jpg" },
          { name: "Bhoomika D M", role: "Editorial Co-ordinator", image: "/images/bhoomika.jpg" },
          { name: "Richith Gowda", role: "Editorial Co-ordinator", image: "/images/richi.jpg" },
        ]
      };
      
      setWingCoordinators(prev => ({
        ...prev,
        [expandedWing]: mockCoordinators[expandedWing]
      }));
    }
  }, [expandedWing, wingCoordinators]);
  
  const toggleWingDetails = (wingId) => {
    // Set animation state for this wing
    setIsAnimating(prev => ({
      ...prev,
      [wingId]: true
    }));
    
    setExpandedWing(prevExpandedWing => (prevExpandedWing === wingId ? null : wingId));
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(prev => ({
        ...prev,
        [wingId]: false
      }));
    }, 600); // Match the CSS transition time
  };

  const handleDigitalNav = (direction) => {
    const numCoordinators = (wingCoordinators[5] || []).length;
    
    // Set slide direction for animation
    setSlideDirection(direction === -1 ? 'right' : 'left');
    
    setDigitalCoordinatorIndex(prevIndex => {
      const nextIndex = prevIndex + direction;
      if (nextIndex < 0) {
        return numCoordinators - 1; // Loop to last
      }
      if (nextIndex >= numCoordinators) {
        return 0; // Loop to first
      }
      return nextIndex;
    });
    
    // Reset slide direction after animation
    setTimeout(() => {
      setSlideDirection('');
    }, 300);
  };

  return (
    <section className="wings-section" id="wings">
      <div className="container">
        <h2 className="section-title fade-in">Our Cultural Wings</h2>
        <p className="section-subtitle slide-in">
          Each wing represents a unique facet of artistic expression and cultural celebration
        </p>
        
       <div className="wings-grid">
{wings.map(wing => (
  <div 
    key={wing.id} 
    className={`wing-card ${expandedWing === wing.id ? "active" : ""} ${wing.name === "Digital & Editorial" ? "digital-wing" : ""}`}
    style={{ '--wing-color': wing.color }}
  >
    <div className="wing-basic">
      <div className="wing-icon">{wing.icon}</div>
      <h3 className="wing-name">{wing.name}</h3>
    </div>

    {expandedWing === wing.id && (
      <div className="wing-extra">
        <p className="wing-description">{wing.description}</p>
        <p><strong>Purpose:</strong> {wing.purpose}</p>
        <p><strong>Activities:</strong> {wing.activities.join(', ')}</p>
        <p><strong>Impact:</strong> {wing.impact}</p>
        <h4 className="wing-coordinators-heading">Co-ordinators</h4>
        
        {wing.name === 'Digital & Editorial' ? (
          <div className="coordinator-slider">
            <button onClick={() => handleDigitalNav(-1)} className="slider-button prev-button">‹</button>
            <div className={`coordinator-item ${slideDirection === 'left' ? 'slide-left' : ''} ${slideDirection === 'right' ? 'slide-right' : ''}`}>
              {wingCoordinators[wing.id] && wingCoordinators[wing.id][digitalCoordinatorIndex] &&
                  <>
                      <img src={wingCoordinators[wing.id][digitalCoordinatorIndex].image} alt={wingCoordinators[wing.id][digitalCoordinatorIndex].name} />
                      <div className="coordinator-info">
                          <strong>{wingCoordinators[wing.id][digitalCoordinatorIndex].name}</strong>
                          <span>{wingCoordinators[wing.id][digitalCoordinatorIndex].role}</span>
                      </div>
                  </>
              }
            </div>
            <button onClick={() => handleDigitalNav(1)} className="slider-button next-button">›</button>
          </div>
        ) : (
          <div className="coordinators-lineup">
            {wingCoordinators[wing.id]?.map((coordinator, index) => (
              <div key={index} className="coordinator-item">
                <img src={coordinator.image} alt={coordinator.name} />
                <div className="coordinator-info">
                  <strong>{coordinator.name}</strong>
                  <span>{coordinator.role}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )}

    <button className="wing-button" onClick={() => toggleWingDetails(wing.id)}>
      {expandedWing === wing.id ? 'Show Less' : 'Learn More'}
    </button>
    {expandedWing !== wing.id && (
      <div className="down-arrow-indicator">
        <div className="arrow-down"></div>
      </div>
    )}
  </div>
))}
</div>

      </div>
    </section>
  );
};

export default WingsSection;
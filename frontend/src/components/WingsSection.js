import React, { useState, useEffect } from 'react';

const WingsSection = () => {
  const [activeModalWing, setActiveModalWing] = useState(null);

  useEffect(() => {
    if (activeModalWing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalWing]);

  const wings = [
    {
      id: 1,
      name: "Band",
      description: "Collaborating in harmony to compose and perform music. Our band wing showcases musical talent across college fests, inter-collegiate fests, and local cultural platforms.",
      purpose: "Musical Performance, Composition & Harmony",
      activities: [
        "Live Vocal & Instrumental Performances",
        "Original Music Composition & Songwriting",
        "Classic & Contemporary Cover Tributes",
        "Battle of Bands & Fest Competitions"
      ],
      impact: "Nurturing creative musicians and providing a powerful sonic identity to Abhivyakthi.",
      icon: "🎵",
      color: "#D4AF37"
    },
    {
      id: 2,
      name: "Dance",
      description: "Expressing culture, rhythm, and passion through movement. The dance team unites classical traditions with contemporary energy for spellbinding performances.",
      purpose: "Dance Excellence, Rhythm & Dramatic Choreography",
      activities: [
        "Classical & Semi-Classical Choreographies",
        "Contemporary & Modern Fusion Styles",
        "Hip-Hop & High-Energy Street Routines",
        "Traditional Folk Dance & Group Fests"
      ],
      impact: "Captivating audiences on elite stages while celebrating cultural diversity through dance.",
      icon: "💃",
      color: "#FF6B6B"
    },
    {
      id: 3,
      name: "Drama",
      description: "Bringing powerful narratives to life through scriptwriting, acting, and stage design. Our drama wing addresses critical themes through street plays and stage plays.",
      purpose: "Theatrical Expression, Scriptwriting & Stagecraft",
      activities: [
        "Proscenium Stage Plays & Classical Drama",
        "Socially Relevant Street Plays (Nukkad Natak)",
        "Short Films, Screenplays & Visual Media Projects",
        "Skits, Mimes & Theatrical Competitions"
      ],
      impact: "Fostering theatrical excellence, provoking thought, and building public speaking confidence.",
      icon: "🎭",
      color: "#4ECDC4"
    },
    {
      id: 4,
      name: "Art & Literary",
      description: "Nurturing creative imagination and intellectual expression. From canvas painting and poster designing to creative writing and debate, this wing fuels artistic innovation.",
      purpose: "Visual Arts, Fine Arts & Intellectual Expression",
      activities: [
        "Sketching, Painting, Collage & Clay Modeling",
        "Rangoli & On-Spot Fine Art Competitions",
        "Poster Design, Creative Writing & Poetry",
        "Debates, Extempore & Literary Discussions"
      ],
      impact: "Beautifying the campus environment and creating platforms for intellectual exchange.",
      icon: "🎨",
      color: "#45B7D1"
    },
    {
      id: 5,
      name: "Digital & Editorial",
      description: "Managing Abhivyakthi's public presence, photography, social media campaigns, and digital assets. This wing designs all visual assets and edits cinematic videos.",
      purpose: "Visual Storytelling, Digital Media & Content Creation",
      activities: [
        "High-Definition Event Photography",
        "Cinematic Videography & Aftermovies",
        "Professional Poster & Banner Designing",
        "Social Media Editorial Campaigns & Styling"
      ],
      impact: "Documenting Abhivyakthi's legacy and building a premium visual brand identity.",
      icon: "📱",
      color: "#96CEB4"
    }
  ];

  const wingCoordinators = {
    1: [
      { name: "Giridhar Gowda", role: "Band Coordinator", image: "/images/giri.jpg" },
      { name: "Dhathri Vasista", role: "Band Coordinator", image: "/images/Dhathri.jpg" }
    ],
    2: [
      { name: "Abhishek", role: "Dance Coordinator", image: "/images/Abhi.jpg" },
      { name: "Mouna", role: "Dance Coordinator", image: "/images/Mouna.jpg" }
    ],
    3: [
      { name: "Kushal Gowda", role: "Drama Coordinator", image: "/images/kushal.jpg" },
      { name: "Poorvitha", role: "Drama Coordinator", image: "/images/poorvitha.jpg" }
    ],
    4: [
      { name: "Ankith", role: "Art Coordinator", image: "/images/ankith.jpg" },
      { name: "Varsha", role: "Art Coordinator", image: "/images/varsha.jpg" }
    ],
    5: [
      { name: "Rohan Joel", role: "Digital Coordinator", image: "/images/rohan.jpg" },
      { name: "Bhoomika D M", role: "Editorial Coordinator", image: "/images/bhoomika.jpg" },
      { name: "Richith Gowda", role: "Editorial Coordinator", image: "/images/richi.jpg" }
    ]
  };

  const openWingModal = (wing) => {
    setActiveModalWing(wing);
  };

  const closeWingModal = () => {
    setActiveModalWing(null);
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
              className="wing-card"
              onClick={() => openWingModal(wing)}
              style={{ '--wing-color': wing.color }}
            >
              <div className="wing-basic">
                <div className="wing-icon">{wing.icon}</div>
                <h3 className="wing-name">{wing.name}</h3>
                <span className="wing-explore-hint">Explore Wing ✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Separate Pop-up Detailed Page (Modal) */}
      {activeModalWing && (
        <div className="wing-modal-overlay" onClick={closeWingModal}>
          <div
            className="wing-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ '--wing-color': activeModalWing.color }}
          >
            <div style={{ position: 'sticky', top: '0', display: 'flex', justifyContent: 'flex-end', zIndex: 3000, margin: '-1rem -1rem 0 0' }}>
              <button className="wing-modal-close" onClick={closeWingModal}>✕</button>
            </div>

            <div className="wing-modal-header">
              <span className="wing-modal-icon">{activeModalWing.icon}</span>
              <h3 className="wing-modal-title">{activeModalWing.name} Wing</h3>
            </div>

            <div className="wing-modal-body">
              <div className="wing-modal-info-section">
                <p className="wing-modal-description">{activeModalWing.description}</p>

                <div className="wing-modal-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">✦ Core Purpose</span>
                    <p className="meta-value">{activeModalWing.purpose}</p>
                  </div>

                  <div className="meta-item">
                    <span className="meta-label">✦ Campus Impact</span>
                    <p className="meta-value">{activeModalWing.impact}</p>
                  </div>
                </div>

                <div className="wing-modal-activities-section">
                  <h4 className="modal-section-heading">Key Focus & Activities</h4>
                  <ul className="activities-list">
                    {activeModalWing.activities.map((act, index) => (
                      <li key={index}>
                        <span className="bullet">✦</span> {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="wing-modal-coordinators-section">
                <h4 className="modal-section-heading">Wing Coordinators</h4>
                <div className="modal-coordinators-grid">
                  {wingCoordinators[activeModalWing.id]?.map((coordinator, index) => (
                    <div key={index} className="modal-coordinator-card">
                      <div className="coordinator-avatar-wrapper">
                        {coordinator.image ? (
                          <img
                            src={coordinator.image}
                            alt={coordinator.name}
                            className="coordinator-avatar"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="placeholder-avatar-small" style={{ display: 'none' }}>
                          {coordinator.name.charAt(0)}
                        </div>
                        <div className="avatar-glow"></div>
                      </div>
                      <div className="coordinator-modal-info">
                        <strong className="coordinator-modal-name">{coordinator.name}</strong>
                        <span className="coordinator-modal-role">{coordinator.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WingsSection;
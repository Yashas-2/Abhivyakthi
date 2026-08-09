import React, { useState, useEffect } from 'react';
import Icon from './Icons';

const WingsSection = () => {
  const [activeModalWing, setActiveModalWing] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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
      name: "BAND",
      tagline: "FEEL THE BEAT",
      shortDescription: "Where music comes alive. Discover, connect and create unforgettable moments.",
      description: "Collaborating in harmony to compose and perform music. Our band wing showcases musical talent across college fests, inter-collegiate fests, and local cultural platforms.",
      purpose: "Musical Performance, Composition & Harmony",
      activities: [
        "Live Vocal & Instrumental Performances",
        "Original Music Composition & Songwriting",
        "Classic & Contemporary Cover Tributes",
        "Battle of Bands & Fest Competitions"
      ],
      impact: "Nurturing creative musicians and providing a powerful sonic identity to Abhivyakthi.",
      iconKey: "3d-guitar",
      accentColor: "#F6C453",
      glowRgb: "246, 196, 83",
      wireframeTop: "HARMONIZING PASSION.",
      wireframeBottom: "AMPLIFYING SOUL."
    },
    {
      id: 2,
      name: "DANCE",
      tagline: "MOVE TO INSPIRE",
      shortDescription: "Celebrate movement. Experience rhythm, passion and endless energy.",
      description: "Expressing culture, rhythm, and passion through movement. The dance team unites classical traditions with contemporary energy for spellbinding performances.",
      purpose: "Dance Excellence, Rhythm & Dramatic Choreography",
      activities: [
        "Classical & Semi-Classical Choreographies",
        "Contemporary & Modern Fusion Styles",
        "Hip-Hop & High-Energy Street Routines",
        "Traditional Folk Dance & Group Fests"
      ],
      impact: "Captivating audiences on elite stages while celebrating cultural diversity through dance.",
      iconKey: "3d-dance",
      accentColor: "#FF6B6B",
      glowRgb: "255, 107, 107",
      wireframeTop: "EXPRESSING RHYTHM.",
      wireframeBottom: "EMBODYING PASSION."
    },
    {
      id: 3,
      name: "MEDIA",
      tagline: "CAPTURE THE STORY",
      shortDescription: "Frames that speak. Moments captured, memories cherished.",
      description: "Managing Abhivyakthi's public presence, photography, social media campaigns, and digital assets. This wing designs all visual assets and edits cinematic videos.",
      purpose: "Visual Storytelling, Digital Media & Content Creation",
      activities: [
        "High-Definition Event Photography",
        "Cinematic Videography & Aftermovies",
        "Professional Poster & Banner Designing",
        "Social Media Editorial Campaigns & Styling"
      ],
      impact: "Documenting Abhivyakthi's legacy and building a premium visual brand identity.",
      iconKey: "3d-camera",
      accentColor: "#33D6FF",
      glowRgb: "51, 214, 255",
      wireframeTop: "FRAMING MOMENTS.",
      wireframeBottom: "CREATING MEMORIES."
    },
    {
      id: 4,
      name: "DRAMA",
      tagline: "EMBODY THE ART",
      shortDescription: "Power of expression. Stagecraft, storytelling, and impactful narratives.",
      description: "Bringing powerful narratives to life through scriptwriting, acting, and stage design. Our drama wing addresses critical themes through street plays and stage plays.",
      purpose: "Theatrical Expression, Scriptwriting & Stagecraft",
      activities: [
        "Proscenium Stage Plays & Classical Drama",
        "Socially Relevant Street Plays (Nukkad Natak)",
        "Short Films, Screenplays & Visual Media Projects",
        "Skits, Mimes & Theatrical Competitions"
      ],
      impact: "Fostering theatrical excellence, provoking thought, and building public speaking confidence.",
      iconKey: "3d-drama",
      accentColor: "#4ECDC4",
      glowRgb: "78, 205, 196",
      wireframeTop: "INSPIRING STAGES.",
      wireframeBottom: "IGNITING EMOTIONS."
    },
    {
      id: 5,
      name: "ART & LITERARY",
      tagline: "CREATE & EXPRESS",
      shortDescription: "Canvas of imagination. Fine arts, literary crafts, and creative design.",
      description: "Nurturing creative imagination and intellectual expression. From canvas painting and poster designing to creative writing and debate, this wing fuels artistic innovation.",
      purpose: "Visual Arts, Fine Arts & Intellectual Expression",
      activities: [
        "Sketching, Painting, Collage & Clay Modeling",
        "Rangoli & On-Spot Fine Art Competitions",
        "Poster Design, Creative Writing & Poetry",
        "Debates, Extempore & Literary Discussions"
      ],
      impact: "Beautifying the campus environment and creating platforms for intellectual exchange.",
      iconKey: "3d-art",
      accentColor: "#A78BFA",
      glowRgb: "167, 139, 250",
      wireframeTop: "PAINTING DREAMS.",
      wireframeBottom: "CRAFTING WORDS."
    }
  ];

  const wingCoordinators = {
    1: [ // BAND
      { name: "Medini H C", role: "BAND COORDINATOR", image: "/images/medini.jpg" },
      { name: "Prakul", role: "BAND COORDINATOR", image: "/images/prakul.jpg" }
    ],
    2: [ // DANCE
      { name: "Sohan Yadav", role: "DANCE COORDINATOR", image: "/images/sohan.jpg" },
      { name: "Sahana", role: "DANCE COORDINATOR", image: "/images/sahana.jpg" }
    ],
    3: [ // MEDIA (Digital & Editorial)
      { name: "Richith Gowda R", role: "DIGITAL COORDINATOR", image: "/images/richith.jpg" },
      { name: "Yashwanth H M", role: "DIGITAL COORDINATOR", image: "/images/yashwanth.jpg" },
      { name: "Mouna N", role: "EDITORIAL COORDINATOR", image: "/images/mouna.jpg" }
    ],
    4: [ // DRAMA
      { name: "Bhuvan Sharma H V", role: "DRAMA COORDINATOR", image: "/images/bhuvan.jpg" },
      { name: "Charan H K", role: "DRAMA COORDINATOR", image: "/images/charan.jpg" }
    ],
    5: [ // ART
      { name: "Ganavi K V", role: "ART COORDINATOR", image: "/images/ganavi.jpg" },
      { name: "Nithin S L", role: "ART COORDINATOR", image: "/images/nithin.jpg" }
    ]
  };

  const openWingModal = (wing) => {
    setActiveModalWing(wing);
  };

  const closeWingModal = () => {
    setActiveModalWing(null);
  };

  return (
    <section className="wings-section-awwwards" id="wings">
      {/* Background Volumetric Glow & Subtle Floating Accents */}
      <div className="awwwards-bg-glow glow-1"></div>
      <div className="awwwards-bg-glow glow-2"></div>
      
      <div className="container">
        <div className="wings-header-center">
          <span className="wings-badge-tagline">CULTURAL WINGS & ARTISTIC DIVISIONS</span>
          <h2 className="section-title awwwards-title">Explore Our Wings</h2>
          <p className="section-subtitle awwwards-subtitle">
            Crafted for excellence. Dedicated to world-class performance, artistic innovation, and creative storytelling.
          </p>
        </div>

        <div className="wings-grid-awwwards">
          {wings.map(wing => (
            <div
              key={wing.id}
              className="awwwards-card"
              onClick={() => openWingModal(wing)}
              style={{
                '--accent-color': wing.accentColor,
                '--accent-rgb': wing.glowRgb
              }}
            >
              {/* Card Ambient Background Glow */}
              <div className="card-radial-glow"></div>

              {/* Left Side: Hero Concentric Orbital Ring & 3D Icon */}
              <div className="card-left-hero">
                <div className="orbital-ring outer-ring">
                  <div className="orbit-dot"></div>
                  <div className="orbit-arc"></div>
                </div>
                <div className="orbital-ring inner-dashed-ring"></div>
                <div className="glass-icon-container">
                  <Icon name={wing.iconKey} size={90} color={wing.accentColor} />
                </div>
              </div>

              {/* Right Side: Editorial Content */}
              <div className="card-right-content">
                <span className="card-tagline">{wing.tagline}</span>
                <h3 className="card-title-serif">{wing.name}</h3>
                <p className="card-description-editorial">{wing.shortDescription}</p>
                <div className="card-accent-divider"></div>

                <div 
                  className="card-cta-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openWingModal(wing);
                  }}
                >
                  <span className="cta-text">EXPLORE WING</span>
                  <div className="cta-arrow-circle">
                    <Icon name="arrow-right" size={14} color={wing.accentColor} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Picture-Perfect Futuristic Modal Popup */}
      {activeModalWing && (
        <div className="futuristic-modal-backdrop" onClick={closeWingModal}>
          <div
            className="futuristic-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              '--accent-color': activeModalWing.accentColor,
              '--accent-rgb': activeModalWing.glowRgb
            }}
          >
            {/* Top Close Button */}
            <button className="futuristic-modal-close" onClick={closeWingModal}>✕</button>

            {/* Modal Header */}
            <div className="futuristic-modal-header">
              <div className="modal-hero-icon-container">
                <Icon name={activeModalWing.iconKey} size={70} color={activeModalWing.accentColor} />
              </div>
              <div className="modal-header-text">
                <span className="modal-tagline-glow">{activeModalWing.tagline}</span>
                <h2 className="modal-title-glowing">{activeModalWing.name}</h2>
              </div>
            </div>

            {/* Decorative Header Accent Bar */}
            <div className="modal-header-divider">
              <div className="dot-left"></div>
              <div className="divider-line"></div>
              <div className="dot-right"></div>
            </div>

            {/* Main Modal Body Grid */}
            <div className="futuristic-modal-grid">
              
              {/* Left Column: Wing Description, Core Purpose, Impact, Activities */}
              <div className="modal-left-column">
                <p className="modal-description-text">{activeModalWing.description}</p>

                {/* Core Purpose Block */}
                <div className="modal-meta-card">
                  <div className="meta-icon-badge">
                    <Icon name="target" size={20} color={activeModalWing.accentColor} />
                  </div>
                  <div className="meta-card-info">
                    <span className="meta-card-label">CORE PURPOSE</span>
                    <p className="meta-card-value">{activeModalWing.purpose}</p>
                  </div>
                </div>

                {/* Campus Impact Block */}
                <div className="modal-meta-card">
                  <div className="meta-icon-badge">
                    <Icon name="impact" size={20} color={activeModalWing.accentColor} />
                  </div>
                  <div className="meta-card-info">
                    <span className="meta-card-label">CAMPUS IMPACT</span>
                    <p className="meta-card-value">{activeModalWing.impact}</p>
                  </div>
                </div>

                {/* Key Focus & Activities List */}
                <div className="modal-activities-container">
                  <div className="activities-header">
                    <div className="activities-icon-badge">
                      <Icon name="star" size={16} color={activeModalWing.accentColor} />
                    </div>
                    <h4 className="activities-title">KEY FOCUS & ACTIVITIES</h4>
                  </div>

                  <ul className="activities-glowing-list">
                    {activeModalWing.activities.map((act, idx) => (
                      <li key={idx}>
                        <span className="bullet-glow">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Coordinators & Banner Graphic */}
              <div className="modal-right-column">
                
                {/* Coordinators Section Title */}
                <div className="modal-section-title-row">
                  <span className="accent-vertical-bar"></span>
                  <h4 className="modal-section-title">WING COORDINATORS</h4>
                </div>

                {/* Coordinators List Tiles */}
                <div className="modal-coordinators-list">
                  {wingCoordinators[activeModalWing.id]?.map((coordinator, idx) => (
                    <div key={idx} className="coordinator-glass-tile">
                      <div 
                        className="coordinator-avatar-neon-wrapper clickable-avatar"
                        onClick={() => coordinator.image && setPreviewImage({ url: coordinator.image, name: coordinator.name, role: coordinator.role })}
                        title="Click to view full photo"
                      >
                        {coordinator.image ? (
                          <img
                            src={coordinator.image}
                            alt={coordinator.name}
                            className="coordinator-avatar-img"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="placeholder-avatar-small" style={{ display: 'none' }}>
                          {coordinator.name.charAt(0)}
                        </div>
                        <div className="avatar-expand-badge">🔍</div>
                      </div>
                      <div className="coordinator-info-box">
                        <h5 className="coordinator-name-bold">{coordinator.name}</h5>
                        <span className="coordinator-role-tag">{coordinator.role}</span>
                      </div>
                      <div className="grid-dots-watermark">
                        <Icon name="grid-dots" size={18} color={activeModalWing.accentColor} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Wireframe Banner Tile */}
                <div className="modal-wireframe-banner">
                  <div className="banner-text-box">
                    <span className="banner-line-1">{activeModalWing.wireframeTop}</span>
                    <span className="banner-line-2">{activeModalWing.wireframeBottom}</span>
                  </div>
                  <div className="banner-wireframe-icon">
                    <Icon name={activeModalWing.iconKey} size={85} color={activeModalWing.accentColor} />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* Apple-Style Lightbox Fullscreen Photo Preview Modal */}
      {previewImage && (
        <div className="photo-lightbox-backdrop" onClick={() => setPreviewImage(null)}>
          <div className="photo-lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button className="photo-lightbox-close" onClick={() => setPreviewImage(null)}>✕</button>
            <img src={previewImage.url} alt={previewImage.name} className="photo-lightbox-img" />
            <div className="photo-lightbox-caption">
              <h4>{previewImage.name}</h4>
              <p>{previewImage.role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WingsSection;
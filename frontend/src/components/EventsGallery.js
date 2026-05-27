import React, { useState, useEffect } from 'react';

const EventsGallery = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, we would fetch from the backend
    // For now, we'll use detailed mock data
    setTimeout(() => {
      setEvents(detailedEvents);
      setLoading(false);
    }, 500);
  }, []);

  // Detailed events data with provided information
  const detailedEvents = [
    {
      id: 1,
      name: "Incridea",
      description: "National Level intercollegiate competition held every year in NITTE , Karkala. Combines technical events with cultural competitions and performances.",
      type: "competition",
      images: [
        "/images/inc.jpg",
        "/images/inc1.jpg",
      ]

    },
    {
      id: 2,
      name: "Sargam",
      description: "An intercollegiate fest organized by New Horizon College of Engineering, Bengaluru. An inter-college competition featuring solo and group performances. Participants from various colleges compete in different categories. The fest also includes cultural events, competitions, and performances.",
      type: "competition",
      images: [
        "/images/sargam.jpg",
        "/images/sargam2.jpg",
      ]
    },
    
    {
      id: 3,
      name: "Swar Utsav",
      description: "The DevOps Club organized an exciting cultural night, Swar Utsav, as part of Hack MCE 4.0. The event was a celebration of talent, creativity, and energy, bringing the college community together. The night featured a mesmerizing performance by our Abhivyakthi Band team, captivating the audience with their music.Adding to the entertainment, the dance team delivered a stunning performance that left everyone spellbound. ",
      type: "event",
      images: [
        "/images/swar.jpg",
        "/images/swar1.jpg",
      ]
    },
    {
      id: 4,
      name: "Snehada Kadalu",
      description: "The alumni meet was a memorable gathering that united former and current members of MC’s cultural team, Abhivyakthi.Students actively engaged with alumni, gaining insights into the team’s journey and legacy. Notable interactions included Bharatanatyam artist Varsha Raviprakasha and film director Suhas Jay, who expressed strong support for future collaborations.Music composer Charan Raj also shared encouraging words with the team.The event strengthened the bond between past and present members, laying the foundation for a strong alumni network.",
      type: "event",
      images: [
        "/images/snehada1.jpg",
        "/images/snehada2.jpg",
      ]
    },
   
    {
      id: 5,
      name: "VTU Fest",
      description: "University-level cultural festival featuring competitions in all cultural domains. Students from VTU colleges participate in various events. The art team took part in events such as Collage, Rangoli, On-spot Painting, Cartooning, Poster Making, Clay Modeling, and Installation. The band wing participated in a wide range of musical events, including Classical Vocal Solo, Classical Instrumental (Percussion and Non- percussion), Light Vocal Solo, Western Vocal Solo, Group Song Indian, and Group Song Western. The dance wing showcased their talent in Tribal Dance and Classical Solo Dance categories. The fest served as a great platform for students to compete at a university level, interact with peers from various institutions, and showcase their creative abilities.",
      type: "competition",
      images: [
        "/images/vtu.jpg",
        "/images/vtu1.jpg",
      ]
    },
    
    {
      id: 6,
      name: "SOUL Day",
      description: "As part of the annual initiative by the SOUL organization of MCE for the children of Balmandir. Members of Band team of Abhivyakthi took part by performing for the kids, making the event lively and engaging.A standout moment was the mimicry performance by Richith from the drama wing, which kept the children entertained throughout. The event was a meaningful experience for the team and a chance to connect with the community through simple, enjoyable performances.",
      type: "event",
      images: [
        "/images/soul.jpg",
        "/images/soul1.jpg",
      ]
    },
{
      id: 7,
      name: "Avishkar Manthan",
      description: "Intracollege event organized by IUCEE student chapter.  Our team has performed in Street Play and Musical Eve for the past 2 years.",
      type: "event",
      images: [
        "/images/ak.jpg",
        "/images/ak1.jpg",
      ]
    },
    {
      id: 8,
      name: "Hassanamba Dental College Annual Event",
      description: "The band team of Abhivyakthi performed at the Annual Event of Hassanamba Dental College on June 14, 2025. The team delivered an engaging set lasting nearly three hours, entertaining the audience with a wide range of songs.\n\nA special highlight of the performance was the participation of senior members, who joined the band on stage, adding experience and energy to the show. The event was well-received and provided a great platform for collaborative performance beyond the home campus.",
      type: "event",
      images: [
        "/images/hassanamba.jpg",
        "/images/hassanamba1.jpg",
      ]


    }
  ];

  if (loading) {
    return <div className="loading">Loading events gallery...</div>;
  }

  return (
    <section className="events-gallery" id="events">
      <div className="container">
        <h2 className="section-title fade-in">Events & Competitions Gallery</h2>
        
        <div className="events-grid">
          {events.map(event => (
<div key={event.id} className="event-card card">
              <div className={`event-type ${event.type}`}>
                {event.type.toUpperCase()}
              </div>
              <h3 className="event-name">{event.name}</h3>
              <div className="event-description-container">
                <p className="event-description">{event.description}</p>
              </div>
              
              <div className="event-images">
                {event.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="gallery-item"
                  >
                    <img src={image} alt={`${event.name} - ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default EventsGallery;
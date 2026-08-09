import React from 'react';
import Icon from './Icons';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Incridea",
      event: "Technical & Cultural Festival held every year in NITTE, Karkala",
      description: "Our team won 2nd place in Mad Ads (2022), 1st place in Battle of Bands, and 2nd place in Navarasa (2024).",
      type: "Achievement"
    },
    {
      id: 2,
      title: "Sargam",
      event: "Cultural Fest organized by New Horizon College of Engineering, Bengaluru",
      description: "Our team participated across events and secured 3rd place in Stage Play in 2023.",
      type: "Achievement"
    },
    {
      id: 3,
      title: "Envision",
      event: "Inter-College Fest organized by SIT, Mangalore",
      description: "Secured 2nd place in Battle of Bands in 2023.",
      type: "Achievement"
    },
    {
      id: 4,
      title: "Yukti 2k26",
      event: "Cultural Fest at Acharya Institute of Technology",
      description: "Secured 1st Place in Rangoli, Solo Singing, and Mad Ads. Runner-Up: 2nd Place in Group Singing.",
      type: "Achievement"
    },
    {
      id: 5,
      title: "Explorica",
      event: "Cultural Fest at St. Joseph's College",
      description: "Secured 1st Place in Group Singing and 3rd Place in Solo Singing.",
      type: "Achievement"
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title fade-in">Our Achievements</h2>
        <p className="section-subtitle slide-in">
          Celebrating national & state-level recognition in cultural excellence
        </p>
        
        <div className="achievements-grid grid grid-3">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card card slide-in-up">
              <div className="achievement-badge">
                <span className="achievement-type">
                  <Icon name="trophy" size={14} color="#d4af37" /> ACHIEVEMENT
                </span>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-event">{achievement.event}</p>
              <p className="achievement-description">{achievement.description}</p>
              <div className="achievement-decorative-element"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
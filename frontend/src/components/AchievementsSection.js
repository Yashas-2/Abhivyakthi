import React from 'react';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Incridea ",
      event: "Technical & Cultural Festival held every year in NITTE , Karkala ",
      description: "Our team has won 2nd place for Mad ads in 2022 and 1st place in Battle of Bands , 2nd  place in Navarasa in 2024",
      type: "Achievement"
    },
    {
      id: 2,
      title: "Sargam",
      event: "Cultural Fest organized by New Horizon College of Engineering,  Bengaluru.",
      description: "Our team participated in various events and won 3rd place in Stage Play in 2023",
      type: "Achievement"
    },
    {
      id: 3,
      title: "Envision",
      event: "Inter-College Dance Competition organized by SIT, Mangalore.",
      description: "Our team participated and won 2nd place in Battle of Bands in 2023",
      type: "Achievement"
    },
    {
      id: 4,
      title: "Yukti 2k26",
      event: "Cultural Fest at Acharya Institute of Technology",
      description: "Secured 1st Place in Rangoli, Solo Singing, and Mad ADS. Runner-Ups: Secured 2nd Place in Group Singing.",
      type: "Achievement"
    },
    {
      id: 5,
      title: "Explorica",
      event: "Cultural Fest at St. Joseph's College",
      description: "Secured 1st Place in Group Singing. Secured 3rd Place in Solo Singing.",
      type: "Achievement"
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title fade-in">Our Achievements</h2>
        <p className="section-subtitle slide-in">
          Celebrating excellence and recognition in cultural expression
        </p>
        
        <div className="achievements-grid grid grid-3">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card card slide-in-up">
              <div className="achievement-badge">
                <span className={`achievement-type ${achievement.type}`}>
                  {achievement.type === 'competition' ? 'COMPETITION' : 
                   achievement.type === 'award' ? 'AWARD' : 
                   achievement.type === 'cultural' ? 'CULTURAL FEST' : 'ACHIEVEMENT'}
                </span>
                <div className="achievement-year">{achievement.year}</div>
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
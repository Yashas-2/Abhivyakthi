import React, { useState, useEffect } from 'react';
import './GallerySection.css';

const allImages = [
  '/images/sargam.jpg', '/images/snehada1.jpg', '/images/snehada2.jpg', '/images/soul.jpg',
  '/images/ak1.jpg', '/images/hassanamba.jpg', '/images/inc.jpg',
  '/images/inc1.jpg', '/images/1.jpg', '/images/2.jpg', '/images/3.jpg',
  '/images/4.jpg', '/images/5.JPG', '/images/6.jpg', '/images/7.JPG', '/images/8.jpg',
  '/images/10.jpeg', '/images/11.jpg', '/images/12.jpg', '/images/13.jpg', 
  '/images/14.jpg', '/images/15.jpg', '/images/16.jpg', '/images/17.jpg',
  '/images/18.jpg', '/images/19.jpg', '/images/1.6.jpg'
];

// Group images into 6 chunks for the 6 bento boxes
const bentoChunks = [
  allImages.slice(0, 5),
  allImages.slice(5, 10),
  allImages.slice(10, 15),
  allImages.slice(15, 19),
  allImages.slice(19, 23),
  allImages.slice(23, 27)
];

const bentoConfig = [
  { title: "Cultural Performances", spanClass: "span-1", interval: 3000 },
  { title: "Art & Creativity", spanClass: "span-2", interval: 4200 },
  { title: "Musical Harmony", spanClass: "span-1", interval: 3500 },
  { title: "Theatrical Drama", spanClass: "span-2", interval: 4800 },
  { title: "Campus Life", spanClass: "span-1", interval: 3200 },
  { title: "Vibrant Festivals", spanClass: "span-1", interval: 3800 }
];

const BentoBox = ({ chunk, title, spanClass, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % chunk.length);
    }, interval);
    return () => clearInterval(timer);
  }, [chunk.length, interval]);

  return (
    <div className={`bento-item ${spanClass} fade-in`}>
      {chunk.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={title}
          className={idx === currentIndex ? 'active' : ''}
          loading="lazy"
        />
      ))}
      <div className="bento-overlay">
        <h3 className="bento-title">{title}</h3>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title fade-in">Moments & Memories</h2>
        <p className="section-subtitle slide-in">A glimpse into the vibrant life of Abhivyakthi</p>

        {!showAll ? (
          <>
            <div className="bento-gallery">
              {bentoConfig.map((config, index) => (
                <BentoBox
                  key={index}
                  chunk={bentoChunks[index]}
                  title={config.title}
                  spanClass={config.spanClass}
                  interval={config.interval}
                />
              ))}
            </div>
            
            <div className="gallery-actions fade-in">
              <button className="gallery-btn" onClick={() => setShowAll(true)}>View all the images</button>
            </div>
          </>
        ) : (
          <>
            <div className="gallery-actions fade-in" style={{ marginTop: 0, marginBottom: '2rem' }}>
              <button className="gallery-btn" onClick={() => setShowAll(false)}>Back to Highlights</button>
            </div>

            <div className="full-gallery-grid fade-in">
              {allImages.map((src, index) => (
                <div 
                  className="full-gallery-item" 
                  key={index}
                  onClick={() => setSelectedImage(src)}
                >
                  <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Fullscreen view" />
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

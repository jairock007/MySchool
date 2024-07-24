import React, { useState, useEffect } from 'react';

const highlights = [
  "Annual Sports Day - Celebrating Excellence in Sports",
  "Science Exhibition - Showcasing Student Innovations",
  "Cultural Fest - Embracing Diversity and Creativity"
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % highlights.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <h2>School Highlights</h2>
      <div className="carousel-content">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            {highlight}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
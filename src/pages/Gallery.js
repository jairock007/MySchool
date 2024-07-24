import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import GalleryItem from '../components/GalleryItem';

const galleryItems = [
  { id: 1, image: "https://via.placeholder.com/300x200", title: "Annual Sports Day", category: "Sports" },
  { id: 2, image: "https://via.placeholder.com/300x200", title: "Science Exhibition", category: "Academics" },
  { id: 3, image: "https://via.placeholder.com/300x200", title: "Cultural Fest", category: "Culture" },
  { id: 4, image: "https://via.placeholder.com/300x200", title: "Graduation Ceremony", category: "Events" },
  { id: 5, image: "https://via.placeholder.com/300x200", title: "Art Exhibition", category: "Arts" },
  { id: 6, image: "https://via.placeholder.com/300x200", title: "Debate Competition", category: "Academics" },
  { id: 7, image: "https://via.placeholder.com/300x200", title: "Annual Day Celebration", category: "Events" },
  { id: 8, image: "https://via.placeholder.com/300x200", title: "Mathematics Olympiad", category: "Academics" },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery">
      <SectionHeader title="Gallery" subtitle="Capturing moments of learning and growth" />

      <div className="gallery-filters">
        {categories.map(category => (
          <button 
            key={category} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
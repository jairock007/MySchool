import React from 'react';

const GalleryItem = ({ image, title, category }) => {
  return (
    <div className="gallery-item">

      <img src={image} alt={title} />
      <div className="gallery-item-info">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel interval={3000} slide>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="Annual.jpeg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="Science.jpeg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="Cultural.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

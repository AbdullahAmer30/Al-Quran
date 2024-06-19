import React, { useEffect } from 'react';
import $ from 'jquery';

const ImageSlider = () => {
  useEffect(() => {
    const slider = $('.slider');
    const slides = $('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    const showSlide = (index) => {
      slider.css('transform', `translateX(-${index * 100}%)`);
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
    };

    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="slider-container">
      <div className="slider">
        <img className="slide" src="image1.png" alt="Slide 1" />
        <img className="slide" src="image2.png" alt="Slide 2" />
        <img className="slide" src="image3.png" alt="Slide 3" />
      </div>
    </div>
  );
};

export default ImageSlider;

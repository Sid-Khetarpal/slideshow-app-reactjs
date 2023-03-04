import React, { useState } from 'react'
import '../App.css';

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative'
  }

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '10px',
    fontSize: '45px',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '10px',
    fontSize: '45px',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'
  };

  const dotsContainer = {
    display : 'flex',
    justifyContent: 'center'
  }

  const dotStyles = {
    margin: '8px 3px',
    cursor: 'pointer',
    fontSize: '12px'
  }

  const goToPrevious = () =>{
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () =>{
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>⇐</div>
      <div style={rightArrowStyles} onClick={goToNext}>⇒</div>
      <div style={slideStyles}></div>
      <div style={dotsContainer}>
        {
          slides.map((slide, slideIndex) => (
            <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>⚫</div>
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider
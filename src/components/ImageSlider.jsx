import React, { useState } from "react";
import "./../styles/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="imageSliderWrapper">
      <div className="imageSlider">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="imageSliderImg"
            alt={`slide-${i}`}
          />
        ))}
      </div>
      <div className="imageSliderArrows">
        <button className="imageSliderArrow" onClick={prevSlide}>
          ‹
        </button>
        <button className="imageSliderArrow" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

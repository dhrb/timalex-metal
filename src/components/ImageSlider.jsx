import React, { useState } from "react";
import "../styles/ImageSlider.css";
import sliderArrowImgRight from "../assets/images/sliderArrowImgLeft.png";

function ImageSlider({ images = [] }) {
  const [currentImage, setCurrentImage] = useState(1);

  const prevSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const setSlide = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="imageSliderWrapper">
      <div className="imageSlider">
        <div className="imageSliderItems">
          <img
            src={images[currentImage]}
            alt="sliderImg"
            className={`sliderItemImg ${currentImage ? "active" : "inactive"}`}
          />
        </div>
        <div className="imageSliderArrows">
          <img
            onClick={prevSlide}
            src={sliderArrowImgRight}
            alt="arrow"
            className="sliderArrowBtnLeft"
          />
          <div className="imageSliderPagination">
            {images.map((img, index) => {
              return (
                <img
                  key={index}
                  onClick={() => setSlide(index)}
                  src={img}
                  className={`imageSliderControllerDot ${
                    index === currentImage ? "active" : "inactive"
                  }`}
                />
              );
            })}
          </div>
          <img
            onClick={nextSlide}
            src={sliderArrowImgRight}
            alt="arrow"
            className="sliderArrowBtnRight"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;

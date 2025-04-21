import React from "react";
import "../styles/ImageSlider.css";
import sliderArrowImgRight from "../assets/images/sliderArrowImgLeft.png";

function ImageSlider({ images }) {
  const imagesLength = Array.from({ length: images.length });
  return (
    <div className="imageSliderWrapper">
      <div className="imageSlider">
        <div className="imageSliderItems">
          {images.map((img, key) => {
            console.log(key);
            return (
              <img
                key={key}
                src={img}
                alt="sliderImg"
                className="sliderItemImg"
              />
            );
          })}
        </div>
        <div className="imageSliderArrows">
          <img
            src={sliderArrowImgRight}
            alt="arrow"
            className="sliderArrowBtnLeft"
          />
          <div className="imageSliderPagination">
            {imagesLength.map(() => {
              return <span className="imageSliderControllerDot">{length}</span>;
            })}
          </div>
          <img
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

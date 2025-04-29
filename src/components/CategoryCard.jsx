import React from "react";
import "./../styles/CategoryCard.css";
import categoryCardArrow from "./../assets/images/cardsArrow.png";

function CategoryCard({ img, title, subtitle, link }) {
  return (
    <div className="categoryCard">
      <div className="categoryCardMain">
        <img src={img} alt="categoryCardImg" className="categoryCardImg" />
        <p className="categorySubtitle">{subtitle}</p>
      </div>
      <a href={link} className="categoryCardFooter">
        <h3 className="categoryTitle">{title}</h3>
        <img
          src={categoryCardArrow}
          alt="arrowimg"
          className="categoryCardArrow"
        />
      </a>
    </div>
  );
}

export default CategoryCard;

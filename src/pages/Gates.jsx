import React from "react";
import "../styles/Balconies.css";
import { useLang } from "../components/LanguageController";
import ImageSlider from "../components/ImageSlider";
import imagesData from "../data/imagesData";
import gatesBg from "./../assets/images/gatesBg.jpg";

function Gates() {
  const { translate } = useLang();

  const gatesImage = imagesData
    .filter((gates) => gates.category === "gates")
    .map((item) => item.image);

  return (
    <div className="balconiesWrapper">
      <div className="balconiesNameWrapper">
        <img src={gatesBg} alt="" className="balconiesNameWrapperImg" />
        <h3 className="balconiesName gatesName">
          {translate("header.headerGates")}
        </h3>
      </div>
      <div className="balconiesHeader">
        <h3 className="balconiesTitle">{translate("gates.gatesTitle")}</h3>
        <p className="balconiesSubtitle">{translate("gates.gatesSubtitle")}</p>
      </div>
      <div className="balconiesBody">
        <div className="balconiesBodyAdvantages">
          <h3 className="balconiesBodyAdvantagesTitle">
            {translate("gates.gatesBodyAdvantagesTitle")}
          </h3>
          <p className="balconiesBodyAdvantagesSubtitle">
            {translate("gates.gatesBodyAdvantagesSubtitle")}
          </p>
          <ul className="balconiesBodyAdvantagesList">
            <li className="balconiesBodyAdvantagesListItem">
              {translate("gates.gatesBodyAdvantagesListItem1")}
            </li>
            <li className="balconiesBodyAdvantagesListItem">
              {translate("gates.gatesBodyAdvantagesListItem2")}
            </li>
            <li className="balconiesBodyAdvantagesListItem">
              {translate("gates.gatesBodyAdvantagesListItem3")}
            </li>
          </ul>
          <p className="balconiesBodyAdvantagesSummary">
            {translate("gates.gatesBodyAdvantagesSummary")}
          </p>
        </div>
        <ImageSlider images={gatesImage} />
        <div className="balconiesInfo">
          <h3 className="balconiesInfoTitle">
            {translate("gates.gatesInfoTitle")}
          </h3>
          <p className="balconiesInfoSubtitle">
            {translate("gates.gatesInfoSubtitle")}
          </p>
          <p className="balconiesInfoSubtitle1">
            {translate("gates.gatesInfoSubtitle1")}
          </p>
          <p className="balconiesInfoSubtitle2">
            {translate("gates.gatesInfoSubtitle2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gates;

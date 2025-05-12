import React from "react";
import "../styles/Balconies.css";
import { useLang } from "../components/LanguageController";
import ImageSlider from "../components/ImageSlider";
import imagesData from "../data/imagesData";
import balconiesBgImg from "./../assets/imagesData/balconies1.jpg";

function Railings() {
  const { translate } = useLang();

  const railingsImage = imagesData
    .filter((railing) => railing.category === "railings")
    .map((item) => item.image);

  return (
    <div className="balconiesWrapper">
      <div className="balconiesNameWrapper">
        <img src={balconiesBgImg} alt="" className="balconiesNameWrapperImg" />
        <h3 className="balconiesName">{translate("header.headerRailings")}</h3>
      </div>
      <div className="balconiesHeader">
        <h3 className="balconiesTitle">
          {translate("railings.railingsTitle")}
        </h3>
        <p className="balconiesSubtitle">
          {translate("railings.railingsSubtitle")}
        </p>
      </div>
      <div className="balconiesBody">
        <div className="balconiesBodyAdvantages">
          <h3 className="balconiesBodyAdvantagesTitle">
            {translate("railings.railingsBodyAdvantagesTitle")}
          </h3>
          <p className="balconiesBodyAdvantagesSubtitle">
            {translate("railings.railingsBodyAdvantagesSubtitle")}
          </p>
          <ul className="balconiesBodyAdvantagesList">
            <li className="balconiesBodyAdvantagesListItem">
              {translate("railings.railingsBodyAdvantagesListItem1")}
            </li>
            <li className="balconiesBodyAdvantagesListItem">
              {translate("railings.railingsBodyAdvantagesListItem2")}
            </li>
            <li className="balconiesBodyAdvantagesListItem">
              {translate("railings.railingsBodyAdvantagesListItem3")}
            </li>
          </ul>
          <p className="balconiesBodyAdvantagesSummary">
            {translate("railings.railingsBodyAdvantagesSummary")}
          </p>
        </div>
        <ImageSlider images={railingsImage} />
        <div className="balconiesInfo">
          <h3 className="balconiesInfoTitle">
            {translate("railings.railingsInfoTitle")}
          </h3>
          <p className="balconiesInfoSubtitle">
            {translate("railings.railingsInfoSubtitle")}
          </p>
          <p className="balconiesInfoSubtitle1">
            {translate("railings.railingsInfoSubtitle1")}
          </p>
          <p className="balconiesInfoSubtitle2">
            {translate("railings.railingsInfoSubtitle2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Railings;

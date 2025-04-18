import React from "react";
import "../styles/Balconies.css";
import { useLang } from "../components/LanguageController";

function Balconies() {
  const { translate } = useLang();
  return (
    <div className="balconiesWrapper">
      <h3 className="balconiesName">Balconies</h3>
      <div className="balconiesHeader">
        <h3 className="balconiesTitle">
          {translate("balconies.balconiesTitle")}
        </h3>
        <p className="balkoniesSubtitle">
          {translate("balconies.balconiesSubtitle")}
        </p>
      </div>
      <div className="balconiesBody">
        <div className="balconiesSlider">Slider will be here</div>
        <div className="balconiesInfo">
          <h3 className="balconiesInfoTitle">
            {translate("balconies.balconiesInfoTitle")}
          </h3>
          <p className="balconiesInfoSubtitle">
            {translate("balconies.balconiesInfoSubtitle")}
          </p>
          <p className="balconiesInfoSubtitle1">
            {translate("balconies.balconiesInfoSubtitle1")}
          </p>
          <p className="balconiesInfoSubtitle2">
            {translate("balconies.balconiesInfoSubtitle2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Balconies;

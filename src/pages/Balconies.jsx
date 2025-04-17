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
    </div>
  );
}

export default Balconies;

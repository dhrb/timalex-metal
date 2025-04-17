import React from "react";
import "../styles/catalog.css";
import { useLang } from "../components/LanguageController";

function Railings() {
  const { translate } = useLang();
  return (
    <div className="railingsWrapper">
      <h3 className="railingsName">Railings</h3>
      <div className="railingsHeader">
        <h3 className="railingsTitle">{translate("railings.railingsTitle")}</h3>
        <p className="railingsSubtitle">
          {translate("railings.railingsSubtitle")}
        </p>
      </div>
    </div>
  );
}

export default Railings;

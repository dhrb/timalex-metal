import React from "react";
import "../styles/catalog.css";
import { useLang } from "../components/LanguageController";

function Gates() {
  const { translate } = useLang();
  return (
    <div className="gatesWrapper">
      <h3 className="gatesName">Gates</h3>
      <div className="gatesHeader">
        <h3 className="gatesTitle">{translate("gates.gatesTitle")}</h3>
        <p className="gatesSubtitle">{translate("gates.gatesSubtitle")}</p>
      </div>
    </div>
  );
}

export default Gates;

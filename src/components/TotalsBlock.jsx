import React from "react";
import "./../styles/TotalsBlock.css";
import ordersIcon from "./../assets/images/ordersIcon.png";
import monthlyPowerIcon from "./../assets/images/monthlyPowerIcon.png";
import shakehandsIcon from "./../assets/images/shakehandsIcon.png";
import goalIcon from "./../assets/images/goalIcon.png";

function TotalsBlock({
  //props come from translate(totalsBlock. ...)
  readyOrdersText,
  readyProjectsText,
  monthlyPowerText,
  marketYearsText,
}) {
  return (
    <div className="totalsBlockWrapper">
      <div className="totalsBlockItem">
        <img src={ordersIcon} alt="" className="totalBlockItemImg" />
        <p className="totalsBlockItemNumber">1800 + </p>
        <p className="totalsBlockItemtext">{readyOrdersText}</p>
      </div>
      <div className="totalsBlockItem">
        <img src={shakehandsIcon} alt="" className="totalBlockItemImg" />
        <p className="totalsBlockItemNumber">2000 + </p>
        <p className="totalsBlockItemtext">{readyProjectsText}</p>
      </div>
      <div className="totalsBlockItem">
        <img src={monthlyPowerIcon} alt="" className="totalBlockItemImg" />
        <p className="totalsBlockItemNumber">30+ </p>
        <p className="totalsBlockItemtext">{monthlyPowerText}</p>
      </div>
      <div className="totalsBlockItem">
        <img src={goalIcon} alt="" className="totalBlockItemImg" />
        <p className="totalsBlockItemNumber">31 + </p>
        <p className="totalsBlockItemtext">{marketYearsText}</p>
      </div>
    </div>
  );
}

export default TotalsBlock;

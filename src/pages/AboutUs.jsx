import React from "react";
import "../styles/aboutus.css";
import { useLang } from "../components/LanguageController";
import TotalsBlock from "../components/TotalsBlock";

function AboutUs() {
  const { translate } = useLang();
  return (
    <div className="aboutUsWrapper">
      <div className="aboutUsMainInformation">
        <div className="aboutUsCompanyInfo">
          <div className="aboutUsVideoWrapper">
            <iframe
              className="iframeVideo"
              iframe
              src="https://www.youtube.com/embed/_LKhKdLLfeM?si=Yc8W7yHeuxlQQ_Aj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="aboutUsTextWrapper">
            <h2 className="aboutUsCompanyInfoTitle">
              {translate("aboutUs.aboutUsCompanyInfoTitle")}
            </h2>
            <p className="aboutUsCompanyInfoText">
              {translate("aboutUs.aboutUsCompanyInfoText")}
            </p>
          </div>
        </div>
        <div className="aboutUsCompanyInfo">
          <h2 className="aboutUsCompanyInfoExperience">
            {translate("aboutUs.aboutUsCompanyInfoExperience")}
          </h2>
          <p className="aboutUsCompanyInfoText">
            {translate("aboutUs.aboutUsCompanyInfoExperienceText")}
          </p>
        </div>
        <div className="aboutUsCompanyInfo">
          <h2 className="aboutUsCompanyInfoTitle">
            {translate("aboutUs.aboutUsCompanyInfoProduction")}
          </h2>
          <p className="aboutUsCompanyInfoText">
            {translate("aboutUs.aboutUsCompanyInfoProductionText")}
          </p>
        </div>
      </div>
      <div className="aboutUsSection">
        <h2>{translate("aboutUs.whatWeDoTitle")}</h2>
        <p>{translate("aboutUs.whatWeDoSubtitle")}</p>

        <ul className="aboutUsListWWD">
          <li>{translate("aboutUs.wwdBalconies")}</li>
          <li>{translate("aboutUs.wwdRailings")}</li>
          <li>{translate("aboutUs.wwdItemGates")}</li>
          <li>{translate("aboutUs.wwdFrames")}</li>
          <li>{translate("aboutUs.wwdCustom")}</li>
        </ul>

        <p>{translate("aboutUs.aboutQualityNote")}</p>
        <h1 className="aboutUsImgSlider">Slider will be here</h1>
      </div>

      <TotalsBlock
        readyOrdersText={translate("totalsBlock.readyOrdersText")}
        readyProjectsText={translate("totalsBlock.readyProjectsText")}
        monthlyPowerText={translate("totalsBlock.monthlyPowerText")}
        marketYearsText={translate("totalsBlock.marketYearsText")}
      />
    </div>
  );
}

export default AboutUs;

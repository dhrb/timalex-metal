import React from "react";
import "../styles/aboutus.css";
import aboutUsBgImg from "../assets/images/aboutUsBg.jpg";
import { useLang } from "../components/LanguageController";
import TotalsBlock from "../components/TotalsBlock";
import ImageSlider from "../components/ImageSlider";
import ImagesData from "../data/imagesData.jsx";
import ContactForm from "../components/ContactForm.jsx";

function AboutUs() {
  const { translate } = useLang();
  const images = ImagesData.map((image) => image.image);

  return (
    <div className="aboutUsWrapper">
      <img src={aboutUsBgImg} alt="bgImg" className="aboutWrapperBg" />
      <div className="aboutUsMainInformation">
        <div className="aboutUsCompanyInfo">
          <h2 className="aboutUsCompanyInfoTitle">
            {translate("aboutUs.aboutUsCompanyInfoTitle")}
          </h2>
          <p className="aboutUsCompanyInfoText">
            {translate("aboutUs.aboutUsCompanyInfoText")}
          </p>
        </div>
        <div className="aboutUsCompanyInfo">
          <h2 className="aboutUsCompanyInfoTitle">
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
        <h2 className="whatWeDoTitle">{translate("aboutUs.whatWeDoTitle")}</h2>
        <p className="whatWeDoSubtitle">
          {translate("aboutUs.whatWeDoSubtitle")}
        </p>

        <ul className="aboutUsListWWD">
          <li>{translate("aboutUs.wwdBalconies")}</li>
          <li>{translate("aboutUs.wwdRailings")}</li>
          <li>{translate("aboutUs.wwdItemGates")}</li>
          <li>{translate("aboutUs.wwdFrames")}</li>
          <li>{translate("aboutUs.wwdCustom")}</li>
        </ul>
        <ImageSlider images={images} paginationLength={images.length} />
        <p className="aboutQualityNote">
          {translate("aboutUs.aboutQualityNote")}
        </p>
      </div>
      <TotalsBlock
        readyOrdersText={translate("totalsBlock.readyOrdersText")}
        readyProjectsText={translate("totalsBlock.readyProjectsText")}
        monthlyPowerText={translate("totalsBlock.monthlyPowerText")}
        marketYearsText={translate("totalsBlock.marketYearsText")}
      />
      <ContactForm />
    </div>
  );
}

export default AboutUs;

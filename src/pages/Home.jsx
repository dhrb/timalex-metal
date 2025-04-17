import React from "react";
import "./../styles/Home.css";
import { useLang } from "../components/LanguageController";
import ImageSlider from "../components/ImageSlider";
import TotalsBlock from "../components/TotalsBlock";
import homePageBalconImg from "./../assets/images/homePageBalcon.jpg";
import homePageGateImg from "./../assets/images/homepageGateImg.jpg";
import homePageRailingsImg from "./../assets/images/homePageRailings.jpg";
import homeHeroBgImage from "./../assets/images/homeHeroBgImage.jpg";
import weldingIcon from "./../assets/images/welding.png";

function Home() {
  const { translate } = useLang();
  const images = [homePageBalconImg, homePageGateImg, homePageRailingsImg];
  return (
    <div className="homeWrapper">
      <div className="homeHero">
        <h3 className="heroHeaderTitle">{translate("home.homeHeroTitle")}</h3>
        <button className="heroContactUsBtn">
          {translate("home.heroContactUsBtn")}
        </button>
        <button className="heroContactUsBtn">
          {translate("home.heroCatalogBtn")}
        </button>
      </div>
      <div className="homeHeroAbout">
        <h2 className="homeHeroAboutTitle">
          {translate("home.homeHeroAboutTitle")}
        </h2>
        <p className="homeHeroAboutSubtitle">
          {translate("home.homeHeroAboutSubtitle")}
        </p>
      </div>
      <div className="homeHeroAdvantages">
        <p className="homeHeroAdvantagesText">
          {translate("home.homeHeroAdvantagesText1")}
        </p>
        <p className="homeHeroAdvantagesText">
          {translate("home.homeHeroAdvantagesText2")}
        </p>
        <p className="homeHeroAdvantagesText">
          {translate("home.homeHeroAdvantagesText3")}
        </p>
      </div>
      <div className="homeHeroOffers">
        <div className="homeHeroOfferItems">
          <div className="heroOfferItem">
            <img src={weldingIcon} alt="" className="offerItemImg" />
            <h4 className="offerItemTitle">
              {translate("home.homeHeroOfferTitleCard1")}
            </h4>
            <p className="offerItemSubtitle">
              {translate("home.homeHeroOfferSubtitleCard1")}
            </p>
          </div>
          <div className="heroOfferItem">
            <img src={weldingIcon} alt="" className="offerItemImg" />
            <h4 className="offerItemTitle">
              {translate("home.homeHeroOfferTitleCard2")}
            </h4>
            <p className="offerItemSubtitle">
              {translate("home.homeHeroOfferSubtitleCard2")}
            </p>
          </div>
          <div className="heroOfferItem">
            <img src={weldingIcon} alt="" className="offerItemImg" />
            <h4 className="offerItemTitle">
              {translate("home.homeHeroOfferTitleCard3")}
            </h4>
            <p className="offerItemSubtitle">
              {translate("home.homeHeroOfferSubtitleCard3")}
            </p>
          </div>
          <div className="heroOfferItem">
            <img src={weldingIcon} alt="" className="offerItemImg" />
            <h4 className="offerItemTitle">
              {translate("home.homeHeroOfferTitleCard4")}
            </h4>
            <p className="offerItemSubtitle">
              {translate("home.homeHeroOfferSubtitleCard4")}
            </p>
          </div>
        </div>
      </div>
      <div className="homeTotalsBlock">
        <TotalsBlock />
      </div>
    </div>
  );
}

export default Home;

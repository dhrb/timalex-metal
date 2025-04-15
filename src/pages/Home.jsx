import React from "react";
import "./../styles/Home.css";
import { useLang } from "../components/LanguageController";
import ImageSlider from "../components/ImageSlider";
import homePageBalconImg from "./../assets/images/homePageBalcon.jpg";
import homePageGateImg from "./../assets/images/homepageGateImg.jpg";
import homePageRailingsImg from "./../assets/images/homePageRailings.jpg";
import homeHeroBgImage from "./../assets/images/homeHeroBgImage.jpg";

function Home() {
  const { translate } = useLang();
  const images = [homePageBalconImg, homePageGateImg, homePageRailingsImg];
  return (
    <div className="homeWrapper">
      <div className="homeHero">
        <div className="heroHeader">
          <img src={homeHeroBgImage} alt="" className="heroHeaderImg" />
        </div>
        <h3 className="heroHeaderTitle">{translate("home.homeHeroTitle")}</h3>
        {/* <div className="homeSlider">
          <ImageSlider images={images} />
        </div> */}
      </div>
    </div>
  );
}

export default Home;

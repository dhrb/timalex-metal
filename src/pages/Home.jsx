import React from "react";
import "./../styles/Home.css";
import { useLang } from "../components/LanguageController";
import ImageSlider from "../components/ImageSlider";
import TotalsBlock from "../components/TotalsBlock";
import ImagesData from "../data/imagesData.jsx";

import homePageBalconImg from "./../assets/images/homePageBalcon.jpg";
import homePageGateImg from "./../assets/images/homepageGateImg.jpg";
import homePageRailingsImg from "./../assets/images/homePageRailings.jpg";
import homeHeroBgImage from "./../assets/images/homeHeroBgImage.jpg";
import weldingIcon from "./../assets/images/welding.png";
import CategoryCard from "../components/CategoryCard.jsx";

("​Компания BMP Tornado специализируется на изготовлении и установке балконов, предлагая широкий спектр услуг, включая остекление, утепление и отделку. Их продукция отличается высоким качеством и долговечностью, благодаря использованию современных материалов и технологий. Опытные специалисты компании обеспечивают индивидуальный подход к каждому проекту, учитывая пожелания клиента и особенности здания. BMP Tornado гарантирует надежность и эстетичность своих балконов, создавая комфортное пространство для отдыха и повседневной жизни.​");

function Home() {
  const { translate } = useLang();
  const images = ImagesData.map((image) => image.image);

  return (
    <div className="homeWrapper">
      <div className="homeHero">
        <h3 className="heroHeaderTitle">{translate("home.homeHeroTitle")}</h3>
        <div className="testDiv">
          <button className="heroContactUsBtn">
            {translate("home.heroContactUsBtn")}
          </button>
          <button className="heroContactUsBtn">
            {translate("home.heroCatalogBtn")}
          </button>
        </div>
      </div>
      <div className="homeHeroAbout">
        <h2 className="homeHeroAboutTitle">
          {translate("home.homeHeroAboutTitle")}
        </h2>
        <p className="homeHeroAboutSubtitle">
          {translate("home.homeHeroAboutSubtitle")}
        </p>
      </div>
      <div className="categoryCardsWrapper">
        <CategoryCard
          img={homePageBalconImg}
          title={"Balconies"}
          subtitle={"Lorem ipsum dolor sit"}
          link={"/balconies"}
        />
        <CategoryCard
          img={homePageRailingsImg}
          title={"Balconies"}
          subtitle={"Lorem ipsum dolor sit"}
          link={"/railings"}
        />
        <CategoryCard
          img={homePageGateImg}
          title={"Balconies"}
          subtitle={"Lorem ipsum dolor sit"}
          link={"/gates"}
        />
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
      <ImageSlider images={images} paginationLength={images.length} />
      {/* <TotalsBlock
        readyOrdersText={translate("totalsBlock.readyOrdersText")}
        readyProjectsText={translate("totalsBlock.readyProjectsText")}
        monthlyPowerText={translate("totalsBlock.monthlyPowerText")}
        marketYearsText={translate("totalsBlock.marketYearsText")}
      /> */}
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
            зробить бг
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
        </div>
      </div>
    </div>
  );
}

export default Home;

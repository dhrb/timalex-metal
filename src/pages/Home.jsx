import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Home.css";
import { useLang } from "../components/LanguageController";
import ImageSlider from "../components/ImageSlider";
import TotalsBlock from "../components/TotalsBlock";
import ImagesData from "../data/imagesData.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import categoryCardFrames from "../assets/images/categoryCardFramesImg.jpg";
import homePageGateImg from "./../assets/images/homepageGateImg.jpg";
import homePageRailingsImg from "./../assets/images/homePageRailings.jpg";
import ContactForm from "../components/ContactForm.jsx";

function Home() {
  const { translate } = useLang();
  const images = ImagesData.map((image) => image.image);

  return (
    <div className="homeWrapper">
      <div className="homeHero">
        <h3 className="heroHeaderTitle">{translate("home.homeHeroTitle")}</h3>
        <div className="heroHeaderBtns">
          <NavLink to="/contact" className="heroContactUsBtn">
            {translate("home.heroContactUsBtn")}
          </NavLink>
          <NavLink to="./aboutus" className="heroContactUsBtn">
            {translate("home.heroCatalogBtn")}
          </NavLink>
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
          img={homePageRailingsImg}
          title={"Railings"}
          link={"/balconies"}
        />
        <CategoryCard
          img={categoryCardFrames}
          title={"Frames"}
          link={"/railings"}
        />
        <CategoryCard img={homePageGateImg} title={"Gates"} link={"/gates"} />
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

      <div className="homeHeroStepsWrapper">
        {/* <div className="homeHeroStepsWrapperHead">
          <h1 className="homeHeroStepsWrapperTitle">
            {translate("home.homeWorkSectionTitle")}
          </h1>
        </div>

        <div className="homeHeroSteps">
          <div className="homeHeroStepsItem">
            <div className="homeHeroStepsItemText">
              <h3 className="homeHeroStepsTitle">
                {translate("home.homeHeroStep1Title")}
              </h3>
              <p className="homeHeroStepsSubtitle">
                {translate("home.homeHeroStep1Subtitle")}
              </p>
            </div>
            <img src={offeringStepImg} alt="" className="homeHeroStepImg" />
          </div>
          <div className="homeHeroStepsItem">
            <img src={planningStepImg} alt="" className="homeHeroStepImg" />
            <div className="homeHeroStepsItemText">
              <h3 className="homeHeroStepsTitle">
                {translate("home.homeHeroStep2Title")}
              </h3>
              <p className="homeHeroStepsSubtitle">
                {translate("home.homeHeroStep2Subtitle")}
              </p>
            </div>
          </div>
          <div className="homeHeroStepsItem">
            <div className="homeHeroStepsItemText">
              <h3 className="homeHeroStep3Title">
                {translate("home.homeHeroStep3Title")}
              </h3>
              <p className="homeHeroStepsSubtitle">
                {translate("home.homeHeroStep3Subtitle")}
              </p>
            </div>

            <img src={workersWorkImg} alt="" className="homeHeroStepImg" />
          </div>
          <div className="homeHeroStepsItem">
            <img src={finishStepImg} alt="" className="homeHeroStepImg" />
            <div className="homeHeroStepsItemText">
              <h3 className="homeHeroStepsTitle">
                {translate("home.homeHeroStep4Title")}
              </h3>
              <p className="homeHeroStepsSubtitle">
                {translate("home.homeHeroStep4Subtitle")}
              </p>
            </div>
          </div> */}
        <TotalsBlock
          readyOrdersText={translate("totalsBlock.readyOrdersText")}
          readyProjectsText={translate("totalsBlock.readyProjectsText")}
          monthlyPowerText={translate("totalsBlock.monthlyPowerText")}
          marketYearsText={translate("totalsBlock.marketYearsText")}
        />
        {/* </div> */}
        <div className="homeContactForm">
          <h2 className="homeContactFormTitle">Get in Touch with Us</h2>
          <p className="homeContactFormSubtitle">
            Have questions or ready to start your project? We're here to help —
            reach out today.
          </p>
          <ContactForm />
          <p className="homeContactFormSummary">
            Find our contact details below or send us a quick message through
            the form. Our team will respond as soon as possible to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

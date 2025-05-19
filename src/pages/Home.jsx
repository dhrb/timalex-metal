//packages
import { NavLink } from "react-router-dom";
import { useLang } from "../components/LanguageController";
//styles
import "./../styles/Home.css";
//components
import ImagesData from "../data/imagesData";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import TotalsBlock from "../components/TotalsBlock";
import CategoryCard from "../components/CategoryCard";

import gatesBg from "./../assets/images/gatesBg.jpg";
import homePageRailingsImg from "./../assets/images/homePageRailings.jpg";
import categoryCardFrames from "../assets/images/categoryCardFramesImg.jpg";

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
          link={"/railings"}
        />
        <CategoryCard
          img={categoryCardFrames}
          title={"Frames"}
          link={"/frames"}
        />
        <CategoryCard img={gatesBg} title={"Gates"} link={"/gates"} />
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
        <TotalsBlock
          readyOrdersText={translate("totalsBlock.readyOrdersText")}
          readyProjectsText={translate("totalsBlock.readyProjectsText")}
          monthlyPowerText={translate("totalsBlock.monthlyPowerText")}
          marketYearsText={translate("totalsBlock.marketYearsText")}
        />
        {/* </div> */}
        <div className="homeContactForm">
          <h2 className="homeContactFormTitle">
            {translate("home.homeContactFormTitle")}
          </h2>
          <p className="homeContactFormSubtitle">
            {translate("home.homeContactFormSubtitle")}
          </p>
          <ContactForm />
          <p className="homeContactFormSummary">
            {translate("home.homeContactFormSummary")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

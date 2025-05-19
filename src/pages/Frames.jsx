import "../styles/Balconies.css";
import { useLang } from "../components/LanguageController";
import ImageSlider from "../components/ImageSlider";
import imagesData from "../data/imagesData";
import balconiesBgImg from "./../assets/imagesData/constructions1.jpg";

function Frames() {
  const { translate } = useLang();

  const balconyImages = imagesData
    .filter((balcony) => balcony.category === "constructions")
    .map((item) => item.image);

  return (
    <div className="balconiesWrapper">
      <div className="balconiesNameWrapper">
        <img src={balconiesBgImg} alt="" className="balconiesNameWrapperImg" />
        <h3 className="balconiesName">{translate("header.headerFrames")}</h3>
      </div>
      <div className="balconiesHeader">
        <h3 className="balconiesTitle">
          {translate("balconies.balconiesTitle")}
        </h3>
        <p className="balconiesSubtitle">
          {translate("balconies.balconiesSubtitle")}
        </p>
      </div>
      <div className="balconiesBody">
        <div className="balconiesBodyAdvantages">
          <h3 className="balconiesBodyAdvantagesTitle">
            {translate("balconies.balconiesBodyAdvantagesTitle")}
          </h3>
          <p className="balconiesBodyAdvantagesSubtitle">
            {translate("balconies.balconiesBodyAdvantagesSubtitle")}
          </p>
          <ul className="balconiesBodyAdvantagesList">
            <li className="balconiesBodyAdvantagesListItem">
              {translate("balconies.balconiesBodyAdvantagesListItem1")}
            </li>
            <li className="balconiesBodyAdvantagesListItem">
              {translate("balconies.balconiesBodyAdvantagesListItem2")}
            </li>
            <li className="balconiesBodyAdvantagesListItem">
              {translate("balconies.balconiesBodyAdvantagesListItem3")}
            </li>
          </ul>
          <p className="balconiesBodyAdvantagesSummary">
            {translate("balconies.balconiesBodyAdvantagesSummary")}
          </p>
        </div>
        <ImageSlider images={balconyImages} />
        <div className="balconiesInfo">
          <h3 className="balconiesInfoTitle">
            {translate("balconies.balconiesInfoTitle")}
          </h3>
          <p className="balconiesInfoSubtitle">
            {translate("balconies.balconiesInfoSubtitle")}
          </p>
          <p className="balconiesInfoSubtitle1">
            {translate("balconies.balconiesInfoSubtitle1")}
          </p>
          <p className="balconiesInfoSubtitle2">
            {translate("balconies.balconiesInfoSubtitle2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Frames;

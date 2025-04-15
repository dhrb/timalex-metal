import React from "react";
import "./../styles/Navbar.css";
import { Link } from "react-router-dom";
import logoImg from "./../assets/images/logoImg.png";
import enFlagImg from "../assets/images/ukFlag.png";
import skFlagImg from "../assets/images/skFlag.png";
import homeIcon from "../assets/images/homeIcon.png";
import catalogIcon from "../assets/images/catalogIcon.png";
import balconyIcon from "../assets/images/balconyIcon.png";
import railIcon from "../assets/images/railingIcon.png";
import gateIcon from "../assets/images/gateIcon.png";
import aboutIcon from "../assets/images/aboutIcon.png";
import contactIcon from "../assets/images/contactIcon.png";
import { useLang } from "./LanguageController";

function Navbar() {
  const { language, switchLanguage, translate } = useLang();
  const LanguageToogle = () => {
    return (
      <img
        onClick={() => switchLanguage()}
        src={language === "en" ? enFlagImg : skFlagImg}
        alt=""
        className="languageImg"
      />
    );
  };

  return (
    <div className="navbarWrapper">
      <div className="navbarLogo">
        <Link to="/" className="navbarLogoLink">
          <img src={logoImg} alt="logo" className="navbarLogoImg" />
        </Link>
      </div>
      <div className="navbarLinks">
        <Link to="/" className="navbarLinkItem">
          <img src={homeIcon} alt="" className="navbarLinkImg" />

          {translate("header.headerHome")}
        </Link>
        <Link to="/catalog" className="navbarLinkItem">
          <img src={catalogIcon} alt="" className="navbarLinkImg" />

          {translate("header.headerCatalog")}
        </Link>
        <Link to="/balconies" className="navbarLinkItem">
          <img src={balconyIcon} alt="" className="navbarLinkImg" />
          {translate("header.headerBalconies")}
        </Link>
        <Link to="/railings" className="navbarLinkItem">
          <img src={railIcon} alt="" className="navbarLinkImg" />
          {translate("header.headerRailings")}
        </Link>
        <Link to="/gates" className="navbarLinkItem">
          <img src={gateIcon} alt="" className="navbarLinkImg" />
          {translate("header.headerGates")}
        </Link>
      </div>
      <div className="header.navbarLinkItem">
        <Link to="/aboutUs" className="navbarLinkItem">
          <img src={aboutIcon} alt="" className="navbarLinkImg" />
          {translate("header.headerAboutUs")}
        </Link>
        <Link to="/contact" className="navbarLinkItem">
          <img src={contactIcon} alt="" className="navbarLinkImg" />

          {translate("header.headerContact")}
        </Link>
      </div>
      <div className="navbarLanguage">
        <LanguageToogle />
      </div>
    </div>
  );
}

export default Navbar;

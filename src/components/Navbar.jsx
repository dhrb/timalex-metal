import React, { useState } from "react";
import "./../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
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
import sideMenuIcon from "../assets/images/sideMenuIcon.png";
import { useLang } from "./LanguageController";

function Navbar() {
  const { language, switchLanguage, translate } = useLang();
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const menuHandeler = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  console.log(language);
  const LanguageToogle = () => {
    return (
      <div className="navbarLanguage">
        <img
          onClick={() => switchLanguage()}
          src={language === "en" ? enFlagImg : skFlagImg}
          alt=""
          className="languageImg"
        />
        <p>{language == "en" ? "English" : "Slovak"}</p>
      </div>
    );
  };

  return (
    <div className={menuCollapsed ? "navbarClosed" : "navbarWrapper"}>
      <div className="navbarLogo">
        <NavLink to="/" className="navbarLogoLink">
          <img src={logoImg} alt="logo" className="navbarLogoImg" />
        </NavLink>
      </div>
      <div className="navbarBtnWrapp">
        <img
          onClick={() => menuHandeler()}
          className={menuCollapsed ? "sideMenuIconClosed" : "sideMenuIconOpen"}
          alt=""
          src={sideMenuIcon}
        />
      </div>
      <div className="navbarLinks">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbarLinkActive" : "navbarLinkItem"
          }
        >
          <img src={homeIcon} alt="" className="navbarLinkImg" />
          {translate(menuCollapsed ? " " : "header.headerHome")}
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? "navbarLinkActive" : "navbarLinkItem"
          }
        >
          <img src={catalogIcon} alt="" className="navbarLinkImg" />
          {translate(menuCollapsed ? " " : "header.headerCatalog")}
        </NavLink>
        <NavLink
          to="/balconies"
          className={({ isActive }) =>
            isActive ? "navbarLinkActive" : "navbarLinkItem"
          }
        >
          <img src={balconyIcon} alt="" className="navbarLinkImg" />
          {translate(menuCollapsed ? " " : "header.headerBalconies")}
        </NavLink>
        <NavLink
          to="/railings"
          className={({ isActive }) =>
            isActive ? "navbarLinkActive" : "navbarLinkItem"
          }
        >
          <img src={railIcon} alt="" className="navbarLinkImg" />
          {translate(menuCollapsed ? " " : "header.headerRailings")}
        </NavLink>
        <NavLink
          to="/gates"
          className={({ isActive }) =>
            isActive ? "navbarLinkActive" : "navbarLinkItem"
          }
        >
          <img src={gateIcon} alt="" className="navbarLinkImg" />
          {translate(menuCollapsed ? " " : "header.headerGates")}
        </NavLink>
      </div>
      <div className="header.navbarLinkItem">
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive ? "navbarLinkActive" : "navbarLinkItem"
          }
        >
          <img src={aboutIcon} alt="" className="navbarLinkImg" />
          {translate(menuCollapsed ? " " : "header.headerAboutUs")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "navbarLinkActive" : "navbarLinkItem"
          }
        >
          <img src={contactIcon} alt="" className="navbarLinkImg" />

          {translate(menuCollapsed ? " " : "header.headerContact")}
        </NavLink>
      </div>
      <LanguageToogle />
    </div>
  );
}

export default Navbar;

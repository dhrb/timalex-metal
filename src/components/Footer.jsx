import React from "react";
import "./../styles/Footer.css";
import logoImg from "./../assets/images/logoImg.png";
import { useLang } from "../components/LanguageController";
import { useLocation, NavLink } from "react-router-dom";
import linkedinIcon from "./../assets/images/linkedinIcon.png";
import whatsappIcon from "./../assets/images/whatsappIcon.png";
import sendIcon from "./../assets/images/sendIcon.png";

function Footer() {
  const { translate } = useLang();
  return (
    <footer className="footerWrapper">
      <div className="footerMain">
        <div className="footerMainLogo">
          <img src={logoImg} alt="logo" className="footerMainLogoImg" />
          <div className="footerLogoDescription">
            <h3 className="footerTitle">{translate("footer.footerTitle")}</h3>
            <p className="footerSubtitle">
              {translate("footer.footerSubtitle")}
            </p>
          </div>
          <div className="footerLogoNav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "footerLogoNavLinkActive" : "footerLogoNavLink"
              }
              to="/"
            >
              {translate("header.headerHome")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "footerLogoNavLinkActive" : "footerLogoNavLink"
              }
              to="/catalog"
            >
              {translate("header.headerCatalog")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "footerLogoNavLinkActive" : "footerLogoNavLink"
              }
              to="/balconies"
            >
              {translate("header.headerBalconies")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "footerLogoNavLinkActive" : "footerLogoNavLink"
              }
              to="/railings"
            >
              {translate("header.headerRailings")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "footerLogoNavLinkActive" : "footerLogoNavLink"
              }
              to="/gates"
            >
              {translate("header.headerGates")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "footerLogoNavLinkActive" : "footerLogoNavLink"
              }
              to="/aboutUs"
            >
              {translate("header.headerAboutUs")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "footerLogoNavLinkActive" : "footerLogoNavLink"
              }
              to="/contact"
            >
              {translate("header.headerContact")}
            </NavLink>
          </div>
        </div>
        <div className="footerContacts">
          <a href="tel:+421918123153" className="footerContactItem">
            +421918123153
          </a>
          <a href="mailto:office@timalex.sk" className="footerContactItem">
            office@timalex.sk
          </a>
          <div className="footerContactsSocial">
            <a
              href="https://api.whatsapp.com/send?phone=380676927263"
              className="footerContactItem"
            >
              <img
                src={whatsappIcon}
                alt="socialicon"
                className="footerContactImg"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=380676927263"
              className="footerContactItem"
            >
              <img
                src={linkedinIcon}
                alt="socialicon"
                className="footerContactImg"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <div className="footerSubscribe">
          <input
            type="text"
            className="footerSubscribeInput"
            placeholder={translate("footer.footerSubscribe")}
          />
          <img src={sendIcon} alt="" className="footerSubscribeSendIcon" />
        </div>
        <p className="footerAuthor">{translate("footer.footerAuthor")}</p>
        <p className="footerCopyright">
          © {translate("footer.footerCopyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

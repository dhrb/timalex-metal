import React from "react";
import "../styles/contact.css";
import contactUsBgImg from "./../assets/images/contactUsBgImg.jpg";
import { useLang } from "../components/LanguageController";

function Contact() {
  const { translate } = useLang();

  return (
    <div className="contactWrapper">
      <div className="contactHeader">
        <img
          src={contactUsBgImg}
          alt="contactUsBgImg"
          className="contactUsBgImg"
        />
        <h1 className="contactHeaderTitle">
          {translate("contact.contactHeaderTitle")}
        </h1>
        <p className="contactHeaderSubtitle">
          {translate("contact.contactHeaderSubtitle")}
        </p>
      </div>
      <div className="contactBody">
        <div className="contactBodyInfo">
          <h3 className="contactBodyInfoTitle">
            {translate("contact.contactBodyInfoTitle")}
          </h3>
          <div className="contactBodyInfoItems">
            <div className="contactBodyInfoItem">
              <h3 className="bodyInfoItemTitle">
                {translate("contact.contactBodyInfoFirm")}
              </h3>
              <a className="bodyInfoItemTitle">
                {translate("contact.contactBodyInfoCity")}
              </a>
            </div>
            <div className="contactBodyInfoItem">
              <h3 className="bodyInfoItemTitle">
                {translate("contact.contactBodyInfoPhone")}
              </h3>
              <a className="bodyInfoItemTitle">+421 000 000 00</a>
            </div>
            <div className="contactBodyInfoItem">
              <h3 className="bodyInfoItemTitle">
                {translate("contact.contactBodyInfoEmail")}
              </h3>
              <a className="bodyInfoItemTitle">timalex@timales.sk</a>
            </div>
            <div className="contactBodyInfoItem">
              <h3 className="bodyInfoItemTitle">
                {translate("contact.contactBodySocialLinks")}
              </h3>
              <a className="bodyInfoItemTitle">img whatsapp linkedin</a>
            </div>
          </div>
        </div>
        <form className="contactBodyForm">
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyFormFN")}
            </p>
            <input
              className="contactBodyFormItemInput"
              type="firstName"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyFormLN")}
            </p>
            <input
              className="contactBodyFormItemInput"
              type="lastName"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyInfoEmail")}
            </p>
            <input
              className="contactBodyFormItemInput"
              type="Email"
              id="Email"
              name="Email"
            />
          </div>
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyInfoPhone")}
            </p>
            <input
              className="contactBodyFormItemInput"
              type="phone"
              id="phone"
              name="phone"
            />
          </div>
          <div className="contactSelectCountryWrapp">
            <select
              className="contactSelectCountry"
              name="countries"
              id="countries"
            >
              <option value="Slovakia" className="contactSelectCountryName">
                Slovakia
              </option>
              <option value="Germany" className="contactSelectCountryName">
                Germany
              </option>
              <option value="Holland" className="contactSelectCountryName">
                Holland
              </option>
            </select>
          </div>
          <button className="contactFormBtn">
            {translate("contact.contactFormBtn")}
          </button>
        </form>
      </div>
      <div className="contactFooter">
        <h3 className="contactFooterText">
          {translate("contact.contactFooterText")}
        </h3>
      </div>
    </div>
  );
}

export default Contact;

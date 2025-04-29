import React from "react";
import "../styles/contact.css";
import contactUsBgImg from "./../assets/images/contactUsBgImg.jpg";
import { useLang } from "../components/LanguageController";
import ContactForm from "../components/ContactForm";

function Contact({ isFormSent, setIsFormSent }) {
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
      <ContactForm setIsFormSent={setIsFormSent} isFormSent={isFormSent} />
      <div className="contactFooter">
        <h3 className="contactFooterText">
          {translate("contact.contactFooterText")}
        </h3>
      </div>
    </div>
  );
}

export default Contact;

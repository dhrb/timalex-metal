import React, { useEffect, useState } from "react";
import { useLang } from "./LanguageController";
import emailjs from "emailjs-com";
import messageReceivedImg from "./../assets/images/messageReceivedImg.png";

function ContactForm() {
  const { translate } = useLang();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Slovakia");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFormSent, setIsFormSent] = useState("false");

  useEffect(() => {
    const formSent = localStorage.getItem("formSent");
    console.log(formSent);
    if (formSent == "true") {
      () => {
        isFormSent(true);
        localStorage.setItem("formSent", "true");
        console.log("form toggled to true");
      };
    }
  }, []);

  const templateParams = {
    firstname,
    lastname,
    email,
    phone,
    country,
  };

  const handleInput = (e) => {
    let id = e.target.id;
    let text = e.target.value;
    switch (id) {
      case "firstname":
        setFirstname(text);
        break;
      case "lastName":
        setLastname(text);
        break;
      case "email":
        setEmail(text);
        break;
      case "phone":
        setPhone(text);
        break;
      case "country":
        setCountry(text);
        break;
      default:
    }
  };

  const validateFields = () => {
    const newErrors = {};

    if (!firstname.trim()) newErrors.firstname = "First name is required.";
    if (!lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Phone number must contain only digits.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    const key = `4ZZFnnEN3wp7yjDFa`;
    e.preventDefault();
    if (!validateFields()) return;
    setLoading(true);
    emailjs
      .send("service_nvj38rj", "template_zqelhv8", templateParams, key)
      .then((res, err) => {
        console.log(res);
        if (res.status == 200) {
          setIsFormSent(true);
          setLoading(false);
        } else console.log(err.message);
      });
  };

  return (
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
            <a className="bodyInfoItemTitle">+ 421 000 000 00</a>
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
          </div>
        </div>
      </div>
      {isFormSent ? (
        <div className="formSentMessage">
          <img src={messageReceivedImg} alt="" className="formSentMessageImg" />
          <p className="formSentMessageText">
            {translate("contact.formReceivedText")}
          </p>
        </div>
      ) : (
        <form className="contactBodyForm">
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyFormFN")}
            </p>
            <input
              onChange={(e) => handleInput(e)}
              className={`contactBodyFormItemInput ${
                errors.firstname ? "inputError" : ""
              }`}
              type="text"
              id="firstname"
            />
          </div>
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyFormLN")}
            </p>
            <input
              onChange={(e) => handleInput(e)}
              className={`contactBodyFormItemInput ${
                errors.lastname ? "inputError" : ""
              }`}
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyInfoEmail")}
            </p>

            <input
              onChange={(e) => handleInput(e)}
              className={`contactBodyFormItemInput ${
                errors.email ? "inputError" : ""
              }`}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="contactBodyFormItem">
            <p className="contactBodyFormName">
              {translate("contact.contactBodyInfoPhone")}
            </p>

            <input
              onChange={(e) => handleInput(e)}
              className={`contactBodyFormItemInput ${
                errors.phone ? "inputError" : ""
              }`}
              type="text"
              id="phone"
              name="phone"
              required
            />
          </div>
          <div className="contactSelectCountryWrapp">
            <select
              className="contactSelectCountry"
              name="countries"
              id="countries"
            >
              <option
                onClick={() => setCountry(e.country.value)}
                value="I don`t know."
                className="contactSelectCountryName"
              >
                I don`t know.
              </option>
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
          <button onClick={(e) => handleSubmit(e)} className="contactFormBtn">
            {loading
              ? translate("contact.contactLoadingBtn")
              : translate("contact.contactFormBtn")}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;

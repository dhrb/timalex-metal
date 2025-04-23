import React from "react";
import "./../styles/Header.css";
import linkedinIcon from "./../assets/images/linkedinIcon.png";
import whatsappIcon from "./../assets/images/whatsappIcon.png";

function Header() {
  return (
    <div className="headerWrapper">
      <a href="mailto:office@timalex.sk" className="headerLink">
        📩 office@timalex.sk
      </a>
      <a href="tel:+421918123153" className="headerLink">
        {" "}
        📞 +421918123153
      </a>
      <div className="headerSocialLinks">
        <a
          href="https://api.whatsapp.com/send?phone=380676927263"
          target="_blank"
          className="headerLink"
        >
          <img img className="headerLinkImg" src={whatsappIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexsimonov-timalex/"
          className="headerLink"
        >
          <img className="headerLinkImg" src={linkedinIcon} />
        </a>
      </div>
    </div>
  );
}

export default Header;

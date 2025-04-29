import { useState, useEffect } from "react";
import "./../App.css";

function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const cookieAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookieBannerWrapper">
      <p className="cookieBannerText">
        We use cookies to enhance your browsing experience, personalize content,
        and analyze site traffic. By continuing to use our website, you consent
        to the use of cookies as outlined in our privacy policy. cookies.
      </p>
      <div className="cookieBannersButtons">
        <button className="cookieBannerBtn" onClick={cookieAccept}>
          Accept
        </button>
        <button className="cookieBannerBtn" onClick={cookieAccept}>
          Decline
        </button>
        <button className="cookieBannerBtn" onClick={cookieAccept}>
          Privacy policy
        </button>
      </div>
    </div>
  );
}
export default CookieConsentBanner;

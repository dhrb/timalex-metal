import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Catalog from "./pages/Catalog.jsx";
import Balconies from "./pages/Balconies.jsx";
import Railings from "./pages/Railings.jsx";
import Gates from "./pages/Gates.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CookieConsentBanner from "./components/CookieConsentBanner.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageController.jsx";
import imagesData from "./data/imagesData.jsx";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="appWrapper">
          <div className="appNav">
            <Navbar />
          </div>
          <div className="appMain">
            <div className="appHeader">
              <Header />
            </div>
            <div className="appRouter">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/balconies" element={<Balconies />} />
                <Route path="/railings" element={<Railings />} />
                <Route path="/gates" element={<Gates />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <div className="appFooter">
              <CookieConsentBanner />
              <Footer />
            </div>
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
